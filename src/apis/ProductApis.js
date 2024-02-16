import axios from "axios";

const PRD_REQUEST = "http://localhost:8080/api/products";

export const getAllPrducts = async () =>
  await axios.get(PRD_REQUEST, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getDeatilsProduct = async (id) =>
  await axios.get(`${PRD_REQUEST}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const createPrduct = async (data) =>
  await axios.post(PRD_REQUEST, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const updatePrduct = async (id, data) =>
  await axios.put(`${PRD_REQUEST}/${id}`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const deletePrduct = async (id) =>
  await axios.delete(`${PRD_REQUEST}/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
export const updateView = async (id) =>
  await axios.patch(`${PRD_REQUEST}/view/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
