const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre('save', function preSave(next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) {
    return next();
  }

  // generate a salt
  return bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) {
      return next(err);
    }

    // hash the password using our new salt
    return bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) {
        return next(error);
      }

      // override the cleartext password with the hashed one
      user.password = hash;
      return next();
    });
  });
});

UserSchema.methods = {
  // Methods
  user: this,

  validPassword(password) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
      if (err) {
        return false;
      }

      return isMatch;
    });
  },
};

module.exports = mongoose.model('user', UserSchema);
