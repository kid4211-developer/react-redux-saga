import axios from "axios";

const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

export const getPosts = async () => {
  await sleep(1500);
  const response = await axios.get("/posts");
  return response.data;
};

export const getPostById = async (id) => {
  await sleep(1500);
  const response = await axios.get(`/posts/${id}`);
  return response.data;
};
