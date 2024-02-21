import axios from "axios";

const AUTH_REQUEST = "http://localhost:8080/api/auth";

export const register = async (newUser) => {
  try {
    const { data } = await axios.post(`${AUTH_REQUEST}/register`, newUser, {
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        ...newUser,
      },
    });
    return data;
  } catch (err) {
    return { error: err.response.data.message || err.message };
  }
};

export const login = async (user) => {
  try {
    const { data } = await axios.post(`${AUTH_REQUEST}/login`, user, {
      header: {
        "Content-Type": "application/json",
      },
      data: {
        ...user,
      },
    });
    return data;
  } catch (err) {
    return { error: err.response.data.message || err.message };
  }
};
