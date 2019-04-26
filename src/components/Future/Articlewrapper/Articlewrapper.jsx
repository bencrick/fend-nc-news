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
        <h3 className="articlewrapper-head">{article.title}</h3>
        <div className="articlewrapper-body">
          {article.body}
        </div>
        <div className="articlewrapper-list">
          <Itemlist items={comments} />
        </div>
      </main>
    );
  }

  componentDidMount = async () => {
    const id = this.props.id;
    const article = await api.getArticleByID(id)
    const comments = await api.getCommentsByArticleID(id);
    this.setState({
      article,
      comments,
      loading: false
    });
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { article } = this.state;
    if (prevState.article !== article) {
      const comments = await api.getCommentsByArticle(article);
      await this.setState({
        comments,
        loading: false
      });
    }
  };
}

export default Articlewrapper;
