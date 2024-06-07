const express = require('express');
const router = express.Router();
const uploadController = require('./controller');

// Konfigurasi multer untuk mengelola file yang diunggah
const multer = require('multer');

const upload = multer();

router.post('/karbo', upload.single('file'), uploadController.mlCarb);
router.post('/sayur', upload.single('file'), uploadController.mlVegetable);
router.post('/kacang', upload.single('file'), uploadController.mlPeanut);
router.post('/daily', upload.single('file'), uploadController.mlDaily);
router.post('/daging', upload.single('file'), uploadController.mlMeat);
router.post('/rempah', upload.single('file'), uploadController.mlSpice);
router.post('/buah', upload.single('file'), uploadController.mlFruit);

module.exports = router;
