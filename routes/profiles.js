const express = require('express');
const router = express.Router();
const { getProfile, createProfile } = require('../controllers/profiles.controller');

router.get('/:id', getProfile);
// router.get('/', getProfile);
router.post('/', createProfile);

module.exports = router;