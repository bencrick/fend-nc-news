import React, { Component } from 'react';
import './Topicwrapper.css';
import * as api from '../../api';
import Itemlist from '../Itemlist/Itemlist';
import capitalise from '../../utils/capitalise';
import { Router } from '@reach/router';
import Postarticle from '../Postarticle/Postarticle';

// select topic-specific articles
class Topicwrapper extends Component {
  state = {
    articles: [],
    loading: true,
    posting: false
  };
  render() {
    const { articles } = this.state;
    const { topic, topics, user } = this.props;
    return (
      <main className="topicwrapper">
        <h3 className="topicwrapper-head flex-center">{capitalise(topic)}</h3>
        <div className="topicwrapper-body text-block">
          {topics.length === 0
            ? ''
            : topics.filter(t => t.slug === topic)[0].description}
        </div>
        {/* <div className="topicwrapper-list">
          <Itemlist items={articles} user={user} />
        </div> */}
        <Router className="topicwrapper-list">
          <Itemlist path="/" items={articles} user={user} topic={topic} />
          <Postarticle path="post" user={user} topic={topic} />
        </Router>
      </main>
    );
  }

  componentDidMount = async () => {
    const articles = await api.getArticlesByTopic(this.props.topic);
    this.setState({
      articles,
      loading: false
    });
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (prevProps.topic !== this.props.topic) {
      const articles = await api.getArticlesByTopic(this.props.topic);
      await this.setState({
        articles,
        loading: false
      });
    }
  };
}

export default Topicwrapper;
