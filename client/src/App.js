import React, { Component } from 'react';
import './css/App.css';
import Header from './components/layout/Header';
import Page from './components/layout/Page';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Page/>
        <Footer/>
      </div>
    );
  }
}

export default App;
