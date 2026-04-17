import jwt from 'jsonwebtoken';
import prisma from '../config/db.js';

export const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Get token from header
    token = req.headers.authorization.split(' ')[1];
  }

  // Check if no token
  if (!token) {
    return res.status(401).json({ error: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Add user to request
    req.user = await prisma.admin.findUnique({
      where: { id: decoded.id },
      select: {
          id: true,
          username: true,
          email: true,
          createdAt: true
      }
    });

    if (!req.user) {
        return res.status(401).json({ error: 'Token is valid but admin not found' });
    }

    next();
  } catch (err) {
    console.error('Auth middleware error:', err.message);
    res.status(401).json({ error: 'Token is not valid' });
  }
};
