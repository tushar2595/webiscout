import React, { Component } from 'react';
import Login from '../Components/Login/index';
import Header from '../Components/Header/index';

import './style.scss';
import Footer from '../Components/Footer';

class Landing extends Component {
  render() {
    return (
      <div className={'landing-container'}>
        <Header />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default Landing;