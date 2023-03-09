const express = require('express');
const router = express.Router();
const { getProfileById, createProfile, updateProfile } = require('../controllers/profiles.controller');

router.get('/:id', getProfileById);
// router.get('/', getProfile);
router.post('/', createProfile);
router.put('/:id',  updateProfile)

module.exports = router;