import React from 'react';
import {Link} from 'react-router';
import { sideBarList, grapeVariety } from '../utils/Constants';
import Authentication from './Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register2 extends Authentication {
  constructor(props) {
    super(props);
  }

  onClear() {
    document.getElementById("register2").reset();
  }

  render() {
    return (
      <div className="container">
      <div className="register-heading">Crushing/Juice Processing</div>
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
                        <form onSubmit={submitForm} id="register2">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Date</label>
                                        <Text field='reg2Date' placeholder='Date' className="form-control" type="date"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Fruit/Grape Variety</label>
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
                                        <Text field='reg2GrapeQuantity' placeholder='KG' className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Must/Juice Obtained from Fruits/Grapes</label>
                                        <Text field='reg2JuiceQuantity' placeholder='Litres' className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Stored/ Transferred to VAT/Tank No.</label>
                                        <Text field='reg2TankNumber' placeholder='Tank Number' className="form-control"/>
                                    </div> 
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Clarification Losses</label>
                                        <Text field='reg2Losses' placeholder='Clarification Losses' className="form-control"/>
                                    </div> 
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Closing Balance of Must/Juice in that particular tank</label>
                                        <Text field='reg2ClosingBalance' placeholder='Closing Balance of Must/Juice in that particular tank' className="form-control"/>
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

export default Register2;