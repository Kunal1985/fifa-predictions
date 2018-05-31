import React from 'react';
import { Link, browserHistory } from 'react-router';
import { sideBarList, sizeInML, bottleSize, wineType, disgorgingTypeList } from '../../utils/Constants';
import { getCurrRecord, upsertRecord, validateForm } from '../../utils/Functions';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register7 extends Authentication {
    constructor(props) {
        super(props);
        this.modelName = "Register7";
        this.viewName = `${this.modelName}Form`;
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        let currProps = this.props;
        browserHistory.goBack();
    }

    updateValuesFromDB(disgorgingTypeInDB) {
        let currState = this.state;
        if (disgorgingTypeInDB && !currState.transferType)
            this.setState({
                transferType: disgorgingTypeInDB
            });
    }

    componentDidMount() {
        console.log(this.viewName, "componentDidMount");
        let queryParams = this.props.location.state;
        getCurrRecord(queryParams, this, this.modelName);
    }

    componentDidUpdate() {
        console.log(this.viewName, "componentDidUpdate");
        let currState = this.state;
        let currRecord = currState ? currState.currRecord : null;
        let disgorgingTypeInDB = currRecord ? currRecord.disgorgingType : null;
        this.updateValuesFromDB(disgorgingTypeInDB);
    }

    render() {
        let thisVar = this;
        let currState = this.state;
        let currRecord = currState ? currState.currRecord : null;
        let currTransferType = currState ? currState.transferType : null;
        let disgorgingTypeInDB = currRecord ? currRecord.disgorgingType : null;
        return (
            <div className="container">
              <div className="register-heading">Disgorging</div>
              <div className="text-right"><a onClick={ thisVar.goBack } type="button">Back</a></div>
              <div className="container">
                <Form defaultValues={ currRecord } onSubmit={ (values) => {
                          let data = values;
                          if (currState && currState.currRecord)
                              data._id = currState.currRecord._id;
                          console.log("ValuestoSend", data);
                          upsertRecord(data, thisVar, thisVar.modelName);
                      } } validate={ (values) => {
                      let currDisgorgingType = values.disgorgingType;
                        if (currDisgorgingType)
                          thisVar.setState({
                              transferType: currDisgorgingType
                          });
                      return validateForm(values, thisVar.modelName);
                  } }>
                  { ({submitForm}) => {
                        let errorMessage = null;
                        return (
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <form onSubmit={ submitForm } id="register6">
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Date</label>
                                        <Text field='date' placeholder='Date' className="form-control" type="date" />
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="form-label-headings">Quantity of Wine Transferred for Labelling</div>
                                    <div className="form-group">
                                      <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                          <label>Disgorging Type</label>
                                          <Select className="form-control" field="disgorgingType" id="disgorgingType" value={ disgorgingTypeInDB } options={ disgorgingTypeList } />
                                        </div>
                                      </div>
                                      { currTransferType === "ownUnitTransfer" ? <div>
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>Bottle Size</label>
                                              <Select className="form-control" field="ownUnit.sizeInML" id="ownUnit.sizeInML" options={ sizeInML } />
                                            </div>
                                          </div>
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>Number of Bottles</label>
                                              <Text field='ownUnit.bottlesQty' placeholder='Number of Bottles' className="form-control" />
                                            </div>
                                          </div>
                                        </div>
                                      </div> : currTransferType === "otherUnitTransfer" ?
                                        <div>
                                          <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                              <div className="form-group">
                                                <label>Name of Party</label>
                                                <Text field='otherUnit.name' placeholder='Name of Party' className="form-control" />
                                              </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                              <div className="form-group">
                                                <label>Address of Party</label>
                                                <Text field='otherUnit.address' placeholder='Address of Party' className="form-control" />
                                              </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                              <div className="form-group">
                                                <label>T.P/E.P No.</label>
                                                <Text field='otherUnit.tpEpNumber' placeholder='T.P/E.P  No.' className="form-control" />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                              <div className="form-group">
                                                <label>Size in ML</label>
                                                <Select className="form-control" field="otherUnit.size" id="otherUnit.size" options={ sizeInML } />
                                              </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                              <div className="form-group">
                                                <label>Number of Bottles</label>
                                                <Text field='otherUnit.bottlesQty' placeholder='Number of Bottles' className="form-control" />
                                              </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                              <div className="form-group">
                                                <label>Vend Fee Paid</label>
                                                <Text field='otherUnit.vendFee' placeholder='Vendor Fee Paid' className="form-control" />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                              <div className="form-group">
                                                <label>Excise Duty Paid</label>
                                                <Text field='otherUnit.exciseDuty' placeholder='Excise Duty Paid' className="form-control" />
                                              </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                              <div className="form-group">
                                                <label>Special Fee Paid</label>
                                                <Text field='otherUnit.specialFee' placeholder='Special Fee Paid' className="form-control" />
                                              </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                              <div className="form-group">
                                                <label>Kind of Liscense</label>
                                                <Text field='otherUnit.liscenseType' placeholder='Kind of Liscense' className="form-control" />
                                              </div>
                                            </div>
                                          </div>
                                        </div> : <div className="padding-10">Please select <strong>Disgorging Type</strong> to proceed!</div> }
                                    </div>
                                  </div>
                                  { currTransferType ?
                                    <div>
                                      <div>
                                        <div className="form-label-headings">Disgorging Loss</div>
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>No. of Bottles</label>
                                              <Text field='disgorgingLoss.bottlesQty' placeholder='No. of Bottles' className="form-control" />
                                            </div>
                                          </div>
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>Quantity in Litres</label>
                                              <Text field='disgorgingLoss.quantity' placeholder='Quantity in Litres' className="form-control" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <div className="form-label-headings">Closing Balance of Disgorged Bottles</div>
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>Size in ML</label>
                                              <Text field='closingBalanceDisgorged.sizeInML' placeholder='Size in ML' className="form-control" />
                                            </div>
                                          </div>
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>No. of Bottles</label>
                                              <Text field='closingBalanceDisgorged.bottlesQty' placeholder='No. of Bottles' className="form-control" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div>
                                        <div className="form-label-headings">Closing Balance of Tirage Bottles</div>
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>Size in ML</label>
                                              <Text field='closingBalanceTirage.bottleSize' placeholder='Size in ML' className="form-control" />
                                            </div>
                                          </div>
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>No. of Bottles</label>
                                              <Text field='closingBalanceTirage.bottlesQty' placeholder='No. of Bottles' className="form-control" />
                                            </div>
                                          </div>
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>Loss</label>
                                              <Text field='closingBalanceTirage.loss' placeholder='Loss' className="form-control" />
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
                                    </div> : <div></div> }
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

export default Register7;