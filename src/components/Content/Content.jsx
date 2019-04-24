import React, { Component } from 'react';
import './Content.css';
import { Router } from '@reach/router';
import Subcontent from './Subcontent/Subcontent';

class Content extends Component {
  state = {
    display: 'topics',
    loading: true
  };
  render() {
    const { topics, articles, comments, path } = this.props;
    console.log(this.props);
    let contTitle, contBody, subcont;
    if (path.includes('articles/?topic=')) {
      const topicSlug = path.replace('articles/?topic=', '');
      const topic = topics.filter(t => t.slug === topicSlug)[0];
      contTitle = `Topic - ${capitalise(topic.slug)}`;
      contBody = topic.description;
    } else if (/^articles\/\d+$/.test(path)) {
      const articleID = Number(path.replace('articles/', ''));
      const article = articles.filter(a => a.article_id === articleID)[0];
      console.log(article);
      contTitle = `Article - ${capitalise(article.title)}`;
      contBody = article.body;
    } else {
      contTitle = 'Content Header';
      contBody = 'Content Body';
    }
    return (
      <main className="content">
        <h2 className="cont-head flex-center">{contTitle}</h2>
        <div className="cont-vote flex-center">Content Vote</div>
        <div className="cont-body">{contBody}</div>
        <div className="cont-add flex-center">Content Add</div>
        <Subcontent />
      </main>
    );
  }
}

function capitalise(str) {
  return `${str.slice(0, 1).toUpperCase()}${str.slice(1).toLowerCase()}`;
}

export default Content;
