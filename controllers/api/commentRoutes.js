const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth')

// CREATE new comment
router.post('/', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment: req.body.comment,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    });

    res.status(200).json(commentData);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;