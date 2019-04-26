import React, { Component } from 'react';
import './Articlewrapper.css';
import * as api from '../../api';
import Itemlist from '../Itemlist/Itemlist';

// select article-specific comments
class Articlewrapper extends Component {
  state = {
    article: {},
    comments: [],
    loading: true
  };
  render() {
    const { article, comments } = this.state;
    return (
      <main className="articlewrapper">
        <h3 className="articlewrapper-head flex-center">{article.title}</h3>
        <div className="articlewrapper-body text-block">{article.body}</div>
        <div className="articlewrapper-list">
          <Itemlist items={comments} user={this.props.user} />
        </div>
      </main>
    );
  }

  componentDidMount = async () => {
    const article = await api.getArticleByID(this.props.article_id);
    const comments = await api.getCommentsByArticleID(this.props.article_id);
    this.setState({
      article,
      comments,
      loading: false
    });
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.article_id !== this.props.article_id) {
      const article = await api.getArticleByID(this.props.article_id);
      const comments = await api.getCommentsByArticleID(this.props.article_id);
      await this.setState({
        article,
        comments,
        loading: false
      });
    }
  };
}

export default Articlewrapper;
