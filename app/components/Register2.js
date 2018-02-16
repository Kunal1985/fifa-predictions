import React from 'react';
import {Link} from 'react-router';
import { sideBarList } from '../utils/Constants';
import Authentication from './Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register2 extends Authentication {
  constructor(props) {
    super(props);
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
                        <form onSubmit={submitForm}>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Date</label>
                                        <Text field='date' placeholder='Date' className="form-control" type="date"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Fruit/Grape Variety</label>
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
                                        <label>Must/Juice Obtained from Fruits/Grapes</label>
                                        <Text field='juiceQuantity' placeholder='Litres' className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Stored/ Transferred to VAT/Tank No.</label>
                                        <Text field='tankNumber' placeholder='Tank Number' className="form-control"/>
                                    </div> 
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Clarification Losses</label>
                                        <Text field='losses' placeholder='Clarification Losses' className="form-control"/>
                                    </div> 
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Closing Balance of Must/Juice in that particular tank</label>
                                        <Text field='closingBalance' placeholder='Closing Balance of Must/Juice in that particular tank' className="form-control"/>
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

export default Register2;