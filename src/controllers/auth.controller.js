import User from "../models/User.js";
import bcrypt from "bcrypt";
import { signInValid, signUpValid } from "../validations/UserValid.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

const { SECRET_CODE } = process.env;

export const register = async (req, res) => {
  try {
    const { error } = signUpValid.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((error) => error.message);
      return res.status(400).json({
        message: errors.join(", "),
      });
    }
    const { username, email, password, role } = req.body;
    const checkEmail = await User.findOne({ email: email });
    if (checkEmail)
      return res.status(400).json({
        message: "Email đã tồn tại",
      });
    const hashPass = await bcrypt.hash(password, 10);
    if (!hashPass)
      return res.status(400).json({
        message: "Mã hóa mất khẩu thất bại",
      });
    const newUser = await User.create({
      username,
      email,
      password: hashPass,
      role,
    });
    newUser.password = undefined;
    return res.status(200).json({
      message: "Create Successfully",
      newUser,
    });
  } catch (err) {
    return res.status(500).json({
      name: err.name || "Internal Server Error",
      message: err.message || "Server error",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { error } = signInValid.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((error) => error.message);
      return res.status(400).json({
        message: errors.join(", "),
      });
    }
    const { email, password } = req.body;
    const checkUser = await User.findOne({ email: email });
    if (!checkUser) {
      return res.status(400).json({
        message: "Email chưa được đăng ký",
      });
    }
    const checkPassword = await bcrypt.compare(password, checkUser.password);
    if (!checkPassword)
      return res.status(400).json({
        message: "Sai mật khẩu",
      });
    const accessToken = jwt.sign({ id: checkUser._id }, SECRET_CODE, {
      expiresIn: "1d",
    });
    if (!accessToken)
      return res.status(400).json({
        message: "Tạo token thất bại",
      });
    checkUser.password = undefined;
    return res.status(200).json({
      message: "Login Successfully",
      accessToken,
      user: checkUser,
    });
  } catch (err) {
    return res.status(500).json({
      name: err.name || "Internal Server Error",
      message: err.message || "Server error",
    });
  }
};
