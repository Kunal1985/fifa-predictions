import React from 'react';
import { Link } from 'react-router';
import { grapeVariety } from '../../utils/Constants';
import { getCurrRecord, upsertRecord, validateForm, getRecordsByQuery } from '../../utils/Functions';
import rp from 'request-promise';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register2 extends Authentication {
  constructor(props) {
    super(props);
    this.modelName = "Register2";
    this.viewName = `${this.modelName}Form`;
    this.state = { tanks: ['tank-0'], quantities: ['quantity-0'] };
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

  componentDidMount(){
    console.log(this.viewName, "componentDidMount");
    getRecordsByQuery(this, "TankMaster");
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
    let tankList = (currState && currState["tankmaster"]) ? currState["tankmaster"] : [];
    return (
      <div className="container">
        <div className="register-heading">Crushing/Juice Processing</div>
        <div className="text-right"><a onClick={ thisVar.goBack }>Back</a></div>
        <Form 
          defaultValues = {currRecord}
          onSubmit={ (values) => {
              let data = values;
              if(currState && currState.currRecord)
                data._id = currState.currRecord._id;
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
                          {this.state.tanks.map(input => <Select className="form-control" field="input" id="input" options={ tankList }/>)}
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
                        <button className="btn btn-default" onClick={ () => thisVar.appendInput() } type="button">
                          Add Tank
                        </button>
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
          }}
        </Form>
      </div>
    );
  }
}

export default Register2;