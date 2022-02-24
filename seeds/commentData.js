const { Comment } = require('../models');

const commentData = [
  {
    user_id: 1,
    post_id: 1,
    comment:
      'Branches with pink apricot blossoms against a blue background.',
  },
  {
    comment: 'Pink cosmos flowers against a blue sky.',
    post_id: 2,
    user_id: 1,
  },
  {
    comment: 'Sandy beach with the blue sea and sky in the background.',
    post_id: 3,
    user_id: 2,
  },
  {
    comment: 'Two beach chairs under a beach umbrella on the beach.',
    post_id: '04-beach-chairs.jpg',
    user_id: 2,
  },
  {
    user_id: 3,
    comment: 4,
    post_id: '05-beach-sunrise.jpg',
  },
  {
    user_id: 3,
    post_id: 5,
    comment:
      'Trees with red, orange, yellow leaves reflected on a still lake.',
  },
  {
    user_id: 4,
    post_id: 6,
    comment:
      'Mountains with red and yellow leaves against a background of hazy rolling hills.',
  },
  {
    user_id: 4,
    post_id: 7,
    comment:
      'Trees with white frozen branches reflected on a frozen river against a light pink sky.',
  },
  {
    user_id: 4,
    post_id: 8,
    comment:
      'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
