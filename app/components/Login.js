import React from 'react';
import {Link} from 'react-router';
import { sideBarList } from '../utils/Constants';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import rp from 'request-promise';
import Authentication from './Authentication';

class Login extends Authentication {
  constructor(props) {
    super(props);
  }

  render() {
    let currObj = this;
    return (
        <div className="container">
          <Form
              onSubmit={(values) => {
                  let options = {
                      method: 'POST',
                      uri: 'http://localhost:3000/login',
                      body: values,
                      json: true
                  };
                  rp(options)
                      .then(function (body) {
                          currObj.props.history.push("/home");
                      })
                      .catch(function (err) {
                          currObj.setState({errorObj: err});
                      });
              }}
          >
              {({submitForm}) => {
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
                          {(currObj.state && currObj.state.errorObj) ? currObj.state.errorObj.message: ""}
                          <div className="text-center">
                              <button className="btn btn-primary" type='submit'>
                                  Login
                              </button>
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