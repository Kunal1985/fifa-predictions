import React from 'react';
import { Link } from 'react-router';
import { sideBarList } from '../../utils/Constants';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class CreateTank extends Authentication {

    constructor(props) {
        super(props);
        this.onCancel = this.onCancel.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    onCancel() {
        let currProps = this.props;
        currProps.history.goBack()
    }

    goBack() {
        let currProps = this.props;
        currProps.history.goBack();
    }

    render() {
        return (
            <div className="container">
              <div className="register-heading">Tank Master</div>
              <div className="text-right"><a onClick={ this.goBack }>Back</a></div>
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
                              <form onSubmit={ submitForm } id="createTank">
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12"></div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Tank Name</label>
                                      <Text field='createTankName' placeholder='Tank Name' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12"></div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Type</label>
                                      <select className="form-control">
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12"></div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Guging Date</label>
                                      <Text field='createTankGugingDate' placeholder='Guging Date' className="form-control" type="date" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12"></div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Capacity</label>
                                      <Text field='createTankCapacity' placeholder='Capacity' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12"></div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Installation Date</label>
                                      <Text field='createTankInstallationDate' placeholder='Installation Date' className="form-control" type="date" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="button-section text-center">
                                    <div className="text-center">
                                      <button className="btn btn-primary" onClick={ this.onCancel }>
                                        Cancel
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <button className="btn btn-default" type='submit'>
                                        Save
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

export default CreateTank;