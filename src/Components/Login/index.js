import React, { Component } from 'react';
import CustomInput from '../Common/CustomInput';
import CustomButton from '../Common/CustomButton';
import { login } from '../../ApiManager/index';
import { Redirect } from 'react-router-dom';
import './style.scss';
import { connect } from 'react-redux';
import { updateUser } from '../../Redux/Action/AuthActions';
import { dispatchAction } from '../../Redux/Store/index';
import { Alert } from 'reactstrap';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false,
      showAlert: false
    }
  }
  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit = (e) => {
    var ls = require('local-storage');
    e.preventDefault();
    let userData = { email: this.state.email, password: this.state.password }
    if (this.state.username !== "" && this.state.password !== "") {
      login('login', userData).then((result) => {
        let responseJSON = result;
        alert('Success');
        console.log(responseJSON, 'ooooooooooo')
        ls.set('token', responseJSON.token);
        this.setState({ redirect: true })
        dispatchAction(updateUser(responseJSON));
      });
    }
    else {
      this.setState({ showAlert: true })
    }
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }
  }
  onDismiss = () => {
    this.setState({
      showAlert: false
    })
  }
  render() {
    console.log(this.props.user);
    return (
      <div className={'login-container'}>

        {this.renderRedirect()}
        <div className={'login-content'}>
          {
            this.state.showAlert &&
            <Alert color="danger" toggle={this.onDismiss} fade={false}>
              Error! Please fill proper details
          </Alert>
          }
          <div className={'login-text'}> Login at webscout</div>
          <div className={'login-form p-2'}>
            <form onSubmit={this.handleSubmit}>
              <h5>Email</h5>
              <div className={'m-1 p-1'}>
                <CustomInput handleChange={this.handleChange} type={"text"} name={"email"} placeholder={"Email"} />
              </div>
              <h5> Password</h5>
              <div className={'m-1 p-1'}>
                <CustomInput type={"password"} handleChange={this.handleChange} name={"password"} placeholder={"Password"} />
              </div>
              <div className={'login-btn-container'}>
                <span className={'link-text'}> Forget Password?</span>
                <CustomButton title={'LOGIN'} type={"submit"} />
              </div>
              <div className={'register-link-container'}>
                <span className={'link-text'}>  Not at webscout?Register</span>
              </div>
            </form>
          </div>

        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {

    user: state.AuthReducer.user,


  }
}

export default (connect(mapStateToProps)(Login));