import Users from "../Models/users.models.js";

let cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "None",
};

const Signup = async (req, res) => {
  const { email } = req.body;

  try {
    const existingUser = await Users.findOne({ email: email });

    if (existingUser) {
      return res
        .status(403)
        .send({ result: false, message: "User already exists..." });
    }

    const newUser = new Users(req.body);
    const userData = await newUser.save();

    const token = await newUser.generateToken();

    res
      .status(200)
      .cookie("Token", token, cookieOptions)
      .send({ result: true, message: "Signup successful..." });
  } catch (err) {
    res.status(500).send({ result: false, message: err.message });
  }
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = new Users.findOne({ email: email });

    if (!existingUser) {
      return res
        .status(402)
        .send({ result: false, message: "User does not exist..." });
    }

    const passwordCheckResult = await existingUser.comparePassword(password);

    if (passwordCheckResult === true) {
      const token = await existingUser.generateToken();
      return res
        .status(201)
        .cookie("Token", token, cookieOptions)
        .send({ result: true, message: "Login successful..." });
    } else {
      return res
        .status(402)
        .send({ result: false, message: "Password is incorrect..." });
    }
  } catch (err) {
    res.status(500).send({ result: false, message: err.message });
  }
};

const updateUser = (req, res) => {};

const getUser = (req, res) => {};

const Logout = (req, res) => {};

export { Signup, Login, updateUser, getUser, Logout };

// Signup
// Login
// updateUser
// getUser
// Logout
