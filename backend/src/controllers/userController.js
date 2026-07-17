import userModel from "../modules/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createtoken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// route for user login
const loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.send({ success: false, message: "user doesn't exists" });
    }
    const ismatch = await bcrypt.compare(password, user.password);
    if (ismatch) {
      const token = createtoken(user._id);
      return res.send({ success: true, token });
    } else {
      return res.send({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: error.message });
  }
};

// route for user register

const registeruser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exist = await userModel.findOne({ email });

    // check user already exists or not
    if (exist) {
      return res.send({ success: false, message: "user already exists" });
    }

    // validating email format && strong password

    if (!validator.isEmail(email)) {
      return res.send({
        success: false,
        message: "please enter a valid email",
      });
    }
    if (password.length < 8) {
      return res.send({
        success: false,
        message: "please enter a strong password",
      });
    }

    // hasing user password

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    const newuser = new userModel({
      name,
      email,
      password: hashedpassword,
    });

    const user = await newuser.save();

    const token = createtoken(user._id);

    res.send({ success: true, token });
  } catch (error) {
    console.log(error);
    res.send({ success: false, message: error.message });
  }
};

// route for admin login

const adminlogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.send({success : true,token})
    }
  } catch (error) {
    res.send({success: false,message:"invalid credentials"})
  }
};

export { loginuser, registeruser, adminlogin };
