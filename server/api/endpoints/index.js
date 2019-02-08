const router = require('express').Router();
const userRoutes = require('./user/routes');
const authRoutes = require('./auth/routes');
const postRoutes = require('./post/routes');

router.use('/post', postRoutes);
router.use('/user', userRoutes);
router.use('/auth', authRoutes);

module.exports = router;
