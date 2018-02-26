import React from 'react';
import {Link} from 'react-router';
import { sideBarList, grapeVariety } from '../utils/Constants';
import Authentication from './Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register1 extends Authentication {
  
  constructor(props) {
    super(props);
  }

  onClear() {
    document.getElementById("register1").reset();
  }

  render() {
    console.log("grapeVariety", grapeVariety);
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
                        <form onSubmit={submitForm} id="register1">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Date of Receipt</label>
                                        <Text field='reg1DateofReceipt' placeholder='Date of Receipt' className="form-control" type="date"/>
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
                                        <Text field='reg1GrapeQuantity' placeholder='KG' className="form-control"/>
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
                                            <Text field='reg1SurveyNo' placeholder='Gat/ Survey No.' className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Grape Variety</label>
                                        <select className="form-control">
                                            {grapeVariety.map(variety => {
                                                return <option key={variety.id} value={variety.id}>
                                                    {variety.name}
                                                </option>;
                                            })}
                                        </select>
                                    </div> 
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Quantity of Fruit/Grapes Crushed in Kg.</label>
                                        <Text field='reg1GrapeQuantityFromSupplier' placeholder='KG' className="form-control"/>
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
    );
  }
}

export default Register1;