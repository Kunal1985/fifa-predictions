import React from 'react';
import {Link} from 'react-router';
import { sideBarList } from '../utils/Constants';
import Authentication from './Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register7 extends Authentication {
  constructor(props) {
    super(props);   
  }

  render() {
    let currObj = this;
    return (
        <div className="container">
        <div className="register-heading">Labelling</div>
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

export default Register7;