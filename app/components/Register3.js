import React from 'react';
import {Link} from 'react-router';
import { sideBarList } from '../utils/Constants';
import Authentication from './Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register3 extends Authentication {
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
                            <div className="form-group">
                                <label>Racking Loss</label>
                                <Text field='rackingLoss' placeholder='Racking Loss' className="form-control"/>
                            </div> 
                            <div className="form-group">
                                <label>Base Wine obtained</label>
                                <Text field='baseWine' placeholder='Base Wine obtained' className="form-control"/>
                            </div>
                            <div>
                              <div>Details of Wine Transfer</div>
                              <div className="form-group">
                                  <label>Tank Number</label>
                                  <select className="form-control"></select>
                              </div>
                              <div className="form-group">
                                  <label>Opening Balance</label>
                                  <Text field='openingBalance' placeholder='Opening Balance' className="form-control"/>
                              </div>
                              <div className="form-group">
                                  <label>Transferred Quantity</label>
                                  <Text field='transferredQuantity' placeholder='Transferred Quantity' className="form-control"/>
                              </div>
                              <div className="form-group">
                                  <label>Closing Balance</label>
                                  <Text field='closingBalance' placeholder='Closing Balance' className="form-control"/>
                              </div>
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

export default Register3;