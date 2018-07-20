const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true},
});

//Hashing password
userSchema.pre('save', function(next)) {
  if(this.isModified('password')) {
    const hashedPass = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
    this.password = hashedPass;
  }
  next();
}

//Method to authenticate password
userSchema.methods.auth = function (password) {
  //compare password to the bcrypt password
  return bcrypt.compareSync(password, this.password); //t or f
}

module.exports = mongoose.model('User', userSchema);
