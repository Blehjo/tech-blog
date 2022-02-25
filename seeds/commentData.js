const { Comment } = require('../models');

const commentData = [
  {
    comment:
    'Branches with pink apricot blossoms against a blue background.',
    post_date: 'June 11, 2021',
    post_id: 1,
    user_id: 1,
  },
  {
    comment: 'Pink cosmos flowers against a blue sky.',
    post_date: 'May 05, 2021',
    post_id: 2,
    user_id: 1,
  },
  {
    comment: 'Sandy beach with the blue sea and sky in the background.',
    post_date: 'March 31, 2021',
    post_id: 3,
    user_id: 2,
  },
  {
    comment: 'Two beach chairs under a beach umbrella on the beach.',
    post_date: 'July 04, 2021',
    post_id: 4,
    user_id: 2,
  },
  {
    comment: 'Sun setting in the horizon with waves lapping the shore',
    post_date: 'August 16,2021',
    post_id: 5,
    user_id: 3,
  },
  {
    comment:
    'Trees with red, orange, yellow leaves reflected on a still lake.',
    post_date: 'October 24, 2018',
    post_id: 5,
    user_id: 3,
  },
  {
    comment:
    'Mountains with red and yellow leaves against a background of hazy rolling hills.',
    post_date: 'November 07, 2016',
    post_id: 6,
    user_id: 4,
  },
  {
    comment:
    'Trees with white frozen branches reflected on a frozen river against a light pink sky.',
    post_date: 'December 24, 2020',
    post_id: 7,
    user_id: 4,
  },
  {
    comment:
    'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
    post_date: 'January 20, 2018',
    post_id: 8,
    user_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
