import prisma from '../config/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// @desc    Register a new admin
// @route   POST /api/auth/register
// @access  Public
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if admin already exists
    const existingAdmin = await prisma.admin.findFirst({
      where: {
        OR: [
          { email: email },
          { username: username }
        ]
      }
    });

    if (existingAdmin) {
      return res.status(400).json({ error: 'Admin with this email or username already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create admin
    const admin = await prisma.admin.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    // Create token
    const token = jwt.sign(
      { id: admin.id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }
    );

    res.status(201).json({
      success: true,
      token,
      admin: {
        id: admin.id,
        username: admin.username,
        email: admin.email
      }
    });
  } catch (error) {
    console.error('Registration Error:', error);
    res.status(500).json({ error: 'Server error during registration' });
  }
};

// @desc    Login admin
// @route   POST /api/auth/login
// @access  Public
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Fallback: Check if we should allow a hardcoded dev login if DB fails
    let admin;
    try {
      admin = await prisma.admin.findUnique({
        where: { email }
      });
    } catch (err) {
      console.error('Database query failed:', err.message);
      // HARDCODED FALLBACK FOR DEV PURPOSES ONLY
      if (email === 'admin@larsunlabs.com' && password === 'adminpassword123') {
        console.log('Using hardcoded fallback login');
        const token = jwt.sign(
          { id: 'dummy-admin-id', username: 'admin' },
          process.env.JWT_SECRET,
          { expiresIn: process.env.JWT_EXPIRE }
        );

        return res.status(200).json({
          success: true,
          token,
          admin: { id: 'dummy-admin-id', username: 'admin', email: 'admin@larsunlabs.com' }
        });
      }
      throw err;
    }

    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Create token
    const token = jwt.sign(
      { id: admin.id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }
    );

    res.status(200).json({
      success: true,
      token,
      admin: {
        id: admin.id,
        username: admin.username,
        email: admin.email
      }
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ error: 'Server error during login' });
  }
};

// @desc    Get current logged in admin
// @route   GET /api/auth/me
// @access  Private
export const getMe = async (req, res) => {
  try {
    const admin = await prisma.admin.findUnique({
      where: { id: req.user.id },
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true
      }
    });

    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' });
    }

    res.status(200).json({
      success: true,
      admin
    });
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ error: 'Server error fetching profile' });
  }
};
