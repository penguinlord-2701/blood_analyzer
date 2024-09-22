const express = require('express');
const router = express.Router();
const { uploadReport, analyzeReport } = require('../controllers/reportController');

// File upload route
router.post('/upload', uploadReport);

// Report analysis route
router.post('/analyze', analyzeReport);

module.exports = router;
