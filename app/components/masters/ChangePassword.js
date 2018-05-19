import React from 'react';
import { Link, browserHistory } from 'react-router';
import { sideBarList } from '../../utils/Constants';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class ChangePassword extends Authentication {

    constructor(props) {
        super(props);
        this.onCancel = this.onCancel.bind(this);
    }

    onCancel() {
        let currProps = this.props;
        browserHistory.goBack()
    }

    render() {
        return (
            <div className="container">
              <div className="register-heading">Change Password</div>
              <Form onSubmit={ (values) => {
                                   console.log('s');
                               } } validate={ (values) => {
                                                                                                                                                      return {
                                                                                                                                                  
                                                                                                                                                      }
                                                                                                                                                  } }>
                { ({submitForm}) => {
                      let errorMessage = null;
                  
                      return (
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <form onSubmit={ submitForm } id="reset-password">
                                <div className="row">
                                  <div className="col-lg-3 col-md-3 col-sm-2"></div>
                                  <div className="col-lg-6 col-md-6 col-sm-8">
                                    <div className="form-group">
                                      <Text field='oldPassword' placeholder='Old Password*' className="form-control" type="password" />
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-md-3 col-sm-2"></div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-3 col-md-3 col-sm-2"></div>
                                  <div className="col-lg-6 col-md-6 col-sm-8">
                                    <div className="form-group">
                                      <Text field='newPassword' placeholder='New Password*' className="form-control" type="password" />
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-md-3 col-sm-2"></div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-3 col-md-3 col-sm-2"></div>
                                  <div className="col-lg-6 col-md-6 col-sm-8">
                                    <div className="form-group">
                                      <Text field='confirmPassword' placeholder='Confirm Password*' className="form-control" type="password" />
                                    </div>
                                  </div>
                                  <div className="col-lg-3 col-md-3 col-sm-2"></div>
                                </div>
                                <div className="row">
                                  <div className="button-section text-center">
                                    <div className="text-center">
                                      <button type="button" className="btn btn-primary" onClick={ this.onCancel }>
                                        Cancel
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <button className="btn btn-default" type='submit'>
                                        Submit
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                      )
                  } }
              </Form>
            </div>
            );
    }
}

export default ChangePassword;