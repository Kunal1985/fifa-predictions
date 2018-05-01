import React from 'react';
import { Link } from 'react-router';
import { sideBarList, bottleSize, wineType, tankNumbers, brandList } from '../../utils/Constants';
import { getCurrRecord, upsertRecord, validateForm, getRecordsByQuery } from '../../utils/Functions';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register6 extends Authentication {
    constructor(props) {
        super(props);
        this.modelName = "Register6";
        this.goBack = this.goBack.bind(this);
        getRecordsByQuery(this, "TankMaster");
    }

    goBack() {
      let currProps = this.props;
      currProps.history.goBack();
    }

    render() {
      let queryParams = this.props.location.query;
      let thisVar = this;
      getCurrRecord(queryParams, this, thisVar.modelName);
      let tankList = (this.state && this.state["tankmaster"]) ? this.state["tankmaster"] : [];
        return (
            <div className="container">
              <div className="register-heading">Bottling</div>
              <div className="text-right"><a onClick={ this.goBack }>Back</a></div>
              <Form 
                defaultValues = {thisVar.state? thisVar.state.currRecord ? thisVar.state.currRecord: {} : {}}
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
                              <form onSubmit={ submitForm } id="register5">
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Date</label>
                                      <Text field='date' placeholder='Date' className="form-control" type="date" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Tank Number</label>
                                      <Select className="form-control" field="tankNumber" id="tankNumber" options={ tankList } />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Wine Variety</label>
                                      <Text field='wineVariety' placeholder='Wine Variety' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Opening Balance</label>
                                      <Text field='openingBalance' placeholder='Opening Balance' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="form-label-headings">Quantity of Wine Bottled</div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Type of Wine</label>
                                        <Select className="form-control" field="wineType" id="wineType" options={wineType} />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Name of Brand</label>
                                        <Select className="form-control" field="brandName" id="brandName" options={brandList} />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Bottle Size in ML</label>
                                        <Select className="form-control" field="bottleSize" id="bottleSize" options={bottleSize} />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Number of Bottles</label>
                                        <Text field='bottleQty' placeholder='Number of Bottles' className="form-control" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Quantity in Litres</label>
                                        <Text field='qtyInLitres' placeholder='Quantity in Litres' className="form-control" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Bottling Loss</label>
                                        <Text field='bottlingLoss' placeholder='Bottling Loss' className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Closing Balance</label>
                                        <Text field='closingBalance' placeholder='Closing Balance' className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label className="text-area-labels">
                                        Remarks:
                                        <Textarea className="form-control" field='remarks'/>
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

export default Register6;