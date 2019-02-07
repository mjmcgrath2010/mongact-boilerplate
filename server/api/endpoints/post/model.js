const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new mongoose.Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  content: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  categories: {
    type: Array,
  },
});

module.exports = mongoose.model('post', PostSchema);
