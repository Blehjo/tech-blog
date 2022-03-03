const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const postRoutes = require('./postRoutes')
const updateRoutes = require('./updateRoutes')

router.use('/posts', updateRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);
router.use('/dashboard', postRoutes)

module.exports = router;
