import React, { Component } from 'react';
import './Content.css';
import Subcontent from './Subcontent/Subcontent';
import capitalise from '../../utils/capitalise';

class Content extends Component {
  state = {
    display: 'topics',
    loading: true
  };
  render() {
    const { topics, articles, comments, path } = this.props;
    let contTitle, contBody, subItems;
    if (path.includes('articles/?topic=')) {
      const topic = topics.filter(
        t => t.slug === path.replace('articles/?topic=', '')
      )[0];
      contTitle = `Topic - ${capitalise(topic.slug)}`;
      contBody = topic.description;
      subItems = articles.filter(a => a.topic === topic.slug);
    } else if (/^articles\/\d+$/.test(path)) {
      const article = articles.filter(
        a => a.article_id === Number(path.replace('articles/', ''))
      )[0];
      contTitle = `Article - ${capitalise(article.title)}`;
      contBody = article.body;
      // filter to correct comments
      subItems = comments;
    } else {
      contTitle = 'Content Header';
      contBody = 'Content Body';
      subItems = [];
    }
    return (
      <main className="content">
        <h3 className="cont-head flex-center">{contTitle}</h3>
        <div className="cont-vote flex-center">Content Vote</div>
        <div className="cont-body text-block">{contBody}</div>
        <div className="cont-add flex-center">Content Add</div>
        <Subcontent subItems={subItems} path={path} />
      </main>
    );
  }
}

export default Content;
