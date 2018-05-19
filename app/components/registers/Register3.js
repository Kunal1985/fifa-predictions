import React from 'react';
import { Link, browserHistory } from 'react-router';
import { sideBarList, tankNumbers } from '../../utils/Constants';
import { getCurrRecord, upsertRecord, validateForm, getRecordsByQuery } from '../../utils/Functions';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register3 extends Authentication {
  constructor(props) {
    super(props);
    this.modelName = "Register3";
    this.viewName = `${this.modelName}Form`;
    this.state = { tanks: ['tank-0'], openings: ['opening-0'], quantities: ['quantity-0'] };
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    let currProps = this.props;
    browserHistory.goBack();
  }

  appendInput() {
    let currState = this.state;
    var newTank = `tank-${currState.tanks.length}`;
    var newOpening = `opening-${currState.openings.length}`;
    var newQuantity = `quantity-${currState.quantities.length}`;
    this.setState({ tanks: currState.tanks.concat([newTank]),
      quantities: currState.quantities.concat([newQuantity]),
      openings: currState.openings.concat([newOpening]) });
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
        <div className="register-heading">Fermentation</div>
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
                  <form onSubmit={ submitForm } id="register3">
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
                          <Select className="form-control" field="tankNumber" id="tankNumber" options={ tankList }/>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Opening Balance</label>
                          <Text field='openingBalance' placeholder='Opening Balance' className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Base Wine obtained</label>
                          <Text field='baseWineObtained' placeholder='Base Wine obtained' className="form-control" />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>Racking Loss</label>
                          <Text field='rackingLoss' placeholder='Racking Loss' className="form-control" />
                        </div>
                      </div>
                    </div>
                      <div className="form-label-headings">Details of Wine Transfer</div>
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <div id="dynamicTankInput" className="form-group">
                            <label>Tank Number</label>
                              {currState.tanks.map(input => <Select className="form-control" field="input" id="input" options={ tankList }/>)}
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <div id="dynamicOpeningInput" className="form-group">
                            <label>Opening Balance</label>
                              {currState.openings.map(input => <Text placeholder='Opening Balance' className="form-control" field={input} />)}
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <div id="dynamicTransferQuantityInput" className="form-group">
                            <label>Transferred Quantity</label>
                              {currState.quantities.map(input => <Text placeholder='Transferred Quantity' className="form-control" field={input} />)}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <button type="button" className="btn btn-default" onClick={ () => thisVar.appendInput() }>
                            Add Tank
                          </button>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <div className="form-group">
                            <label>Transfer Loss</label>
                            <Text field='transferLoss' placeholder='Transfer Loss' className="form-control" />
                          </div>
                        </div>
                      </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="form-group">
                          <label>
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

export default Register3;