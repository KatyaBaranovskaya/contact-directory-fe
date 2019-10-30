import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from "./footer/Footer";
import Header from "./header/Header";

function App() {
  return (
    <div className="app">
      <Header className="app__header"/>
      <div className="app__content"/>
      <Footer className="app__footer"/>
    </div>
  );
}

export default App;
