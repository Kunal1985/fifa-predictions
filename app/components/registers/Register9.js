import React from 'react';
import { Link, browserHistory } from 'react-router';
import { sideBarList, sizeInML, reg9TransferType } from '../../utils/Constants';
import { getCurrRecord, upsertRecord, validateForm } from '../../utils/Functions';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register9 extends Authentication {
    constructor(props) {
        super(props);
        this.modelName = "Register9";
        this.viewName = `${this.modelName}Form`;
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        let currProps = this.props;
        browserHistory.goBack();
    }

    componentDidMount() {
        console.log(this.viewName, "componentDidMount");
        let queryParams = this.props.location.state;
        getCurrRecord(queryParams, this, this.modelName);
    }

    componentDidUpdate() {
        console.log(this.viewName, "componentDidUpdate");
    }

    render() {
        let queryParams = this.props.location.query;
        let thisVar = this;
        let currState = thisVar.state;
        let currRecord = currState ? currState.currRecord : null;
        return (
            <div className="container">
              <div className="register-heading">Finished Goods/Dispatch</div>
              <div className="text-right"><a onClick={ thisVar.goBack } type="button">Back</a></div>
              <div className="container">
                <Form defaultValues={ currRecord } onSubmit={ (values) => {
                                                                  let data = values;
                                                                  if (currState && currState.currRecord)
                                                                      data._id = currState.currRecord._id;
                                                                  console.log("ValuestoSend", data);
                                                                  upsertRecord(data, thisVar, thisVar.modelName);
                                                              } } validate={ (values) => {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   return validateForm(values, thisVar.modelName);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               } }>
                  { ({submitForm}) => {
                        let errorMessage = null;
                        return (
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <form onSubmit={ submitForm } id="register8">
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Date</label>
                                        <Text field='date' placeholder='Date' className="form-control" type="date" />
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="form-label-headings">Opening Balance of Wine</div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Brand Name</label>
                                          <Text field='brandName' placeholder='Brand Name' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Strength</label>
                                          <Text field='strength' placeholder='Strength' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Batch No.</label>
                                          <Text field='batchNumber' placeholder='Batch No.' className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Size</label>
                                          <Select className="form-control" field='sizeInML' id="sizeInML" options={ sizeInML } />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Number of Bottles</label>
                                          <Text field='noOfBottles' placeholder='Number of Bottles' className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Quantity of Wine Dispatched from Finished Goods</label>
                                        <Select field="dispatchType" id="dispatchType" className="form-control" options={ reg9TransferType } />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Party Name</label>
                                        <Text field='partyName' placeholder='Party Name' className="form-control" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Kind of Liscense Held</label>
                                        <Text field='liscenseType' placeholder='Address of party' className="form-control" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Size in ML</label>
                                        <Text field='dispatchedSize' placeholder='Size in ML' className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Number of Bottles</label>
                                        <Text field='dispatchedBottleQty' placeholder='Number of Bottles' className="form-control" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Vend/Export Fee</label>
                                        <Text field='vendExportFee' placeholder='Vend/Export Fee' className="form-control" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Excise Duty</label>
                                        <Text field='exciseDuty' placeholder='Excise Duty' className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Total Amount</label>
                                        <Text field='totalAmount' placeholder='Total Amount' className="form-control" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Chalan Number</label>
                                        <Text field='chalanNumber' placeholder='Chalan Number' className="form-control" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Chalan Date</label>
                                        <Text field='chalanDate' placeholder='Chalan Date' className="form-control" type="date" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Mfg. Cost</label>
                                        <Text field='mfgCost' placeholder='Mfg. Cost' className="form-control" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Approved MRP</label>
                                        <Text field='approvedMrp' placeholder='Approved MRP' className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="form-label-headings">Closing Balance of Wine</div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Brand Name</label>
                                          <Text field='closingWineBalance.brandName' placeholder='Brand Name' className="form-control" />
                                          <Text field='closingWineBalanceBrandName' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Strength</label>
                                          <Text field='closingWineBalance.strength' placeholder='Strength' className="form-control" />
                                          <Text field='closingWineBalanceStrength' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Batch No.</label>
                                          <Text field='closingWineBalance.batchNumber' placeholder='Batch No.' className="form-control" />
                                          <Text field='closingWineBalanceBatchNumber' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Size</label>
                                          <select className="form-control" field="closingWineBalance.sizeInML" id="closingWineBalance.sizeInML" options={ sizeInML } />
                                          <Text field='closingWineBalanceSizeInML' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Number of Bottles</label>
                                          <Text field='closingWineBalance.noOfBottles' placeholder='Number of Bottles' className="form-control" />
                                          <Text field='closingWineBalanceNoOfBottles' type='hidden' className="form-control" />
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
                    } }
                </Form>
              </div>
            </div>
            );
    }
}

export default Register9;