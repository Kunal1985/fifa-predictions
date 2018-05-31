import React from 'react';
import { Link, browserHistory } from 'react-router';
import { purchaseType, saleType, licenseType, bulkTransferOtherUnitType, tankNumbers } from '../../utils/Constants';
import { getCurrRecord, upsertRecord, validateForm, getRecordsByQuery } from '../../utils/Functions';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register5 extends Authentication {
    constructor(props) {
        super(props);
        this.modelName = "Register5";
        this.viewName = `${this.modelName}Form`;
        this.goBack = this.goBack.bind(this);
        this.updateValuesFromDB = this.updateValuesFromDB.bind(this);
    }

    goBack() {
        let currProps = this.props;
        browserHistory.goBack();
    }

    componentDidMount() {
        console.log(this.viewName, "componentDidMount");
        getRecordsByQuery(this, "TankMaster");
        getRecordsByQuery(this, "WineTypeMaster");
        let queryParams = this.props.location.state;
        getCurrRecord(queryParams, this, this.modelName);
    }

    componentDidUpdate() {
        console.log(this.viewName, "componentDidUpdate");
        let currState = this.state;
        let currRecord = currState ? currState.currRecord : null;
        let transferTypeInDB = currRecord ? currRecord.transferType : null;
        let bulkTransactionTypeInDB = (currRecord && currRecord.otherUnit) ? currRecord.otherUnit.bulkTransactionType : null;
        this.updateValuesFromDB(transferTypeInDB, bulkTransactionTypeInDB);
    }

    updateValuesFromDB(transferTypeInDB, bulkTransactionTypeInDB) {
        let currState = this.state;
        transferTypeInDB = parseInt(transferTypeInDB);
        bulkTransactionTypeInDB = parseInt(bulkTransactionTypeInDB);
        if (transferTypeInDB && !currState.bulkOpeningValue)
            this.setState({
                bulkOpeningValue: transferTypeInDB
            });
        if (bulkTransactionTypeInDB && !currState.bulkOtherUnitValue)
            this.setState({
                bulkOtherUnitValue: bulkTransactionTypeInDB
            });
    }

    render() {
        let thisVar = this;
        let currState = thisVar.state;
        let tankList = (currState && currState["tankmaster"]) ? currState["tankmaster"] : [];
        let currRecord = currState ? currState.currRecord : null;
        let transferTypeInDB = currRecord ? currRecord.transferType : null;
        let bulkTransactionTypeInDB = (currRecord && currRecord.otherUnit) ? currRecord.otherUnit.bulkTransactionType : null;
        let currBulkOpeningValue = currState ? currState.bulkOpeningValue : null;
        let wineVarietyList = (currState && currState["winetypemaster"]) ? currState["winetypemaster"] : [];
        return (
            <div className="container">
              <div className="register-heading">Bulk Transfer</div>
              <div className="text-right"><a onClick={ thisVar.goBack } type="button">Back</a></div>
              <div className="container">
                <Form defaultValues={ currRecord } onSubmit={ (values) => {
                      let data = values;
                      if (currState && currState.currRecord)
                          data._id = currState.currRecord._id;
                      upsertRecord(data, thisVar, thisVar.modelName);
                  } } validate={ (values) => {
                      let currTransferType = values.transferType;
                      if (currState && currState.selectedTransferType != currTransferType) {
                          thisVar.setState({
                              selectedTransferType: currTransferType
                          });
                          if (currTransferType)
                              thisVar.setState({
                                  bulkOpeningValue: parseInt(currTransferType)
                              });
                      }
                      let currBulkTransactionType = values.otherUnit ? values.otherUnit.bulkTransactionType : null;
                      if (currState && currState.selectedBulkTransactionType != currBulkTransactionType) {
                          thisVar.setState({
                              selectedBulkTransactionType: currBulkTransactionType
                          });
                          if (currBulkTransactionType)
                              thisVar.setState({
                                  bulkOtherUnitValue: parseInt(currBulkTransactionType)
                              });
                      }
                      return validateForm(values, thisVar.modelName);
                  } }>
                  { ({submitForm}) => {
                        let errorMessage = null;
                        return (
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <form onSubmit={ submitForm } id="register4">
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
                                        <Select className="form-control" field="tankNumber" id="tankNumber" options={ tankList } />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Opening Balance</label>
                                        <Text field='openingBalance' placeholder='Opening Balance' className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="form-label-headings">Bulk Wine transactions</div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <label>Type</label>
                                        <Select className="form-control" field="transferType" id="transferType" value={ transferTypeInDB } options={ purchaseType } />
                                      </div>
                                    </div>
                                    { currBulkOpeningValue == 1 ?
                                      <div>
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>Tank Number</label>
                                              <Select className="form-control" field="ownUnit.tankNumber" id="ownUnit.tankNumber" options={ tankList } />
                                              <Text field='ownUnitTankNumber' type='hidden' className="form-control" />
                                            </div>
                                          </div>
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>Opening Balance</label>
                                              <Text field='ownUnit.openingBalance' placeholder='Opening Balance' className="form-control" />
                                              <Text field='ownUnitOpeningBalance' type='hidden' className="form-control" />
                                            </div>
                                          </div>
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>Wine Variety</label>
                                              <Select className="form-control" field="ownUnit.wineVariety" id="ownUnit.wineVariety" options={ wineVarietyList } />
                                              <Text field='ownUnitWineVariety' type='hidden' className="form-control" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>Quantity Issued</label>
                                              <Text field='ownUnit.quantityIssued' placeholder='Quantity Issued' className="form-control" />
                                              <Text field='ownUnitQuantityIssued' type='hidden' className="form-control" />
                                            </div>
                                          </div>
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>Quantity Received</label>
                                              <Text field='ownUnit.quantityReceived' placeholder='Quantity Received' className="form-control" />
                                              <Text field='ownUnitQuantityReceived' type='hidden' className="form-control" />
                                            </div>
                                          </div>
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>Losses</label>
                                              <Text field='ownUnit.loss' placeholder='Losses' className="form-control" />
                                              <Text field='ownUnitLoss' type='hidden' className="form-control" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      : currBulkOpeningValue == 2 ?
                                      <div>
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <label>Bulk Transaction Type</label>
                                            <Select className="form-control" field="otherUnit.bulkTransactionType" value={ bulkTransactionTypeInDB } options={ bulkTransferOtherUnitType } />
                                            <Text field='otherUnitBulkTransactionType' type='hidden' className="form-control" />
                                          </div>
                                        </div>
                                        { currState.bulkOtherUnitValue ?
                                          <div>
                                            <div className="row">
                                              <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                  <label>Party Name</label>
                                                  <Text field='otherUnit.partyName' placeholder='Party Name' className="form-control" />
                                                  <Text field='otherUnitPartyName' type='hidden' className="form-control" />
                                                </div>
                                              </div>
                                              <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                  <label>Address of party</label>
                                                  <Text field='otherUnit.partyAddress' placeholder='Address of party' className="form-control" />
                                                  <Text field='otherUnitPartyAddress' type='hidden' className="form-control" />
                                                </div>
                                              </div>
                                              <div className="col-lg-4 col-md-4 col-sm-12">
                                                { currState.bulkOtherUnitValue == 1 || currState.bulkOtherUnitValue == 2 || currState.bulkOtherUnitValue == 4 || currState.bulkOtherUnitValue == 5 ?
                                                  <div className="form-group">
                                                    <label>T.P No.</label>
                                                    <Text field='otherUnit.tpepipNumber' placeholder='T.P No.' className="form-control" />
                                                  </div> : <div></div> }
                                                { currState.bulkOtherUnitValue == 6 ?
                                                  <div className="form-group">
                                                    <label>E.P No.</label>
                                                    <Text field='otherUnit.tpepipNumber' placeholder='E.P No.' className="form-control" />
                                                  </div> : <div></div> }
                                                { currState.bulkOtherUnitValue == 3 ?
                                                  <div className="form-group">
                                                    <label>I.P No.</label>
                                                    <Text field='otherUnit.tpepipNumber' placeholder='I.P No.' className="form-control" />
                                                  </div> : <div></div> }
                                                <Text field='otherUnitTpepipNumber' type='hidden' className="form-control" />
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                  <label>Kind of Liscense</label>
                                                  <Text field='otherUnit.liscenseType' placeholder='Kind of Liscense' className="form-control" />
                                                  <Text field='otherUnitLiscenseType' type='hidden' className="form-control" />
                                                </div>
                                              </div>
                                              <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                  <label>Wine Variety</label>
                                                  <Select className="form-control" field="otherUnit.wineVariety" id="otherUnit.wineVariety" options={ wineVarietyList } />
                                                  <Text field='otherUnitWineVariety' type='hidden' className="form-control" />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                  <label>Quantity in Litres</label>
                                                  <Text field='qtyInLitres' placeholder='Quantity in Litres' className="form-control" />
                                                </div>
                                              </div>
                                              { currState.bulkOtherUnitValue == 3 ?
                                                <div className="col-lg-4 col-md-4 col-sm-12">
                                                  <div className="form-group">
                                                    <label>Import Fee Paid</label>
                                                    <Text field='otherUnit.importExportFeePaid' placeholder='Import Fee Paid' className="form-control" />
                                                    <Text field='otherUnitImportExportFeePaid' type='hidden' className="form-control" />
                                                  </div>
                                                </div> : <div></div> }
                                              { currState.bulkOtherUnitValue == 6 ?
                                                <div className="col-lg-4 col-md-4 col-sm-12">
                                                  <div className="form-group">
                                                    <label>Export Fee Paid</label>
                                                    <Text field='otherUnit.importExportFeePaid' placeholder='Export Fee Paid' className="form-control" />
                                                    <Text field='otherUnitImportExportFeePaid' type='hidden' className="form-control" />
                                                  </div>
                                                </div> : <div></div> }
                                              <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                  <label>Vend Fee Paid</label>
                                                  <Text field='otherUnit.vendFeePaid' placeholder='Vend Fee Paid' className="form-control" />
                                                  <Text field='otherUnitVendFeePaid' type='hidden' className="form-control" />
                                                </div>
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                  <label>Excise Duty Paid</label>
                                                  <Text field='otherUnit.exciseDutyPaid' placeholder='Excise Duty Paid' className="form-control" />
                                                  <Text field='otherUnitExciseDutyPaid' type='hidden' className="form-control" />
                                                </div>
                                              </div>
                                              <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                  <label>Special Fee Paid</label>
                                                  <Text field='otherUnit.specialFeePaid' placeholder='Special Fee Paid' className="form-control" />
                                                  <Text field='otherUnitSpecialFeePaid' type='hidden' className="form-control" />
                                                </div>
                                              </div>
                                              <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                  <label>Losses</label>
                                                  <Text field='otherUnit.losses' placeholder='Losses' className="form-control" />
                                                  <Text field='otherUnitLosses' type='hidden' className="form-control" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          :
                                          <div className="padding-10">Please select <strong>Bulk Transaction Type</strong> to proceed!</div> }
                                      </div>
                                      : <div className="padding-10">Please select the <strong>Bulk Wine transactions</strong> to proceed!</div> }
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Closing Balance</label>
                                        <Text field='closingBalance' placeholder='Closing Balance' className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>
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

export default Register5;