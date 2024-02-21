export const setUserInfo = (user) => {
  localStorage.setItem("userInfo", JSON.stringify(user));
};

export const clearUser = () => {
  localStorage.removeItem("userInfo");
};

export const getUserInfo = () => {
  return localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : { email: "", password: "" };
};
