import React from 'react';
import {Link} from 'react-router';
import { sideBarList } from '../utils/Constants';
import Authentication from './Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register3 extends Authentication {
  constructor(props) {
    super(props);
  }

  onClear() {
    document.getElementById("register3").reset();
  }

  render() {
    return (
      <div className="container">
      <div className="register-heading">Fermentation</div>
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
                        <form onSubmit={submitForm} id="register3">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Date</label>
                                        <Text field='reg3Date' placeholder='Date' className="form-control" type="date"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Tank Number</label>
                                        <select className="form-control"></select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Opening Balance</label>
                                        <Text field='reg3OpeningBalance' placeholder='Opening Balance' className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Racking Loss</label>
                                        <Text field='reg3RackingLoss' placeholder='Racking Loss' className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Base Wine obtained</label>
                                        <Text field='reg3BaseWine' placeholder='Base Wine obtained' className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="form-label-headings">Details of Wine Transfer</div>
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
                                            <Text field='reg3openingBalanceTransfer' placeholder='Opening Balance' className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                            <label>Transferred Quantity</label>
                                            <Text field='reg3TransferredQuantity' placeholder='Transferred Quantity' className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                            <label>Closing Balance</label>
                                            <Text field='reg3ClosingBalance' placeholder='Closing Balance' className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>
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
    );
  }
}

export default Register3;