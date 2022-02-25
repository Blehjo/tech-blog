const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Returns all users with their most recent posts
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Post,
          attributes: [ 'post_content', 'post_date' ],
          order: [['post_date', 'DESC']],
        },
      ]
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

router.get('/post', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: [
            'username',
          ], 
        },
        {
          model: Comment,
          attributes: [ 'comment', 'post_date' ],
        },
      ]
    });
  
    const posts = postData.map((project) => project.get({ plain: true }));
  
  res.render('post', {
    posts,
    logged_in: req.session.logged_in,
  });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: [
            'id',
            'username',
          ], 
        },
        {
          model: Comment,
          attributes: [ 'comment', 'post_date' ],
        },
      ]
    });
  
    const post = postData.get({ plain: true });
  
  res.render('individualpost', {
    post,
    logged_in: req.session.logged_in,
  });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/user/:id', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, { 
      include: [
        {
          model: Post,
          attributes: [
            'id',
            'post_content',
            'post_date',
          ], 
        },
        {
          model: Comment,
          attributes: [ 
            'comment', 
            'post_date' 
          ],
        },
      ]
    });   

    const user = userData.get({ plain: true });
    res.render('user', { 
      user,
      logged_in: req.session.logged_in, 
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
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
  