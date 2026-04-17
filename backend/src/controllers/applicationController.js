import prisma from '../config/db.js';
import { uploadToCloudinary } from '../utils/cloudinaryHelper.js';

// @desc    Submit a new application
// @route   POST /api/applications
// @access  Public
export const submitApplication = async (req, res) => {
  try {
    const { fullName, email, phone, jobId } = req.body;

    if (!fullName || !email || !phone || !jobId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check for duplicate application BEFORE uploading file
    const existingApplication = await prisma.application.findFirst({
      where: {
        jobId: jobId,
        OR: [
          { email: email },
          { phone: phone }
        ]
      }
    });

    if (existingApplication) {
      console.log(`Duplicate application detected for ${email}/${phone} on job ${jobId}. Silently rejecting.`);
      return res.status(201).json({ 
        message: 'Application submitted successfully',
        silent: true 
      });
    }

    // Handle file upload
    let resumeUrl = null;
    if (req.file) {
        const uploadResult = await uploadToCloudinary(req.file.buffer, 'larsun-resumes', req.file.originalname);
        resumeUrl = uploadResult.secure_url;
    }

    // Save actual new application
    const application = await prisma.application.create({
      data: {
        fullName,
        email,
        phone,
        resume: resumeUrl,
        jobId,
        status: 'PENDING'
      }
    });

    res.status(201).json({ 
      message: 'Application submitted successfully',
      id: application.id 
    });
  } catch (error) {
    console.error('Submit application error:', error);
    res.status(500).json({ error: 'Server error submitted application' });
  }
};

// @desc    Get all applications
// @route   GET /api/applications
// @access  Private/Admin
export const getApplications = async (req, res) => {
  try {
    const applications = await prisma.application.findMany({
      include: { job: true },
      orderBy: { createdAt: 'desc' }
    });
    res.status(200).json(applications);
  } catch (error) {
    console.error('Fetch applications error:', error);
    res.status(500).json({ error: 'Server error fetching applications' });
  }
};

// @desc    Update application status
// @route   PUT /api/applications/:id
// @access  Private/Admin
export const updateApplicationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const application = await prisma.application.update({
      where: { id },
      data: { status }
    });

    res.status(200).json(application);
  } catch (error) {
    console.error('Update application error:', error);
    res.status(500).json({ error: 'Server error updating application' });
  }
};

// @desc    Delete application
// @route   DELETE /api/applications/:id
// @access  Private/Admin
export const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.application.delete({ where: { id } });
    res.status(200).json({ message: 'Application removed' });
  } catch (error) {
    console.error('Delete application error:', error);
    res.status(500).json({ error: 'Server error deleting application' });
  }
};
