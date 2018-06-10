import React from 'react';
import { Link, browserHistory } from 'react-router';
import { sideBarList, tankNumbers } from '../../utils/Constants';
import { getCurrRecord, upsertRecord, validateForm, getRecordsByQuery, setOpeningBalance, checkForTankValidation } from '../../utils/Functions';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register4 extends Authentication {
    constructor(props) {
        super(props);
        this.modelName = "Register4";
        this.viewName = `${this.modelName}Form`;
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        let currProps = this.props;
        browserHistory.goBack();
    }

    componentDidMount() {
        console.log(this.viewName, "componentDidMount");
        getRecordsByQuery(this, "TankMaster");
        let queryParams = this.props.location.state;
        getCurrRecord(queryParams, this, this.modelName);
    }

    componentDidUpdate() {
        console.log(this.viewName, "componentDidUpdate");
    }

    render() {
        let thisVar = this;
        let currState = this.state;
        let currRecord = currState ? currState.currRecord : null;
        let tankList = (currState && currState["tankmaster"]) ? currState["tankmaster"] : [];
        return (
            <div className="container">
              <div className="register-heading">Fortification</div>
              <div className="text-right"><a onClick={ thisVar.goBack } type="button">Back</a></div>
              <Form defaultValues={ currRecord } onSubmit={ (values) => {
                                                                let data = values;
                                                                if (currState && currState.currRecord)
                                                                    data._id = currState.currRecord._id;
                                                                upsertRecord(data, thisVar, thisVar.modelName);
                                                            } } validate={ (values) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 return validateForm(values, thisVar.modelName);
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
                                      <Text field='date' placeholder='Date' className="form-control" type="date" />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-label-headings">Fermented Wine</div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Tank Number</label>
                                      <Select className="form-control" field="fermentedWine.tankNumber" id="fermentedWine.tankNumber" options={ tankList } onChange={setOpeningBalance(tankList)}/>
                                      <Text field='fermentedWineTankNumber' type='hidden' className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Opening Balance</label>
                                      <Text field='fermentedWine.openingBalance' id='fermentedWine.openingBalance' placeholder='Opening Balance' className="form-control" />
                                      <Text field='fermentedWineOpeningBalance' type="hidden" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Quantity Taken</label>
                                      <Text field='fermentedWine.quantity' id='fermentedWine.quantity' placeholder='Quantity Taken' className="form-control" />
                                      <Text field='fermentedWineQuantity' type="hidden" className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Closing Balance</label>
                                      <Text field='fermentedWine.closingBalance' placeholder='Closing Balance' className="form-control" />
                                      <Text field='fermentedWineClosingBalance' type='hidden' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-label-headings">Spirit</div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Tank Number</label>
                                      <Select className="form-control" field="spirit.tankNumber" id="spirit.tankNumber" options={ tankList } />
                                      <Text field='spiritTankNumber' type='hidden' className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Opening Balance</label>
                                      <Text field='spirit.openingBalance' placeholder='Opening Balance' className="form-control" />
                                      <Text field='spiritOpeningBalance' type='hidden' className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Strength</label>
                                      <Text field='spirit.strength' placeholder='Strength' className="form-control" />
                                      <Text field='spiritStrength' type='hidden' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Quantity Taken</label>
                                      <Text field='spirit.quantity' placeholder='Quantity Taken' className="form-control" />
                                      <Text field='spiritQuantity' type='hidden' className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Closing Balance</label>
                                      <Text field='spirit.closingBalance' placeholder='Closing Balance' className="form-control" />
                                      <Text field='spiritClosingBalance' type='hidden' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="form-label-headings">Fortified Wine Manufactured</div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Tank Number</label>
                                      <Select className="form-control" field="fortifiedWine.tankNumber" id="fortifiedWine.tankNumber" options={ tankList } />
                                      <Text field='fortifiedWineTankNumber' type='hidden' className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Quantity in Litres</label>
                                      <Text field='fortifiedWine.quantity' placeholder='Quantity in Litres' className="form-control" />
                                      <Text field='fortifiedWineQuantity' type='hidden' className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Alcohol %</label>
                                      <Text field='fortifiedWine.alcoholPercentage' placeholder='Alcohol %' className="form-control" />
                                      <Text field='fortifiedWineAlcoholPercentage' type='hidden' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Closing Balance of Fortified Wine</label>
                                      <Text field='fortifiedWine.closingBalance' placeholder='Closing Balance of Fortified Wine' className="form-control" />
                                      <Text field='fortifiedWineClosingBalance' type='hidden' className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Fortification Loss</label>
                                      <Text field='fortifiedWine.fortificationLoss' placeholder='Fortification Loss' className="form-control" />
                                      <Text field='fortifiedWineFortificationLoss' type='hidden' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>
                                        Remarks:
                                        <Textarea className="form-control" field='remarks' />
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="button-section text-center">
                                    <div className="text-center">
                                      <button type='button' className="btn btn-primary" onClick={ thisVar.goBack }>
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