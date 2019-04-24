import axios from 'axios';

const BASE_URL = 'https://bc-nc-news.herokuapp.com/api/';

export const getTopics = async () => {
  const { topics } = await axios.get(`${BASE_URL}topics`);
  console.log(topics);
  return topics;
};

export const getArticles = async () => {
  const { articles } = await axios.get(`${BASE_URL}articles`);
  console.log(articles);
  return articles;
};
