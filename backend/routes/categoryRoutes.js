import express from 'express';
import asyncHandler from 'express-async-handler';

const router = express.Router();

import Category from '../models/categoryModel.js';

// @desc    Fetch all categories
// @router  GET /api/categories
// @access  Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const categories = await Category.find({});
    res.json(categories);
  })
);

export default router;
