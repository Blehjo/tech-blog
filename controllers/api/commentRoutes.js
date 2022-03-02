const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth')

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

// CREATE new comment
router.post('/', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment: req.body.comment,
      post_date: today,
      post_id: req.body.post_id,
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