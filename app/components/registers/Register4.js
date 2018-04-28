import React from 'react';
import { Link } from 'react-router';
import { sideBarList, tankNumbers } from '../../utils/Constants';
import { getCurrRecord, upsertRecord, validateForm } from '../../utils/Functions';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register4 extends Authentication {
    constructor(props) {
        super(props);
        this.modelName = "Register4";
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
      let currProps = this.props;
      currProps.history.goBack();
    }

    render() {
      let queryParams = this.props.location.query;
      let thisVar = this;
      getCurrRecord(queryParams, this, thisVar.modelName);
        return (
            <div className="container">
              <div className="register-heading">Fortification</div>
              <div className="text-right"><a onClick={ this.goBack }>Back</a></div>
              <Form defaultValues = {thisVar.state? thisVar.state.currRecord ? thisVar.state.currRecord: {} : {}}
                onSubmit={ (values) => {
                    let data = values;
                    if(thisVar.state && thisVar.state.currRecord)
                      data._id = thisVar.state.currRecord._id;
                    console.log("ValuestoSend", data);
                    upsertRecord(data, thisVar, thisVar.modelName);
                  } 
                }
                validate={ (values) => {
                    return validateForm(values, thisVar.modelName);
                  } 
                }>
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
                                      <Text field='date' placeholder='Date' className="form-control" type="date" />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-label-headings">Fermented Wine</div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Tank Number</label>
                                      <Select className="form-control" field="fermentedWine.tankNumber" id="fermentedWine.tankNumber" options={ tankNumbers } />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Opening Balance</label>
                                      <Text field='fermentedWine.openingBalance' id='fermentedWine.openingBalance' placeholder='Opening Balance' className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Quantity Taken</label>
                                      <Text field='fermentedWine.quantity' id='fermentedWine.quantity' placeholder='Quantity Taken' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Closing Balance</label>
                                      <Text field='fermentedWine.closingBalance' placeholder='Closing Balance' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-label-headings">Spirit</div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Tank Number</label>
                                      <Select className="form-control" field="spirit.tankNumber" id="spirit.tankNumber" options={ tankNumbers } />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Opening Balance</label>
                                      <Text field='spirit.openingBalance' placeholder='Opening Balance' className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Strength</label>
                                      <Text field='spirit.strength' placeholder='Strength' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Quantity Taken</label>
                                      <Text field='spirit.quantity' placeholder='Quantity Taken' className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Closing Balance</label>
                                      <Text field='spirit.closingBalance' placeholder='Closing Balance' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-label-headings">Fortified Wine Manufactured</div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Tank Number</label>
                                      <Select className="form-control" field="fortifiedWine.tankNumber" id="fortifiedWine.tankNumber" options={ tankNumbers } />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Quantity in Litres</label>
                                      <Text field='fortifiedWine.quantity' placeholder='Quantity in Litres' className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Alcohol %</label>
                                      <Text field='fortifiedWine.alcoholPercentage' placeholder='Alcohol %' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Closing Balance of Fortified Wine</label>
                                        <Text field='fortifiedWine.closingBalance' placeholder='Closing Balance of Fortified Wine' className="form-control" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Fortification Loss</label>
                                        <Text field='fortifiedWine.fortificationLoss' placeholder='Fortification Loss' className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>
                                        Remarks:
                                        <textarea className="form-control" field='remarks'/>
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