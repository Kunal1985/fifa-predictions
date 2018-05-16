import React from 'react';
import { Link } from 'react-router';
import { sideBarList } from '../../utils/Constants';
import { getCurrRecord, upsertRecord, validateForm } from '../../utils/Functions';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class createBrand extends Authentication {

    constructor(props) {
        super(props);
        this.modelName = "BrandMaster";
        this.viewName = `${this.modelName}Form`;
        this.onCancel = this.onCancel.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    onCancel() {
        let currProps = this.props;
        currProps.history.goBack()
    }

    goBack() {
        let currProps = this.props;
        currProps.history.goBack();
    }

    componentDidMount(){
      console.log(this.viewName, "componentDidMount");
      let queryParams = this.props.location.state;
      getCurrRecord(queryParams, this, this.modelName);
    }

    componentDidUpdate(){
      console.log(this.viewName, "componentDidUpdate");
    }

    render() {
      let thisVar = this;
      let currState = thisVar.state;
      let currRecord = currState ? currState.currRecord : null;
        return (
            <div className="container">
              <div className="register-heading">Brand</div>
              <div className="text-right"><a onClick={ this.goBack }>Back</a></div>
              <Form 
              defaultValues = {currRecord}
              onSubmit={ (values) => {
                let data = values;
                if(currState && currState.currRecord)
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
                              <form onSubmit={ submitForm } id="createTank">
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12"></div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Name</label>
                                      <Text field='name' placeholder='Name' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12"></div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                  <div className="form-group">
                                      <label>Size in ML</label>
                                      <Text field='size' placeholder='Size in ML' className="form-control" />
                                  </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12"></div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Mfg. Cost</label>
                                        <Text field='mfgCost' placeholder='Mfg. Cost' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12"></div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Excise Duty</label>
                                        <Text field='exciseDuty' placeholder='Excise Duty' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12"></div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Sales Tax</label>
                                        <Text field='salesTax' placeholder='Sales Tax' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12"></div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>MRP</label>
                                        <Text field='mrp' placeholder='MRP' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12"></div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Label Approved Order Number</label>
                                        <Text field='labelAppOrderNo' placeholder='Label Approved Order Number' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12"></div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>MRP Approval Date</label>
                                        <Text field='mrpApprovalDate' placeholder='MRP Approval Date' className="form-control" type="date"/>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12"></div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>MRP Effective From</label>
                                      <Text field='mrpEffectiveDate' placeholder='MRP Effective From' className="form-control" type="date" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12"></div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>MRP Change Date</label>
                                      <Text field='mrpChangeDate' placeholder='MRP Change Date' className="form-control" type="date" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="button-section text-center">
                                    <div className="text-center">
                                      <button className="btn btn-primary" onClick={ this.onCancel }>
                                        Cancel
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <button className="btn btn-default" type='submit'>
                                        Save
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

export default createBrand;