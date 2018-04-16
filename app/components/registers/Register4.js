import React from 'react';
import { Link } from 'react-router';
import { sideBarList } from '../../utils/Constants';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register4 extends Authentication {
    constructor(props) {
        super(props);

        this.goBack = this.goBack.bind(this);
    }

    goBack() {
      let currProps = this.props;
      currProps.history.goBack();
    }

    render() {
        return (
            <div className="container">
              <div className="register-heading">Fortification</div>
              <div className="text-right"><a onClick={ this.goBack }>Back</a></div>
              <Form onSubmit={ (values) => {
                                   console.log(values);
                               } } validate={ (values) => {
                                                                                                                                                      return {
                                                                                                                                                  
                                                                                                                                                      }
                                                                                                                                                  } }>
                { ({submitForm}) => {
                      let errorMessage = null;
                  
                      return (
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <form onSubmit={ submitForm } id="register3">
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Date</label>
                                      <Text field='reg3Date' placeholder='Date' className="form-control" type="date" />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-label-headings">Fermented Wine</div>
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
                                      <Text field='reg4FermentedWineOpeningBalance' placeholder='Opening Balance' className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Quantity Taken</label>
                                      <Text field='reg4FermentedWineQuantitytaken' placeholder='Quantity Taken' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Closing Balance</label>
                                      <Text field='reg4FermentedWineClosingBalance' placeholder='Closing Balance' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-label-headings">Spirit</div>
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
                                      <Text field='reg4SpiritOpeningBalance' placeholder='Opening Balance' className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Strength</label>
                                      <Text field='reg4Strength' placeholder='Strength' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Quantity Taken</label>
                                      <Text field='reg4SpiritQuantitytaken' placeholder='Quantity Taken' className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Closing Balance</label>
                                      <Text field='reg4SpiritClosingBalance' placeholder='Closing Balance' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-label-headings">Fortified Wine Manufactured</div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Tank Number</label>
                                      <Text field='reg3TankNumber' placeholder='Tank Number' className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Quantity in Litres</label>
                                      <Text field='reg3Quantity' placeholder='Quantity in Litres' className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Alcohol %</label>
                                      <Text field='reg3AlcoholPercent' placeholder='Alcohol %' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Closing Balance of Fortified Wine</label>
                                        <Text field='reg3ClosingBalance' placeholder='Closing Balance of Fortified Wine' className="form-control" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Fortification Loss</label>
                                        <Text field='reg3FortificationLoss' placeholder='Fortification Loss' className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>
                                        Remarks:
                                        <textarea className="form-control" />
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="button-section text-center">
                                    <div className="text-center">
                                      <button className="btn btn-primary" onClick={ this.goBack }>
                                        Back
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

export default Register4;