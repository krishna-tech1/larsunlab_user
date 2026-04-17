import prisma from '../config/db.js';
// Trigger restart

// @desc    Get all distributors
// @route   GET /api/distributors
// @access  Public
export const getDistributors = async (req, res) => {
  try {
    const distributors = await prisma.distributor.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.status(200).json(distributors);
  } catch (error) {
    console.error('Error fetching distributors:', error);
    res.status(500).json({ error: 'Server error fetching distributors' });
  }
};

// @desc    Create a new distributor
// @route   POST /api/distributors
// @access  Private/Admin
export const createDistributor = async (req, res) => {
  try {
    const { name, region } = req.body;

    const distributor = await prisma.distributor.create({
      data: {
        name,
        region
      }
    });

    res.status(201).json(distributor);
  } catch (error) {
    console.error('Error creating distributor:', error);
    res.status(500).json({ error: 'Server error creating distributor' });
  }
};

// @desc    Update a distributor
// @route   PUT /api/distributors/:id
// @access  Private/Admin
export const updateDistributor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, region } = req.body;

    const distributor = await prisma.distributor.update({
      where: { id },
      data: {
        name,
        region
      }
    });

    res.status(200).json(distributor);
  } catch (error) {
    console.error('Error updating distributor:', error);
    res.status(500).json({ error: 'Server error updating distributor' });
  }
};

// @desc    Delete a distributor
// @route   DELETE /api/distributors/:id
// @access  Private/Admin
export const deleteDistributor = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.distributor.delete({
      where: { id }
    });

    res.status(200).json({ message: 'Distributor deleted successfully' });
  } catch (error) {
    console.error('Error deleting distributor:', error);
    res.status(500).json({ error: 'Server error deleting distributor' });
  }
};
