import { register } from "../apis/AuthApis";
import {
  validateEmail,
  validateConfirmPassword,
  validateUsername,
  validatePassword,
} from "../validations/user.validate";
import { notifiInnerHTML } from "../utils/utils";
import Message from "../utils/showMessage";
const RegisterPage = {
  after_render: async () => {
    try {
      document
        .getElementById("register-form")
        .addEventListener("submit", async (event) => {
          event.preventDefault();
          const username = document.getElementById("username").value;
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;
          const confirmPassword =
            document.getElementById("confirm-password").value;
          const errorTag = document.getElementById("error-message");
          if (!validateEmail(email)) {
            notifiInnerHTML(
              errorTag,
              "Email khồng được để trống và phải đúng định dạng"
            );
            return;
          }
          if (!validateUsername(username)) {
            notifiInnerHTML(
              errorTag,
              "Username không được bỏ trống và tối thiểu 3 ký tự"
            );
            return;
          }
          if (!validatePassword(password)) {
            notifiInnerHTML(
              errorTag,
              "Password không được bỏ trống và không có các ký tự đặc biệt"
            );
            return;
          }
          if (!validateConfirmPassword(password, confirmPassword)) {
            notifiInnerHTML(
              errorTag,
              "confirm password không trùng với password"
            );
            return;
          }
          const data = await register({
            username: username,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
          });
          if (data.error) {
            Message(data.error, "danger");
          } else {
            Message("Register Successfully", "success");
            document.getElementById("register-form").reset();
            window.location.href = "/login";
          }
        });
    } catch (err) {
      console.log(err);
    }
  },
  render: () => {
    return `
    <div class="section-page d-flex justify-content-center align-items-center">
        <div id="register-page" class="container p-3">
        <div class="form-title text-center">
            <h2>Welcome to MangaEX</h2>
        </div>
            <form id="register-form">
                <div class="mb-3">
                <label for="" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="">
                <div id="emailHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                <label for="e" class="form-label">Username</label>
                <input type="text" class="form-control" id="username" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="password">
                </div>
                <div class="mb-3">
                <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="confirm-password">
                </div>
                <p id="error-message" class="text-danger"></p>
                <button type="submit" class="btn btn-success">Submit</button>
            </form>
        </div>
    </div>
    `;
  },
};

export default RegisterPage;
