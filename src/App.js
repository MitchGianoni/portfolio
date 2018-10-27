import React, { Component } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Portfolio from './components/portfolio';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <main className="main">
          <Portfolio />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
