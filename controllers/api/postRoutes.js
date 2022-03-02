const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth')

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

// CREATE new post
router.post('/', withAuth, async (req, res) => {
  try {
    const commentData = await Post.create({
      post_content: req.body.post_content,
      post_date: today,
      user_id: req.session.user_id,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(commentData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;