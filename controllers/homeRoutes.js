const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    const userData = await Post.findAll({
      attributes: { exclude: ['user_id'] },
      order: [['post_date', 'DESC']],
    });
    
    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts', async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: { exclude: ['user_id'] },
      order: [['post_date', 'DESC']],
    });
  
    const posts = postData.map((project) => project.get({ plain: true }));
  
  res.render('homepage', {
    posts,
    logged_in: req.session.logged_in,
  });
  } catch (err) {
    res.status(500).json(err);
  }
});



  
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
  