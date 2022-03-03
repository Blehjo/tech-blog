const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth')

router.put('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.update({
        post_title: req.body.post_title,
        post_content: req.body.post_content,
        user_id: req.session.user_id,
        },
        {
        where: {
            id: req.params.id
        }
        }
        );
        res.status(200).json(postData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

  
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy(
        {
        where: {
            id: req.params.id
        }
        }
        );
        res.status(200).json(postData);
    } catch (err) {
        console.log('err');
        res.status(500).json(err);
    }
});

module.exports = router;