import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import * as api from './api';

class App extends Component {
  state = {
    data: [],
    loading: true
  };
  render() {
    const { data } = this.state;
    return (
      <main className="App">
        <Home />
        <Header />
        <Login />
        <Nav />
        <Content />
        <Footer />
      </main>
    );
  }

  componentDidMount = async () => {
    const data = [];
    this.setState({
      data,
      loading: false
    });
  };
}

export default App;
