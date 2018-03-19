import React from 'react';
import { Link } from 'react-router';
import { sideBarList, bottleSize, wineType } from '../../utils/Constants';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register5 extends Authentication {
    constructor(props) {
        super(props);
    }

    onClear() {
        document.getElementById("register5").reset();
    }

    render() {
        return (

            <div className="container">
              <div className="register-heading">Bottling</div>
              <Form onSubmit={ (values) => {
                                   console.log('s');
                               } } validate={ (values) => {
                                                                                                                                                      return {
                                                                                                                                                  
                                                                                                                                                      }
                                                                                                                                                  } }>
                { ({submitForm}) => {
                      let errorMessage = null;
                  
                      return (
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <form onSubmit={ submitForm } id="register5">
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Date</label>
                                      <Text field='reg5Date' placeholder='Date' className="form-control" type="date" />
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
                                      <Text field='reg5OpeningBalance' placeholder='Opening Balance' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="form-label-headings">Quantity of Wine Bottled</div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Type of Wine</label>
                                        <select className="form-control">
                                          { wineType.map(wineTypeVal => {
                                                return <option key={ wineTypeVal.id } value={ wineTypeVal.id }>
                                                         { wineTypeVal.name }
                                                       </option>;
                                            }) }
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Bottle Size</label>
                                        <select className="form-control">
                                          { bottleSize.map(bottleSizeVal => {
                                                return <option key={ bottleSizeVal.id } value={ bottleSizeVal.id }>
                                                         { bottleSizeVal.name }
                                                       </option>;
                                            }) }
                                        </select>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Number of Bottles</label>
                                        <Text field='reg5NoOfBottles' placeholder='Number of Bottles' className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Quantity in Litres</label>
                                        <Text field='reg5QuantityLitres' placeholder='Quantity in Litres' className="form-control" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Bottling Loss</label>
                                        <Text field='reg5BottlingLoss' placeholder='Bottling Loss' className="form-control" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Closing Balance</label>
                                        <Text field='reg5ClosingBalance' placeholder='Closing Balance' className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label className="text-area-labels">
                                        Remarks:
                                        <textarea className="form-control" />
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="button-section text-center">
                                    <div className="text-center">
                                      <button className="btn btn-primary" onClick={ this.onClear }>
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
                  } }
              </Form>
            </div>
            );
    }
}

export default Register5;