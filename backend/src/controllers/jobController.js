import prisma from '../config/db.js';

// @desc    Get all jobs
// @route   GET /api/jobs
// @access  Public
export const getJobs = async (req, res) => {
  try {
    const jobs = await prisma.job.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.status(200).json(jobs);
  } catch (error) {
    console.error('Fetch jobs error:', error);
    res.status(500).json({ error: 'Server error fetching jobs' });
  }
};

// @desc    Create a new job
// @route   POST /api/jobs
// @access  Private/Admin
export const createJob = async (req, res) => {
  try {
    const { title, location, exp, type } = req.body;
    
    if (!title || !location || !exp || !type) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const job = await prisma.job.create({
      data: {
        title,
        location,
        exp,
        type,
        status: 'ACTIVE'
      },
    });

    res.status(201).json(job);
  } catch (error) {
    console.error('Create job error:', error);
    res.status(500).json({ error: 'Server error creating job' });
  }
};

// @desc    Update a job
// @route   PUT /api/jobs/:id
// @access  Private/Admin
export const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, location, exp, type, status } = req.body;

    const existingJob = await prisma.job.findUnique({ where: { id } });
    if (!existingJob) return res.status(404).json({ error: 'Job not found' });

    const updatedJob = await prisma.job.update({
      where: { id },
      data: {
        title: title !== undefined ? title : undefined,
        location: location !== undefined ? location : undefined,
        exp: exp !== undefined ? exp : undefined,
        type: type !== undefined ? type : undefined,
        status: status !== undefined ? status : undefined,
      },
    });

    res.status(200).json(updatedJob);
  } catch (error) {
    console.error('Update job error:', error);
    res.status(500).json({ error: 'Server error updating job' });
  }
};

// @desc    Delete a job
// @route   DELETE /api/jobs/:id
// @access  Private/Admin
export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await prisma.job.findUnique({ where: { id } });
    if (!job) return res.status(404).json({ error: 'Job not found' });

    await prisma.job.delete({ where: { id } });
    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error('Delete job error:', error);
    res.status(500).json({ error: 'Server error deleting job' });
  }
};
