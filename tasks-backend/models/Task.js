const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  mobile_number: {
    type: String,
    required: true,
    trim: true
  },
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
