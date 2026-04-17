import prisma from '../config/db.js';
import { uploadToCloudinary, deleteFromCloudinary } from '../utils/cloudinaryHelper.js';

// @desc    Get all events with their images
// @route   GET /api/events
// @access  Public
export const getEvents = async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      include: { images: true },
      orderBy: { createdAt: 'desc' },
    });
    res.status(200).json(events);
  } catch (error) {
    console.error('Fetch events error:', error);
    res.status(500).json({ error: 'Server error fetching events' });
  }
};

// @desc    Create a new event with multiple images
// @route   POST /api/events
// @access  Private/Admin
export const createEvent = async (req, res) => {
  try {
    const { title, description, location, date, endDate, type } = req.body;
    
    // Create the event first
    const event = await prisma.event.create({
      data: {
        title,
        description,
        location,
        date,
        endDate,
        type,
      },
    });

    // If files are uploaded, send them to Cloudinary and link to the event
    if (req.files && req.files.length > 0) {
      const uploadPromises = req.files.map((file) => 
        uploadToCloudinary(file.buffer, 'larsunlab/events')
      );
      
      const uploadResults = await Promise.all(uploadPromises);
      
      const imageDatas = uploadResults.map(result => ({
        url: result.secure_url,
        cloudinaryPublicId: result.public_id,
        eventId: event.id
      }));

      await prisma.eventImage.createMany({
        data: imageDatas
      });
    }

    // Return the event with its images
    const createdEvent = await prisma.event.findUnique({
      where: { id: event.id },
      include: { images: true }
    });

    res.status(201).json(createdEvent);
  } catch (error) {
    console.error('Create event error:', error);
    res.status(500).json({ error: 'Server error creating event' });
  }
};

// @desc    Update an event
// @route   PUT /api/events/:id
// @access  Private/Admin
export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, location, date, endDate, type, removeImageIds } = req.body;

    const existingEvent = await prisma.event.findUnique({ 
      where: { id },
      include: { images: true }
    });
    
    if (!existingEvent) {
      return res.status(404).json({ error: 'Event not found' });
    }

    // Handle image removal if requested
    if (removeImageIds) {
      const idsToRemove = JSON.parse(removeImageIds);
      for (const imgId of idsToRemove) {
        const img = await prisma.eventImage.findUnique({ where: { id: imgId } });
        if (img) {
          await deleteFromCloudinary(img.cloudinaryPublicId);
          await prisma.eventImage.delete({ where: { id: imgId } });
        }
      }
    }

    // Handle new images
    if (req.files && req.files.length > 0) {
      const uploadPromises = req.files.map((file) => 
        uploadToCloudinary(file.buffer, 'larsunlab/events')
      );
      
      const uploadResults = await Promise.all(uploadPromises);
      
      const imageDatas = uploadResults.map(result => ({
        url: result.secure_url,
        cloudinaryPublicId: result.public_id,
        eventId: id
      }));

      await prisma.eventImage.createMany({
        data: imageDatas
      });
    }

    const updatedEvent = await prisma.event.update({
      where: { id },
      data: {
        title,
        description,
        location,
        date,
        endDate,
        type,
      },
      include: { images: true }
    });

    res.status(200).json(updatedEvent);
  } catch (error) {
    console.error('Update event error:', error);
    res.status(500).json({ error: 'Server error updating event' });
  }
};

// @desc    Delete an event
// @route   DELETE /api/events/:id
// @access  Private/Admin
export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await prisma.event.findUnique({ 
      where: { id },
      include: { images: true }
    });

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    // Delete all images from Cloudinary
    for (const img of event.images) {
      await deleteFromCloudinary(img.cloudinaryPublicId);
    }

    await prisma.event.delete({ where: { id } });

    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Delete event error:', error);
    res.status(500).json({ error: 'Server error deleting event' });
  }
};
