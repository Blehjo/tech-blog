const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth')



// CREATE new post
router.post('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      post_title: req.body.post_title,
      post_content: req.body.post_content,
      user_id: req.session.user_id,
    });
    res.status(200).json(postData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;