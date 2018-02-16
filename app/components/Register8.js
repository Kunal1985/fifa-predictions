import React from 'react';
import {Link} from 'react-router';
import { sideBarList } from '../utils/Constants';
import Authentication from './Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register8 extends Authentication {
  constructor(props) {
    super(props);
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
                      <form onSubmit={submitForm}>
                        <div className="form-group">
                            <label>Date</label>
                            <Text field='date' placeholder='Date' className="form-control" type="date"/>
                        </div>
                        <div>
                          <div>Openinng Balance of Wine</div>
                          <div className="form-group">
                              <label>Brand Name</label>
                              <Text field='brandName' placeholder='Brand Name' className="form-control"/>
                          </div>
                          <div className="form-group">
                              <label>Strength</label>
                              <Text field='strength' placeholder='Strength' className="form-control"/>
                          </div>
                          <div className="form-group">
                              <label>Batch No.</label>
                              <Text field='batchNo' placeholder='Batch No.' className="form-control"/>
                          </div>
                          <div className="form-group">
                              <label>Size</label>
                              <Text field='sizeMl' placeholder='Size in Ml' className="form-control"/>
                          </div>
                          <div className="form-group">
                              <label>Number of Bottles</label>
                              <Text field='numberOfBottles' placeholder='Number of Bottles' className="form-control"/>
                          </div>
                        </div>
                          
                          <div className="form-group">
                              <label>Tank Number</label>
                              <select className="form-control"></select>
                          </div>
                          <div className="form-group">
                              <label>Opening Balance</label>
                              <Text field='openingBalanceBulk' placeholder='Opening Balance' className="form-control"/>
                          </div>
                          <div className="form-group">
                              <label>Closing Balance</label>
                              <Text field='closingBalanceBulk' placeholder='Closing Balance' className="form-control"/>
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
      </div>
  );
  }
}

export default Register8;