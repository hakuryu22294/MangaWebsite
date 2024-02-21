export function validateUsername(username) {
  return username.trim() !== "" && username.length >= 3;
}

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return email.trim() !== "" && emailRegex.test(email);
}

export function validatePassword(password) {
  const passwordRegex = /^[a-zA-Z0-9]+$/;
  return password.trim() !== "" && passwordRegex.test(password);
}

export function validateConfirmPassword(password, confirmPassword) {
  return password === confirmPassword;
}
