import React from 'react';
import { Link, browserHistory } from 'react-router';
import { suppliers } from '../../utils/Constants';
import { getCurrRecord, upsertRecord, validateForm, getRecordsByQuery } from '../../utils/Functions';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import { InputGroup } from 'react-bootstrap';

class Register1 extends Authentication {

    constructor(props) {
        super(props);
        this.modelName = "Register1";
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
              <div className="register-heading">Grape/Fruit Receipt Transactions</div>
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
                    return validateForm(values, thisVar.modelName, tankList);
                } }>
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
                                      <Select className="form-control" field="supplierName" id="supplierName" options={ suppliers } />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Quantity of Fruit/Grapes Received in Kg.</label>
                                      <Text field='qtyReceived' placeholder='KG' className="form-control" type="number" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Grape/Fruit Variety</label>
                                      <Select className="form-control" field="grapeVariety" id="grapeVariety" options={ grapeVarietyList } />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Quantity of Grapes/Fruit Crushed in Kg.</label>
                                      <Text field='qtyCrushed' placeholder='KG' className="form-control" type="number"/>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Yield</label>
                                      <Text field='yield' placeholder='Yield' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="form-label-headings">Destination 1-1C</div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Tank</label>
                                        <Select className="form-control" field="tankNumber" id="tankNumber" options={ tankList } />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Quantity in Bulk Litres</label>
                                          <Text field='qtyBulkLts' placeholder='Quantity in Bulk Litres' className="form-control" type="number" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label className="text-area-labels">
                                        Remarks:
                                        <Textarea className="form-control" field='remarks' />
                                      </label>
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

export default Register1;