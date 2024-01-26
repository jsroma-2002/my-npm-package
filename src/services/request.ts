import axios from "axios";

export async function getPosts() {
  const post = await axios.get("https://jsonplaceholder.typicode.com/posts");

  return post;
}

export async function getPost() {
  const post = await axios.get("https://jsonplaceholder.typicode.com/posts/1");

  return post;
}
