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

router.get('/posts', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: Comment,
          attributes: [ 'comment', 'post_date' ],
          order: [['post_date', 'DESC']],
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


router.get('/posts/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: [ 
            'comment', 
            'post_date' 
          ],
          order: [['post_date', 'DESC']],
        },
      ]
    });
  
    const post = postData.map((project) => project.get({ plain: true }));
  
  res.render('post', {
    post,
  });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/user/:id', async (req, res) => {
  try {
    const userData = await User.findbyPk(req.params.id, { 
      include: [
        {
          model: Post,
          attributes: [
            'id',
            'post_content',
            'post_date',
          ],
        },
      ],
    });    

    const user = userData.get({ plain: true });
    res.render('user', { user });
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
  