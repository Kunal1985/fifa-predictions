import React from 'react';
import { Link, browserHistory } from 'react-router';
import { sideBarList, bottleSize } from '../../utils/Constants';
import { getCurrRecord, upsertRecord, validateForm, getRecordsByQuery } from '../../utils/Functions';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class CreateLabelledBottleOpeningEntry extends Authentication {

    constructor(props) {
        super(props);
        this.modelName = "LabelledDetails";
        this.viewName = `${this.modelName}Form`;
        this.onCancel = this.onCancel.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    onCancel() {
        let currProps = this.props;
        browserHistory.goBack()
    }

    goBack() {
        let currProps = this.props;
        browserHistory.goBack();
    }

    componentDidMount(){
      console.log(this.viewName, "componentDidMount");
      getRecordsByQuery(this, "WineTypeMaster");
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
      let wineList = (currState && currState["winetypemaster"]) ? currState["winetypemaster"] : [];
        return (
            <div className="container">
              <div className="register-heading">Labelled Bottle Details</div>
              <div className="text-right"><a onClick={ this.goBack }>Back</a></div>
              <Form defaultValues = {currRecord} onSubmit={ (values) => {
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
                                      <label>Date</label>
                                      <Text field='date' placeholder='Date' className="form-control" type="date" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12"></div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Type</label>
                                      <Select className="form-control" field="type" id="type" options= {wineList} />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12"></div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Bottle Size</label>
                                      <Select className="form-control" field="bottleSize" id="bottleSize" options={bottleSize}></Select>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12"></div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Quantity</label>
                                      <Text field='quantity' placeholder='Quantity' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="button-section text-center">
                                    <div className="text-center">
                                      <button type="button" className="btn btn-primary" onClick={ this.onCancel }>
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

export default CreateLabelledBottleOpeningEntry;