import axios from 'axios';

const BASE_URL = 'https://bc-nc-news.herokuapp.com/api/';

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}topics`);
  const { topics } = data;
  return topics;
};

export const getArticles = async () => {
  const { data } = await axios.get(`${BASE_URL}articles`);
  const { articles } = data;
  return articles;
};

export const getArticlesByTopic = async topic => {
  const { data } = await axios.get(`${BASE_URL}articles?topic=${topic}`);
  const { articles } = data;
  return articles;
};

export const getArticleByID = async article_id => {
  const { data } = await axios.get(`${BASE_URL}articles/${article_id}`);
  const { article } = data;
  return article;
};

export const getCommentsByArticleID = async article_id => {
  const { data } = await axios.get(
    `${BASE_URL}articles/${article_id}/comments`
  );
  const { comments } = data;
  return comments;
};

export const getUserByUsername = async username => {
  const { data } = await axios.get(`${BASE_URL}users/${username}`);
  if (data.user) {
    const { user } = data;
    return user;
  } else {
    return false;
  }
};
