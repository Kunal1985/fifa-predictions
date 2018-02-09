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
        <div className="col-lg-12 col-md-12 col-sm-12">
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
                        <div className="row">
                            <div className="col-lg-2 col-md-2 col-sm-2"></div>
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <div className="login-form">
                                    <form onSubmit={submitForm}>
                                        <div className="form-group"> 
                                            <Text field='username' placeholder='Username' className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <Text field='password' placeholder='Password' className="form-control" type="password" />
                                        </div>                          
                                        {(errorMessage) ? <div className="alert alert-danger">{errorMessage}</div>: ""}                            
                                        <div className="text-center">
                                            <button className="btn btn-default" type='submit'>
                                                {currObj.state.submitType}
                                            </button>
                                        </div>
                                        <div className="text-center">
                                            {currObj.state.submitType === "Login" ?
                                                <a href="#" className="padding-20" onClick={currObj.enableRegister}>Do not have a account?</a>
                                                :
                                                <a href="#" className="padding-20" onClick={currObj.enableLogin}>Continue to Login</a>
                                            }
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-2"></div>
                        </div>
                    )
                }}
            </Form>
            </div>
        </div>
    );
  }
}

export default Login;