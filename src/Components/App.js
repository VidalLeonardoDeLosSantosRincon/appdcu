//dependencies
import React, { Component } from 'react';
import propTypes from 'prop-types';

import './global/css/App.css';

import Header from './global/Header';
import Content from './global/Content';
import Footer from './global/Footer';

class App extends Component {

  static propTypes = {

    children : propTypes.object.isRequired

  }

  render() {
    const children = this.props.children;
    return (
      <div className="App">
       <Header/>
       <Content body={children}/>
       <Footer/>
      </div>
    );
  }
}

export default App;
