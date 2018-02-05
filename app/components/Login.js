import React from 'react';
import {Link} from 'react-router';
import { sideBarList } from '../utils/Constants';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import rp from 'request-promise';
import Authentication from './Authentication';

class Login extends Authentication {
  constructor(props) {
    super(props);
    this.state = {submitType: "Login"};
    this.enableRegister = this.enableRegister.bind(this);
    this.enableLogin = this.enableLogin.bind(this);
  }

  enableRegister(){
    this.setState({submitType: "Register"});
  }

  enableLogin(){
      this.setState({submitType: "Login"});
  }

  render() {
    let currObj = this;
    return (
        <div className="container">
          <Form
              onSubmit={(values) => {
                  let options = {
                      method: 'POST',
                      uri: 'http://localhost:3000/' + currObj.state.submitType.toLowerCase(),
                      body: values,
                      json: true
                  };
                  rp(options)
                      .then(function (body) {
                            if(body.userRegistered){
                                options.uri = 'http://localhost:3000/login'
                                rp(options)
                                    .then(function (body) {
                                        currObj.props.history.push("/home");
                                    })
                                    .catch(function (err) {
                                        currObj.setState({errorObj: err});
                                    });
                            } else{
                                if(body.loginSuccess)
                                    currObj.props.history.push("/home");
                                else
                                    currObj.setState({errorObj: {
                                        error: "{\"message\":\"Not Logged In\"}",
                                        message: "500 - {\"message\":\"Not Logged In\"}",
                                        name: "StatusCodeError"
                                    }});
                            }
                      })
                      .catch(function (err) {
                          currObj.setState({errorObj: err});
                      });
              }}
              validate={(values) => {
                return {
                    username: !values.username ? 'Please enter username' : !(values.username && values.username.trim().length > 0) ? "Please enter a valid username": undefined,
                    password: !values.password ? 'Please enter password' : !(values.password && values.password.trim().length > 0) ? "Please enter a valid password" : undefined
                }
              }}
          >
              {({submitForm}) => {
                  let errorMessage = null;
                  if(currObj.state && currObj.state.errorObj && currObj.state.errorObj.error.message){
                    errorMessage = currObj.state.errorObj.error.message;
                    if(errorMessage.indexOf("E11000 duplicate key") != -1){
                        errorMessage = "User already exists!";
                    }
                  }
                  return (
                      <form onSubmit={submitForm}>
                          <div className="form-group">
                              <label>Username</label>
                              <Text field='username' placeholder='Username' className="form-control" />
                          </div>
                          <div className="form-group">
                              <label>Password</label>
                              <Text field='password' placeholder='Password' className="form-control" />
                          </div>                          
                          {(errorMessage) ? <div className="alert alert-danger">{errorMessage}</div>: ""}                            
                          <div className="text-center">
                              <button className="btn btn-primary" type='submit'>
                                  {currObj.state.submitType}
                              </button>
                              {currObj.state.submitType === "Login" ?
                                <a href="#" className="padding-20" onClick={currObj.enableRegister}>Do not have a account?</a>
                                :
                                <a href="#" className="padding-20" onClick={currObj.enableLogin}>Continue to Login</a>
                              }
                          </div>
                      </form>
                  )
              }}
          </Form>
        </div>
    );
  }
}

export default Login;