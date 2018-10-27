import React, { Component } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Portfolio from './components/portfolio';
import Stack from './components/stack';
import './App.css';


class App extends Component {
  render() {
    return (
      <body className="App">
        <header className="header">
          <Header />
        </header>
        <main className="main">
          <Portfolio />
          <Stack />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </body>
    );
  }
}

export default App;
