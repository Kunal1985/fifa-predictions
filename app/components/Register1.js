import React from 'react';
import {Link} from 'react-router';
import { sideBarList } from '../utils/Constants';
import Authentication from './Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register1 extends Authentication {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
      <div className="register-heading">Grape Receipt Transactions</div>
      <Form
          onSubmit={(values) => {
            console.log('s');
          }}
          validate={(values) => {
            return {
                
            }
          }}
      >
          {({submitForm}) => {
              let errorMessage = null;
              
              return (
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <form onSubmit={submitForm}>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Date of Receipt</label>
                                        <Text field='dateofReceipt' placeholder='Date of Receipt' className="form-control" type="date"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Name of Grape Supplier</label>
                                        <select className="form-control"></select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Quantity of Fruit/Grapes Crushed in Kg.</label>
                                        <Text field='grapeQuantity' placeholder='KG' className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div>
                              <div className="form-label-headings">Address of Grape Supplier</div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                            <label>State</label>
                                            <select className="form-control"></select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                            <label>District</label>
                                            <select className="form-control"></select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                            <label>Taluka/Tahsil</label>
                                            <select className="form-control"></select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                            <label>Village</label>
                                            <select className="form-control"></select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                            <label>Gat/ Survey No.</label>
                                            <Text field='surveyNo' placeholder='Gat/ Survey No.' className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Grape Variety</label>
                                        <select className="form-control"></select>
                                    </div> 
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Quantity of Fruit/Grapes Crushed in Kg.</label>
                                        <Text field='grapeQuantity' placeholder='KG' className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                    <label className="text-area-labels">
                                        Remarks:
                                        <textarea className="form-control"/>
                                    </label>
                                    </div> 
                                </div>
                            </div>         
                        </form>
                    </div>
                </div>
              )
          }}
      </Form>
      </div>
    );
  }
}

export default Register1;