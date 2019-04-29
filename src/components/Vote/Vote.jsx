import React, { Component } from 'react';
import './Vote.css';
import { voteArticle, voteComment } from '../../api';

class Vote extends Component {
  state = {
    modifier: 0,
    total: 0,
    loading: true
  };
  render() {
    return (
      <main className="vote">
        <img
          onClick={() => this.alterVote(1)}
          src="https://img.icons8.com/windows/32/000000/up.png"
          alt="up arrow"
          className={`${
            this.state.modifier === 1 ? 'glow-green' : ''
          } up-arrow`}
        />
        <img
          onClick={() => this.alterVote(-1)}
          src="https://img.icons8.com/windows/32/000000/down.png"
          alt="down arrow"
          className={`${
            this.state.modifier === -1 ? 'glow-red' : ''
          } down-arrow`}
        />
        <span class="total-votes flex-center">{this.state.total}</span>
      </main>
    );
  }

  componentDidMount = async () => {
    await this.setState({
      total: Number(this.props.start),
      loading: false
    });
  };

  alterVote = n => {
    if (this.props.user) {
      const prevModifier = this.state.modifier;
      const prevTotal = this.state.total;
      let modifier, total;
      if (prevModifier === 0) {
        modifier = n;
        total = prevTotal + n;
      } else {
        modifier = 0;
        total = prevTotal - prevModifier;
      }
      this.setState({
        modifier,
        total
      });
      if (this.props.article_id) {
        voteArticle(this.props.article_id, n);
      } else if (this.props.comment_id) {
        voteComment(this.props.comment_id, n)
      }
    } else {
      alert('Please log in to enable voting');
    }
  };
}

export default Vote;
