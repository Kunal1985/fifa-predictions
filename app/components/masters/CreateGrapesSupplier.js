import React from 'react';
import { Link, browserHistory } from 'react-router';
import { suppliers } from '../../utils/Constants';
import { getCurrRecord, upsertRecord, validateForm, getRecordsByQuery } from '../../utils/Functions';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import { InputGroup } from 'react-bootstrap';

class CreateGrapesSupplier extends Authentication {

    constructor(props) {
        super(props);
        this.modelName = "GrapesSupplierMaster";
        this.viewName = `${this.modelName}Form`;
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        let currProps = this.props;
        browserHistory.goBack();
    }

    componentDidMount() {
        console.log(this.viewName, "componentDidMount");
        getRecordsByQuery(this, "States");
        getRecordsByQuery(this, "TankMaster");
        getRecordsByQuery(this, "GrapeVarietyMaster");
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
        let stateList = (currState && currState["states"]) ? currState["states"] : [];
        let districtList = (currState && currState["districts"]) ? currState["districts"] : [];
        let subDistrictList = (currState && currState["subdistricts"]) ? currState["subdistricts"] : [];
        let villageList = (currState && currState["villages"]) ? currState["villages"] : [];
        let stateInDB = currRecord ? currRecord.state : null;
        let districtInDB = currRecord ? currRecord.district : null;
        let subDistrictInDB = currRecord ? currRecord.taluka : null;
        let villageInDB = currRecord ? currRecord.village : null;
        let tankList = (currState && currState["tankmaster"]) ? currState["tankmaster"] : [];
        let grapeVarietyList = (currState && currState["grapevarietymaster"]) ? currState["grapevarietymaster"] : [];
        return (
            <div className="container">
              <div className="register-heading">Grapes Supplier</div>
              <div className="text-right"><a onClick={ thisVar.goBack } type="button">Back</a></div>
              <Form defaultValues={ currRecord } onSubmit={ (values) => {
                          let data = values;
                          if (currState && currState.currRecord)
                              data._id = currState.currRecord._id;
                          upsertRecord(data, thisVar, thisVar.modelName);
                      } } validate={ (values) => {
                      let currState = values.state;
                      let currDistrict = values.district;
                      let currSubDistrict = values.taluka;
                      if (currState && currState.selectedState != currState) {
                          thisVar.setState({
                              selectedState: currState
                          });
                          getRecordsByQuery(this, "Districts", {
                              stateCode: parseInt(currState)
                          });
                      }
                      if (currState && currState.selectedDistrict != currDistrict) {
                          thisVar.setState({
                              selectedDistrict: currDistrict
                          });
                          getRecordsByQuery(this, "SubDistricts", {
                              districtCode: parseInt(currDistrict)
                        });
                    }
                    if (currState && currState.selectedSubDistrict != currSubDistrict) {
                        thisVar.setState({
                            selectedSubDistrict: currSubDistrict
                        });
                        getRecordsByQuery(this, "Villages", {
                            subDistrictCode: parseInt(currSubDistrict)
                        });
                    }
                    return validateForm(values, thisVar.modelName);
                } }>
                { ({submitForm}) => {
                      let errorMessage = null;
                      return (
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <form onSubmit={ submitForm } id="CreateGrapesSupplier">
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Name of Grape/Fruit Supplier</label>
                                      <Text field='supplierName' placeholder='Name of Grape/Fruit Supplier' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="form-label-headings">Address of Grape Supplier</div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>State</label>
                                        <Select className="form-control" field="state" id="state" value={ stateInDB } options={ stateList } />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>District</label>
                                        <Select className="form-control" field="district" id="district" value={ districtInDB } options={ districtList } />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Taluka/Tahsil</label>
                                        <Select className="form-control" field="taluka" id="taluka" value={ subDistrictInDB } options={ subDistrictList } />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Village</label>
                                        <Select className="form-control" field="village" id="village" value={ villageInDB } options={ villageList } />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Gat/ Survey No.</label>
                                        <Text field='gatNumber' placeholder='Gat/ Survey No.' className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Contact Number</label>
                                        <Text field='contactNumber' placeholder='Contact Number' className="form-control" type="number"/>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="button-section text-center">
                                    <div className="text-center">
                                      <button type="button" className="btn btn-primary" onClick={ thisVar.goBack }>
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

export default CreateGrapesSupplier;