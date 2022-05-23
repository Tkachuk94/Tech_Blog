const { Post } = require('../models');

const postdata =
[
  {
    "title": "test post 1",
    "body": "test post content 1",
    "userId": 1
  },
  {
    "title": "test post 2",
    "body": "test post content 2",
    "userId": 2
  },  {
    "title": "test post 3",
    "body": "test post content 3",
    "userId": 3
  },  {
    "title": "test post 4",
    "body": "test post content 4",
    "userId": 4
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;