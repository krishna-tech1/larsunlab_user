import cloudinary from '../config/cloudinary.js';

export const uploadToCloudinary = (fileBuffer, folder = 'larsunlab', originalName = null) => {
  return new Promise((resolve, reject) => {
    const options = {
      folder: folder,
      resource_type: 'auto',
    };

    if (originalName) {
      // Clean filename for Cloudinary public_id
      const cleanName = originalName.split('.')[0].replace(/[^a-zA-Z0-9]/g, '_');
      options.public_id = `${cleanName}_${Date.now()}`;
      options.use_filename = true;
    }

    const uploadStream = cloudinary.uploader.upload_stream(
      options,
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    uploadStream.end(fileBuffer);
  });
};

export const deleteFromCloudinary = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error('Cloudinary delete error:', error);
  }
};
