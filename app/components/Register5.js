import React from 'react';
import {Link} from 'react-router';
import { sideBarList } from '../utils/Constants';
import Authentication from './Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register5 extends Authentication {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        
      <div className="container">
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
                            <div className="form-group">
                                <label>Date</label>
                                <Text field='date' placeholder='Date' className="form-control" type="date"/>
                            </div>
                            <div className="form-group">
                                <label>Tank Number</label>
                                <select className="form-control"></select>
                            </div>
                            <div className="form-group">
                                <label>Opening Balance</label>
                                <Text field='openingBalance' placeholder='Opening Balance' className="form-control"/>
                            </div>
                            <div>
                              <div>Quantity of Wine Bottled</div>
                              <div className="form-group">
                                <label>Type of Wine</label>
                                <select className="form-control"></select>
                              </div>
                              <div className="form-group">
                                <label>Bottle Size</label>
                                <select className="form-control"></select>
                              </div>
                              <div className="form-group">
                                <label>Number of Bottles</label>
                                <Text field='noofBottles' placeholder='Number of Bottles' className="form-control"/>
                              </div> 
                              <div className="form-group">
                                <label>Quantity in Litres</label>
                                <Text field='quantityLitres' placeholder='Quantity in Litres' className="form-control"/>
                              </div> 
                            </div>
                            <div className="form-group">
                                <label>Bottling Loss</label>
                                <Text field='bottlingLoss' placeholder='Bottling Loss' className="form-control"/>
                            </div> 
                            <div className="form-group">
                                  <label>Closing Balance</label>
                                  <Text field='closingBalance' placeholder='Closing Balance' className="form-control"/>
                              </div>
                            <div className="form-group">
                              <label>
                                Remarks:
                                <textarea className="form-control"/>
                              </label>
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

export default Register5;