import React, { Component } from 'react';
import Articleblock from '../Articleblock/Articleblock';
import Commentblock from '../Commentblock/Commentblock';
import './Postarticle.css';
import postArticle from '../../api';

class Postarticle extends Component {
  state = {
    user: false,
    topic: '',
    title: '',
    body: '',
    loading: true
  };
  render() {
    const { topic, user } = this.props;
    return (
      <form onSubmit={this.post} className="postarticle">
        <label for="title" className="postarticle-title-label">
          Title:
        </label>
        <input
          id="title"
          placeholder="title"
          className="postarticle-title-input"
        />
        <label for="body" className="postarticle-body-label flex-center">
          Title:
        </label>
        <input
          id="body"
          placeholder="body"
          className="postarticle-body-input flex-center"
        />
        <button type="submit">Post</button>
      </form>
    );
  }

  componentDidMount = async () => {
    const { topic, user } = this.props;
    this.setState({
      user,
      topic,
      loading: false
    });
  };

  post = async event => {
    event.preventDefault();
    const { user, topic } = this.state;
    const title = this.event.target.title.value;
    const body = this.event.target.body.value;
    postArticle(user.username, topic, title, body);
  };
}

export default Postarticle;
