import React from 'react';
import { Link } from 'react-router';
import { sideBarList, grapeVariety, suppliers } from '../../utils/Constants';
import { getCurrRecord, upsertRecord, validateForm, getRecordsByQuery } from '../../utils/Functions';
import rp from 'request-promise';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import { InputGroup } from 'react-bootstrap';

class Register1 extends Authentication {

    constructor(props) {
        super(props);
        this.state = {};
        this.modelName = "Register1";
        this.goBack = this.goBack.bind(this);
        getRecordsByQuery(this, "States");
    }

    goBack() {
        let currProps = this.props;
        currProps.history.goBack();
    }

    render() {
        let queryParams = this.props.location.query;
        let thisVar = this;
        getCurrRecord(queryParams, this, thisVar.modelName);
        let currRecord = (this.state && this.state.currRecord) ? this.state.currRecord : null;
        let stateList = (this.state && this.state["states"]) ? this.state["states"] : [];
        let districtList = (this.state && this.state["districts"]) ? this.state["districts"] : [];
        let subDistrictList = (this.state && this.state["subdistricts"]) ? this.state["subdistricts"] : [];
        let villageList = (this.state && this.state["villages"]) ? this.state["villages"] : [];
        let stateInDB = currRecord ? currRecord.state : null;
        let districtInDB = currRecord ? currRecord.district : null;
        let subDistrictInDB = currRecord ? currRecord.taluka : null;
        let villageInDB = currRecord ? currRecord.village : null;
        return (
            <div className="container">
              <div className="register-heading">Grape/Fruit Receipt Transactions</div>
              <div className="text-right"><a onClick={ this.goBack }>Back</a></div>
              <Form 
                defaultValues = {currRecord}
                onSubmit={ (values) => {
                    let data = values;
                    if(thisVar.state && thisVar.state.currRecord)
                      data._id = thisVar.state.currRecord._id;
                    console.log("ValuestoSend", data);
                    upsertRecord(data, thisVar, thisVar.modelName);
                  } 
                }
                validate={ (values) => {
                    let currState = values.state;
                    let currDistrict = values.district;
                    let currSubDistrict = values.taluka;
                    if(thisVar.state && thisVar.state.selectedState != currState){
                      thisVar.setState({ selectedState: currState});
                      getRecordsByQuery(this, "Districts", {stateCode: parseInt(currState)});
                    }
                    if(thisVar.state && thisVar.state.selectedDistrict != currDistrict){
                      thisVar.setState({ selectedDistrict: currDistrict});
                      getRecordsByQuery(this, "SubDistricts", {districtCode: parseInt(currDistrict)});
                    }
                    if(thisVar.state && thisVar.state.selectedSubDistrict != currSubDistrict){
                      thisVar.setState({ selectedSubDistrict: currSubDistrict});
                      getRecordsByQuery(this, "Villages", {subDistrictCode: parseInt(currSubDistrict)});
                    }
                    return validateForm(values, thisVar.modelName);
                  } 
                }>
                { ({submitForm}) => {
                      let errorMessage = null;
                  
                      return (
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <form onSubmit={ submitForm } id="register1">
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Date of Receipt<i className="fa fa-calendar"></i></label>
                                      <Text field='dateOfReceipt' placeholder='Date of Receipt' className="form-control" type="date" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Name of Grape/Fruit Supplier</label>
                                      <Select className="form-control" field="supplierName" id="supplierName" options={ suppliers }/>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Quantity of Fruit/Grapes Received in Kg.</label>
                                      <Text field='qtyReceived' placeholder='KG' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="form-label-headings">Address of Grape Supplier</div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>State</label>
                                        <Select className="form-control" field="state" id="state" value={stateInDB} options={stateList} />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>District</label>
                                        <Select className="form-control" field="district" id="district" value={districtInDB} options={districtList} />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Taluka/Tahsil</label>
                                        <Select className="form-control" field="taluka" id="taluka" value={subDistrictInDB} options={subDistrictList} />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Village</label>
                                        <Select className="form-control" field="village" id="village" value={villageInDB} options={villageList} />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Gat/ Survey No.</label>
                                        <Text field='gatNumber' placeholder='Gat/ Survey No.' className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Grape/Fruit Variety</label>
                                      <Select className="form-control" field="grapeVariety" id="grapeVariety" options={ grapeVariety } />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Quantity of Grapes/Fruit Crushed in Kg.</label>
                                      <Text field='qtyCrushed' placeholder='KG' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label className="text-area-labels">
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

export default Register1;