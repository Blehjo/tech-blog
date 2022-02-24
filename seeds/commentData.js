const { Comment } = require('../models');

const commentData = [
  {
    comment:
    'Branches with pink apricot blossoms against a blue background.',
    post_id: 1,
    user_id: 1,
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
    comment: 4,
    post_id: '05-beach-sunrise.jpg',
    user_id: 3,
  },
  {
    comment:
    'Trees with red, orange, yellow leaves reflected on a still lake.',
    post_id: 5,
    user_id: 3,
  },
  {
    comment:
    'Mountains with red and yellow leaves against a background of hazy rolling hills.',
    post_id: 6,
    user_id: 4,
  },
  {
    comment:
    'Trees with white frozen branches reflected on a frozen river against a light pink sky.',
    post_id: 7,
    user_id: 4,
  },
  {
    comment:
    'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
    user_id: 4,
    post_id: 8,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
