import React from 'react';
import { Link } from 'react-router';
import { sideBarList, grapeVariety } from '../../utils/Constants';
import { getCurrRecord, upsertRecord, validateForm } from '../../utils/Functions';
import rp from 'request-promise';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register2 extends Authentication {
    constructor(props) {
        super(props);
        this.state = { tanks: ['tank-0'], quantities: ['quantity-0'] };
        this.modelName = "Register2";
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
      let currProps = this.props;
      currProps.history.goBack();
    }

    appendInput() {
      var newTank = `tank-${this.state.tanks.length}`;
      var newQuantity = `quantity-${this.state.quantities.length}`;
      this.setState({ tanks: this.state.tanks.concat([newTank]), quantities: this.state.quantities.concat([newQuantity]) });
  }

    render() {
      let queryParams = this.props.location.query;
      let thisVar = this;
      getCurrRecord(queryParams, this, thisVar.modelName);
        return (
            <div className="container">
              <div className="register-heading">Crushing/Juice Processing</div>
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
                              <form onSubmit={ submitForm } id="register2">
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Date</label>
                                      <Text field='date' placeholder='Date' className="form-control" type="date" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Fruit/Grape Variety</label>
                                      <Select className="form-control" field="grapeVariety" id="reg1GrapeVariety" options={grapeVariety}/>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Quantity of Fruit/Grapes Crushed in Kg.</label>
                                      <Text field='quantity' placeholder='KG' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Must/Juice Obtained from Fruits/Grapes</label>
                                      <Text field='juiceObtained' placeholder='Litres' className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Clarification Losses</label>
                                      <Text field='clarificationLoss' placeholder='Clarification Losses' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                  <div id="dynamicTankInput" className="form-group">
                                    <label>Tank Number</label>
                                      {this.state.tanks.map(input => <Text placeholder='Tank Number' className="form-control" field={input} />)}
                                  </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                  <div id="dynamicQuantityInput" className="form-group">
                                    <label>Transferred Quantity</label>
                                      {this.state.quantities.map(input => <Text placeholder='Transferred Quantity' className="form-control" field={input} />)}
                                  </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <button className="btn btn-default" onClick={ () => this.appendInput() }>
                                      Add Tank
                                    </button>
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

export default Register2;