import React from 'react';
import { Link } from 'react-router';
import { sideBarList, grapeVariety, suppliers } from '../../utils/Constants';
import rp from 'request-promise';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import { InputGroup } from 'react-bootstrap';

class Register1 extends Authentication {

    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        let currProps = this.props;
        currProps.history.goBack();
    }

    getCurrRecord(queryParams) {
        let currObj = this;
        if (queryParams.upsertAction === 'update' && queryParams.id) {
            let options = {
                method: 'POST',
                uri: 'http://localhost:3000/getRegister1Record',
                body: {
                    _id: queryParams.id
                },
                json: true
            };
            rp(options)
                .then(function(body) {
                    console.log("getRegister1Record Response", body);
                    if (!currObj.state || !currObj.state.currRecord)
                        currObj.setState({ currRecord: body });
                })
                .catch(function(err) {
                    console.log("Error", err);
                });
        }
    }

    render() {
        let queryParams = this.props.location.query;
        this.getCurrRecord(queryParams);
        let thisVar = this;
        return (
            <div className="container">
              <div className="register-heading">Grape/Fruit Receipt Transactions</div>
              <div className="text-right"><a onClick={ this.goBack }>Back</a></div>
              <Form 
                defaultValues = {thisVar.state? thisVar.state.currRecord ? thisVar.state.currRecord: {} : {}}
                onSubmit={ (values) => {
                    let data = values;
                    if(thisVar.state && thisVar.state.currRecord)
                      data._id = thisVar.state.currRecord._id;
                    console.log("ValuestoSend", data);  
                    let options = {
                      method: 'POST',
                      uri: 'http://localhost:3000/upsertRegister1',
                      body: data,
                      json: true
                    };
                    rp(options)
                        .then(function (body) {
                          console.log("Response", body);
                          thisVar.goBack();
                        })
                        .catch(function (err) {
                            console.log("Error", err);
                        });
                  } 
                }
                validate={ (values) => {
                    return {
                      dateOfReceipt: !values.dateOfReceipt ? 'Please select the Date of Receipt' : undefined,
                      grapeVariety: !values.grapeVariety ? 'Please select the Grape Variety' : undefined,
                      quantity: !values.quantity ? 'Please enter Quantity of Fruit/Grapes Crushed in Kg.' : undefined,
                      supplierQty: !values.supplierQty ? 'Please enter Quantity of Fruit/Grapes Crushed in Kg.' : undefined,
                      supplierName: !values.supplierName ? 'Please select the Grape/Fruit Supplier' : undefined,
                      gatNumber: !values.gatNumber ? 'Please enter a valid GAT/Survey No..' : undefined
                    }
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
                                      <Text field='supplierQty' placeholder='KG' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div className="form-label-headings">Address of Grape Supplier</div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>State</label>
                                        <select className="form-control" field="state" id="state"></select>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>District</label>
                                        <select className="form-control" field="district" id="district"></select>
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Taluka/Tahsil</label>
                                        <select className="form-control" field="taluka" id="taluka"></select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Village</label>
                                        <select className="form-control" field="village" id="village"></select>
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
                                      <Text field='quantity' placeholder='KG' className="form-control" />
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