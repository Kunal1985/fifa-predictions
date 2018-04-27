import React from 'react';
import { Link } from 'react-router';
import { sideBarList } from '../../utils/Constants';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register3 extends Authentication {
    constructor(props) {
        super(props);

        this.state = { tanks: ['tank-0'], openings: ['opening-0'], quantities: ['quantity-0'] };

        this.goBack = this.goBack.bind(this);
    }

    goBack() {
      let currProps = this.props;
      currProps.history.goBack();
    }

    appendInput() {
      var newTank = `tank-${this.state.tanks.length}`;
      var newOpening = `opening-${this.state.openings.length}`;
      var newQuantity = `quantity-${this.state.quantities.length}`;
      this.setState({ tanks: this.state.tanks.concat([newTank]),
        quantities: this.state.quantities.concat([newQuantity]),
        openings: this.state.openings.concat([newOpening]) });
  }

    render() {
        return (
            <div className="container">
              <div className="register-heading">Fermentation</div>
              <div className="text-right"><a onClick={ this.goBack }>Back</a></div>
              <Form onSubmit={ (values) => {
                                   console.log(values);
                               } } validate={ (values) => {
                                                                                                                                                      return {
                                                                                                                                                  
                                                                                                                                                      }
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
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Tank Number</label>
                                      <select className="form-control" field="tankNumber" id="tankNumber"></select>
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
                                          {this.state.tanks.map(input => <Text placeholder='Tank Number' className="form-control" field={input} />)}
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div id="dynamicOpeningInput" className="form-group">
                                        <label>Opening Balance</label>
                                          {this.state.openings.map(input => <Text placeholder='Opening Balance' className="form-control" field={input} />)}
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div id="dynamicTransferQuantityInput" className="form-group">
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

export default Register3;