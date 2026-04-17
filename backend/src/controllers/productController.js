import prisma from '../config/db.js';
import { uploadToCloudinary, deleteFromCloudinary } from '../utils/cloudinaryHelper.js';

// @desc    Get all products with images
// @route   GET /api/products
// @access  Public
export const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: { images: true },
      orderBy: { createdAt: 'desc' },
    });
    res.status(200).json(products);
  } catch (error) {
    console.error('Fetch products error:', error);
    res.status(500).json({ error: 'Server error fetching products' });
  }
};

// @desc    Get a single product with images
// @route   GET /api/products/:id
// @access  Public
export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: { id },
      include: { images: true },
    });
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error('Fetch product error:', error);
    res.status(500).json({ error: 'Server error fetching product' });
  }
};

// @desc    Create a new product with multiple images
// @route   POST /api/products
// @access  Private/Admin
export const createProduct = async (req, res) => {
  try {
    const {
      name, description, packSize, dosage, modeOfAction,
      indication, usageInstruction, precautions, storage, disclaimer,
      category
    } = req.body;

    const product = await prisma.product.create({
      data: {
        name: name || '',
        description: description || '',
        packSize: packSize || null,
        dosage: dosage || null,
        modeOfAction: modeOfAction || null,
        indication: indication || null,
        usageInstruction: usageInstruction || null,
        precautions: precautions || null,
        storage: storage || null,
        disclaimer: disclaimer || null,
        category: category || 'General',
      },
    });

    if (req.files && req.files.length > 0) {
      const uploadPromises = req.files.map((file) =>
        uploadToCloudinary(file.buffer, 'larsunlab/products')
      );
      const uploadResults = await Promise.all(uploadPromises);
      const imageDatas = uploadResults.map(result => ({
        url: result.secure_url,
        cloudinaryPublicId: result.public_id,
        productId: product.id
      }));
      await prisma.productImage.createMany({ data: imageDatas });
    }

    const createdProduct = await prisma.product.findUnique({
      where: { id: product.id },
      include: { images: true }
    });

    res.status(201).json(createdProduct);
  } catch (error) {
    console.error('Create product error:', error);
    res.status(500).json({ error: 'Server error creating product' });
  }
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name, description, packSize, dosage, modeOfAction,
      indication, usageInstruction, precautions, storage, disclaimer,
      category, removeImageIds
    } = req.body;

    const existingProduct = await prisma.product.findUnique({
      where: { id },
      include: { images: true }
    });
    if (!existingProduct) return res.status(404).json({ error: 'Product not found' });

    if (removeImageIds) {
      try {
        const idsToRemove = JSON.parse(removeImageIds);
        if (Array.isArray(idsToRemove)) {
          for (const imgId of idsToRemove) {
            const img = await prisma.productImage.findUnique({ where: { id: imgId } });
            if (img) {
              await deleteFromCloudinary(img.cloudinaryPublicId);
              await prisma.productImage.delete({ where: { id: imgId } });
            }
          }
        }
      } catch (e) {
        console.warn('Failed to parse removeImageIds:', e);
      }
    }

    if (req.files && req.files.length > 0) {
      const uploadPromises = req.files.map((file) =>
        uploadToCloudinary(file.buffer, 'larsunlab/products')
      );
      const uploadResults = await Promise.all(uploadPromises);
      const imageDatas = uploadResults.map(result => ({
        url: result.secure_url,
        cloudinaryPublicId: result.public_id,
        productId: id
      }));
      await prisma.productImage.createMany({ data: imageDatas });
    }

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        name: name !== undefined ? name : undefined,
        description: description !== undefined ? description : undefined,
        packSize: packSize !== undefined ? (packSize || null) : undefined,
        dosage: dosage !== undefined ? (dosage || null) : undefined,
        modeOfAction: modeOfAction !== undefined ? (modeOfAction || null) : undefined,
        indication: indication !== undefined ? (indication || null) : undefined,
        usageInstruction: usageInstruction !== undefined ? (usageInstruction || null) : undefined,
        precautions: precautions !== undefined ? (precautions || null) : undefined,
        storage: storage !== undefined ? (storage || null) : undefined,
        disclaimer: disclaimer !== undefined ? (disclaimer || null) : undefined,
        category: category !== undefined ? category : undefined,
      },
      include: { images: true }
    });

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Update product error:', error);
    res.status(500).json({ error: 'Server error updating product' });
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({ 
      where: { id },
      include: { images: true }
    });
    if (!product) return res.status(404).json({ error: 'Product not found' });

    for (const img of product.images) {
      await deleteFromCloudinary(img.cloudinaryPublicId);
    }

    await prisma.product.delete({ where: { id } });
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Delete product error:', error);
    res.status(500).json({ error: 'Server error deleting product' });
  }
};
