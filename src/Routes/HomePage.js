import React, { Component } from 'react';
import CustomButton from '../Components/Common/CustomButton';
import { Redirect } from 'react-router-dom';
import './style.scss';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }

  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }
  componentWillMount() {
    var ls = require('local-storage');
    if (!ls.get('token')) {
      this.setState({

        redirect: true
      })
    }

  }
  handleClick = () => {
    var ls = require('local-storage');
    ls.clear();
    this.setState({
      redirect: true
    })
  }
  render() {
    console.log(this.props.user, 'ssssssss');
    const email = this.props.user ? this.props.user.email : "";
    return (
      <div className={'home-page-container'}>
        <Header />
        <div className={'home-page-content'}>
          {this.renderRedirect()}
          <div className={'home-page-nav'}>

            <div className={'title-ac-details'}>
              <h3> Kishore Pant </h3>
              <Col className={'m-2 nav-container'} >Account Details</Col>
              <Col className={'m-2 nav-container'} >Setting</Col>
              <Col className={'m-2 nav-container'}>My Calender</Col>
              <Col className={'m-2 nav-container'}>My Notification</Col>
              <Col className={'m-2 nav-container'}>My Prefrences</Col>
              <Col onClick={this.handleClick} className={'m-2 nav-container'}>Logout</Col>

            </div>
          </div>
          <div className={'account-details'}>
            <div className={'title-ac-details'}>
              <h3> Acount Details</h3>

            </div>
            <div className={'ac-details-col'}>
              <Col className={'d-flex m-3'}><h5>Username</h5></Col>
              <Col className={' d-flex m-3'}><h5>Email-</h5>{email}</Col>
              <Col className={' d-flex m-3'}><h5>Phone</h5></Col>

            </div>
          </div>
        </div>

        <Footer />

      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {

    user: state.AuthReducer.user,


  }
}

export default (connect(mapStateToProps)(HomePage));