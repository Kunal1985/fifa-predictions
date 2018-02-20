import React from 'react';
import {Link} from 'react-router';
import { sideBarList } from '../utils/Constants';
import Authentication from './Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register8 extends Authentication {
  constructor(props) {
    super(props);
  }

  onClear() {
    document.getElementById("register8").reset();
  }

  render() {
    return (
      <div className="container">
      <div className="register-heading">Finished Goods/Dispatch</div>
          <div className="container">
    <Form
        onSubmit={(values) => {
          console.log('s');
        }}
        validate={(values) => {
          return {
              
          }
        }}

        handleChange
    >
        {({submitForm}) => {
            let errorMessage = null;
            
            return (
              <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                      <form onSubmit={submitForm} id="register8">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                    <label>Date</label>
                                    <Text field='reg8Date' placeholder='Date' className="form-control" type="date"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="form-label-headings">Opening Balance of Wine</div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Brand Name</label>
                                        <Text field='reg8BrandName' placeholder='Brand Name' className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Strength</label>
                                        <Text field='reg8Strength' placeholder='Strength' className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Batch No.</label>
                                        <Text field='reg8BatchNo' placeholder='Batch No.' className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Size</label>
                                        <Text field='reg8SizeMl' placeholder='Size in Ml' className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Number of Bottles</label>
                                        <Text field='reg8NumberOfBottles' placeholder='Number of Bottles' className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                    <label>Tank Number</label>
                                    <select className="form-control"></select>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                    <label>Opening Balance</label>
                                    <Text field='reg8OpeningBalanceBulk' placeholder='Opening Balance' className="form-control"/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                    <label>Closing Balance</label>
                                    <Text field='reg8ClosingBalanceBulk' placeholder='Closing Balance' className="form-control"/>
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
                        <div className="row">
                            <div className="button-section text-center">
                                <div className="text-center">
                                    <button className="btn btn-primary" onClick={this.onClear}>
                                        Clear
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
        }}
    </Form>
    </div>
      </div>
  );
  }
}

export default Register8;