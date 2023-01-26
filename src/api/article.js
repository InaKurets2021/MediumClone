import axios from "@/api/axios";

const getArticle = (slug) => {
  return axios
    .get(`/article/${slug}`)
    .then((response) => response.data.article);
};

const deleteArticle = (slug) => {
  return axios.delete(`/article/${slug}`);
};

const createArticle = (articleInput) => {
  return axios
    .post("/articles", { article: articleInput })
    .then((response) => response.data.article);
};

const updateArticle = (slug, articleInput) => {
  return axios
    .put(`/article/${slug}`, articleInput)
    .then((response) => response.data.article);
};

export default {
  getArticle,
  deleteArticle,
  createArticle,
  updateArticle,
};