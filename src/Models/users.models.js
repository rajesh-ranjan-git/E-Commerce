import mongoose, { model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const { Schema, model } = mongoose;

const Address = new Schema({
  houseNumber: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
});

const userSchema = new Schema({
  userName: { type: String, min: [2, "userName is too short.."] },
  email: { type: String, unique: true, required: true },
  password: {
    type: String,
    required: true,
    min: [6, "password is too short..."],
  },
  phoneNumber: {
    type: Number,
    min: [10, "phoneNumber is too short..."],
    max: [12, "phoneNumber is too long..."],
  },
  address: { type: [Address], default: [] },
});

userSchema.pre("save", async (next) => {
  let user = this;
  if (!user.isModified("password")) {
    return next();
  }

  try {
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(user.password, salt);

    user.password = hashedPassword;
    next();
  } catch (err) {
    console.log(err);
  }
});

userSchema.methods.comparePassword = async (password) => {
  return await bcrypt.comparePassword(password, this.password);
};

userSchema.methods.generateToken = () => {
  let token = jwt.sign(
    { id: this._id, email: this.email },
    process.env.PRIVATE_KEY
  );
  return token;
};

const Users = model("Users", userSchema);

export default Users;
