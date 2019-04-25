import React, { Component } from 'react';
import './Subcontent.css';
import Subitem from './Subitem/Subitem';
import * as api from '../../../api'

// select article-specific comments
class Subcontent extends Component {
  state = {
    comments: [],
    loading: true
  };
  render() {
    const { comments } = this.state
    const subElements = comments.map(subItem => {
      return (
        <Subitem
          id={subItem.comment_id}
          heading={`${subItem.author} - ${subItem.created_at.slice(0,10).split('-').reverse().join('/')}`}
          body={subItem.body}
          votes={subItem.votes}
        />
      );
    });
    return (
      <main className="subcontent">
        <h3 className="subcont-head flex-center">Comments</h3>
        <div className="subcont-list">{subElements}</div>
      </main>
    );
  }

  componentDidUpdate = async prevProps => {
    if (prevProps.article_id !== this.props.article_id) {
      const comments = await api.getCommentsByArticleID(this.props.article_id);
      await this.setState({
        comments,
        loading: false
      });
    }
  };
}

export default Subcontent;
