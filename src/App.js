import React, { Component } from 'react';
import logo from './logo.svg';
import Bio from './components/bio';
import Footer from './components/footer';
import Header from './components/header';
import Projects from './components/projects';
import './App.css';
import './components/styles/float-grid.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="col-12">
          <Header />
        </header>
        <main className="col-12">
          <Bio />
          <Projects />
        </main>
        <footer className="col-12">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
