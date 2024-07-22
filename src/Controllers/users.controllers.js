import Users from "../Models/users.models.js";

const Signup = async (req, res) => {
  let { userName, email, password } = req.body;
  let existingUser = await Users.findOne({ email: email });

  if (existingUser) {
    return res
      .status(403)
      .send({ result: false, message: "User already exists..." });
  }

  const newUser = new Users(req.body);
  const data = await newUser.save();

  res.status(200).send({ result: true, message: "Signup successful..." });
};

const Login = (req, res) => {};
const updateUser = (req, res) => {};
const getUser = (req, res) => {};
const Logout = (req, res) => {};

export { Signup, Login, updateUser, getUser, Logout };

// Signup
// Login
// updateUser
// getUser
// Logout
