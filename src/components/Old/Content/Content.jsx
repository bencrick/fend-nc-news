import React, { Component } from 'react';
import './Content.css';
import Subcontent from './Subcontent/Subcontent';
import * as api from '../../../api';
import Vote from '../../Vote/Vote';

class Content extends Component {
  state = {
    article: {
      title: '',
      author: '',
      article_id: '',
      body: '',
      topic: '',
      created_at: '',
      votes: '',
      comment_count: ''
    },
    loading: true
  };
  render() {
    const { article } = this.state;
    return (
      <main className="content">
        <h3 className="cont-head flex-center">{article.title}</h3>
        <div className="cont-vote flex-center">
          <Vote start={article.votes} />
        </div>
        <div className="cont-body text-block">{article.body}</div>
        {/* <div className="cont-add flex-center">Content Add</div> */}
        <Subcontent article_id={article.article_id} />
      </main>
    );
  }

  componentDidMount = async () => {
    const article = await api.getArticleByID(this.props.article_id);
    await this.setState({
      article,
      loading: false
    });
  };

  componentDidUpdate = async prevProps => {
    if (prevProps.article_id !== this.props.article_id) {
      const article = await api.getArticleByID(this.props.article_id);
      await this.setState({
        article,
        loading: false
      });
    }
  };
}

export default Content;
