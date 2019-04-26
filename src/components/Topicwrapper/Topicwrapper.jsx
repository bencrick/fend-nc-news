import React, { Component } from 'react';
import './Topicwrapper.css';
import * as api from '../../api';
import Itemlist from '../Itemlist/Itemlist';
import capitalise from '../../utils/capitalise'

// select topic-specific articles
class Topicwrapper extends Component {
  state = {
    articles: [],
    loading: true
  };
  render() {
    const { articles } = this.state;
    const { topic, topics } = this.props;
    return (
      <main className="topicwrapper">
        <h3 className="topicwrapper-head flex-center">{capitalise(topic)}</h3>
        <div className="topicwrapper-body text-block">
          {topics.length === 0 ? '' : topics.filter(t => t.slug === topic)[0].description}
        </div>
        <div className="topicwrapper-list">
          <Itemlist items={articles} user={this.props.user} />
        </div>
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
