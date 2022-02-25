// const router = require('express').Router();
// const { User, Post } = require('../../models');

// router.get('/users/:id', async (req, res) => {
//   try {
//     const userData = await User.findbyPk(req.params.id, { 
//       include: [
//         {
//           model: Post,
//           attributes: [
//             'id',
//             'post_content',
//             'post_date',
//             'user_id',
//           ],
//         },
//       ],
//     });    

//     const user = userData.get({ plain: true });
//     res.render('user', { user });
//   } catch (err) {
//     console.log(err);
//     res.status(400).json(err);
//   }
// });

// // router.post('/logout', (req, res) => {
// //   if (req.session.logged_in) {
// //     req.session.destroy(() => {
// //       res.status(204).end();
// //     });
// //   } else {
// //     res.status(404).end();
// //   }
// // });

// module.exports = router;
