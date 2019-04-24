import React, { Component } from 'react';
import './Nav.css';
import { Link } from '@reach/router';

class Nav extends Component {
  state = {
    display: 'topics',
    loading: true
  };
  render() {
    const { display } = this.state;
    const { setContent } = this.props;
    let topics, articles, itemList, headerProp, navList, pathStart, pathEndProp;
    if (!!this.props.topics && !!this.props.articles) {
      topics = this.props.topics;
      articles = this.props.articles;
    } else {
      topics = [];
      articles = [];
    }
    if (display === 'topics') {
      itemList = topics;
      headerProp = 'slug';
      pathEndProp = 'slug';
      pathStart = '/articles/?topic=';
    } else if (display === 'articles') {
      itemList = articles;
      headerProp = 'title';
      pathEndProp = 'article_id';
      pathStart = '/articles/';
    }
    navList = itemList.map(item => {
      return (
        <tr>
          <td>
            <Link to={`${pathStart}${item[pathEndProp]}`} onClick={setContent}>
              {`${item[headerProp].slice(0, 1).toUpperCase()}${item[headerProp]
                .slice(1)
                .toLowerCase()}`}
            </Link>
          </td>
        </tr>
      );
    });
    return (
      <main className="nav">
        <table align="center" className="nav-menu flex-center">
          <thead>
            <tr>
              <th>MENU</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to="/topics" onClick={this.displayChange}>
                  Topics
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/articles" onClick={this.displayChange}>
                  Articles
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        <table align="center" className="nav-table flex-top-center">
          <thead>
            <tr>
              <th colSpan="2">{display.toUpperCase()}</th>
            </tr>
          </thead>
          <tbody className="nav-list">{navList}</tbody>
        </table>
      </main>
    );
  }

  componentDidMount = () => {
    this.setState({
      loading: false
    });
  };

  displayChange = event => {
    this.setState({
      display: event.target.innerText.toLowerCase()
    });
  };
}

export default Nav;
