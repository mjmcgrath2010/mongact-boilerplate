const router = require('express').Router();
const userRoutes = require('./user/routes');
const authRoutes = require('./auth/routes');
const postRoutes = require('./post/routes');
const categoryRoutes = require('./category/routes');

router.use('/post', postRoutes);
router.use('/user', userRoutes);
router.use('/auth', authRoutes);
router.use('/category', categoryRoutes);

module.exports = router;
