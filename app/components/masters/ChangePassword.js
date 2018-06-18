import React from 'react';
import { Link, browserHistory } from 'react-router';
import { sideBarList } from '../../utils/Constants';
import Authentication from '../Authentication';
import { changePassword } from '../../utils/Functions';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import { getCurrUserName } from '../../utils/TokenUtils';

class ChangePassword extends Authentication {

    constructor(props) {
        super(props);
        this.modelName = "ChangePassword";
        this.viewName = `${this.modelName}Form`;
        this.onCancel = this.onCancel.bind(this);
    }

    onCancel() {
        let currProps = this.props;
        browserHistory.goBack()
    }

    componentDidMount(){
      console.log(this.viewName, "componentDidMount");
    }

    componentDidUpdate(){
      console.log(this.viewName, "componentDidUpdate");
    }

    render() {
      let thisVar = this;
      let currState = thisVar.state;
        return (
            <div className="container">
              <div className="register-heading">Change Password</div>
              <Form onSubmit={ (values) => {
                    let data = values;
                    changePassword(data, thisVar, getCurrUserName());
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
                                  <div className="col-lg-3 col-md-3 col-sm-2"></div>
                                  <div className="col-lg-6 col-md-6 col-sm-8">
                                    <div>
                                      {currState && currState.changePasswordStatus && currState.changePasswordStatus.error ? <div className="text-danger text-center">{currState.changePasswordStatus.error}</div> : <div></div>}
                                      {currState && currState.changePasswordStatus && !currState.changePasswordStatus.error ? <div className="text-center">Password changed successfully</div> : <div></div>}
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