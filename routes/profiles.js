const express = require('express');
const router = express.Router();
const { getProfileById, createProfile } = require('../controllers/profiles.controller');

router.get('/:id', getProfileById);
// router.get('/', getProfile);
router.post('/', createProfile);

module.exports = router;