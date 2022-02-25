const { Post } = require('../models');

const postdata = [
  {
    post_content:
        'Branches with pink apricot blossoms against a blue background.',
    post_date: "June 10, 2021",
    user_id: 1,
  },
  {
    post_content: 
        'Pink cosmos flowers against a blue sky.',
    post_date: 'May 05, 2021',
    user_id: 1,
  },
  {
    post_content: 
        'Sandy beach with the blue sea and sky in the background.',
    post_date: 'March 30, 2021',
    user_id: 2,
  },
  {
    post_content: 
        'Two beach chairs under a beach umbrella on the beach.',
    post_date: 'July 4, 2021',
    user_id: 2,
  },
  {
    post_content: 
        'Sun setting in the horizon with waves lapping the shore.',
    post_date: 'August 14, 2021',
    user_id: 3,
  },
  {
    post_content:
        'Trees with red, orange, yellow leaves reflected on a still lake.',
    post_date: 'October 15, 2018',
    user_id: 3,
  },
  {
    post_content:
        'Mountains with red and yellow leaves against a background of hazy rolling hills.',
    post_date: 'November 3, 2016',
    user_id: 4,
  },
  {
    post_content:
        'Trees with white frozen branches reflected on a frozen river against a light pink sky.',
    post_date: 'December 24, 2020',
    user_id: 1,
    },
    {
    post_content: 
        'Log cabin blanketed in heavy white snow with tall snow covered pine trees in the background.',
    post_date: 'October 20, 2018',
    user_id: 4,
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
