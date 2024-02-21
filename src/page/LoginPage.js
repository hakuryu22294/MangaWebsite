import { validateEmail, validatePassword } from "../validations/user.validate";
import { setUserInfo } from "../utils/localStorage";
import { notifiInnerHTML } from "../utils/utils";
import { login } from "../apis/AuthApis";
import showMessage from "../utils/showMessage";

const LoginPage = {
  after_render: async () => {
    document
      .getElementById("login-form")
      .addEventListener("submit", async (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const errorTag = document.getElementById("error-message");
        if (!validateEmail(email)) {
          notifiInnerHTML(
            errorTag,
            "Email không được được và phải đúng định dạng"
          );
          return;
        }
        if (!validatePassword(password)) {
          notifiInnerHTML(
            errorTag,
            "Password không được và có các ký tự đặc biệt"
          );
          return;
        }
        const data = await login({
          email: email,
          password: password,
        });
        if (data.error) {
          showMessage(data.error, "danger");
        } else {
          showMessage("Login Successfully", "success");
          setUserInfo(data);
          window.location.href = "/";
        }
      });
  },
  render: () => {
    return `
    <div class="section-page d-flex justify-content-center align-items-center">
        <div id="register-page" class="container p-3">
        <div class="form-title text-center">
            <h2>Welcome to Login</h2>
        </div>
            <form id="login-form">
                <div class="mb-3">
                <label for="" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="">
                <div id="emailHelp" class="form-text"></div>
                </div>
                <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="password">
                </div>
                <p id="error-message" class="text-danger"></p>
                <button type="submit" class="btn btn-success">Submit</button>
            </form>
        </div>
    </div>
    `;
  },
};

export default LoginPage;
