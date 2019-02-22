const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategorySchema = new mongoose.Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  name: {
    type: Schema.Types.String,
  },
  description: {
    type: Schema.Types.String,
  },
});

module.exports = mongoose.model('category', CategorySchema);
