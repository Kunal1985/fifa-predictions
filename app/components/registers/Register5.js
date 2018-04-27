import React from 'react';
import { Link } from 'react-router';
import { sideBarList, purchaseType, saleType, licenseType, bulkTransferOtherUnitType } from '../../utils/Constants';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register5 extends Authentication {
    constructor(props) {
        super(props);

        this.goBack = this.goBack.bind(this);
        
        this.state = {
            bulkOpeningValue: 1,
            bulkClosingValue: 1,
            bulkOtherUnitValue: 1
        };

        this.handleOpeningChange = this.handleOpeningChange.bind(this);
        this.handleClosingChange = this.handleClosingChange.bind(this);
        this.handleOtherUnitChange = this.handleOtherUnitChange.bind(this);

    }

    handleOpeningChange(e) {
        this.setState({
            bulkOpeningValue: e.target.value
        });
    }

    handleClosingChange(e) {
        this.setState({
            bulkClosingValue: e.target.value
        });
    }

    handleOtherUnitChange(e) {
      this.setState({
        bulkOtherUnitValue: e.target.value
      });
  }

    goBack() {
      let currProps = this.props;
      currProps.history.goBack();
    }

    render() {
        let currObj = this;
        return (
            <div className="container">
              <div className="register-heading">Bulk Transfer</div>
              <div className="text-right"><a onClick={ this.goBack }>Back</a></div>
              <div className="container">
                <Form onSubmit={ (values) => {
                                     console.log('s');
                                 } } validate={ (values) => {
                                                                                                                                                            return {
                                                                                                                                                        
                                                                                                                                                            }
                                                                                                                                                        } } handleChange>
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
                                  <div>
                                    <div className="form-label-headings">Bulk Wine transactions</div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <label>Type</label>
                                        <select className="form-control" field="trasnferType" id="trasnferType" value={ this.state.bulkOpeningValue } onChange={ currObj.handleOpeningChange }>
                                          { purchaseType.map(purchaseTypeVal => {
                                                return <option key={ purchaseTypeVal.id } value={ purchaseTypeVal.id }>
                                                         { purchaseTypeVal.name }
                                                       </option>;
                                            }) }
                                        </select>
                                      </div>
                                    </div>
                                    { currObj.state.bulkOpeningValue == 1 ?
                                      <div>
                                      <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                          <div className="form-group">
                                            <label>Tank Number</label>
                                            <select className="form-control" field="ownUnit.tankNumber" id="ownUnit.tankNumber"></select>
                                          </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                          <div className="form-group">
                                            <label>Opening Balance</label>
                                            <Text field='ownUnit.openingBalance' placeholder='Opening Balance' className="form-control" />
                                          </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                          <div className="form-group">
                                            <label>Wine Variety</label>
                                            <select className="form-control" field="ownUnit.wineVariety" id="ownUnit.wineVariety"></select>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                          <div className="form-group">
                                            <label>Quantity Issued</label>
                                            <Text field='ownUnit.quantityIssued' placeholder='Quantity Issued' className="form-control" />
                                          </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                          <div className="form-group">
                                            <label>Quantity Received</label>
                                            <Text field='ownUnit.quantityReceived' placeholder='Quantity Received' className="form-control" />
                                          </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                          <div className="form-group">
                                            <label>Losses</label>
                                            <Text field='ownUnit.loss' placeholder='Losses' className="form-control" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                      : <div></div> }
                                    { currObj.state.bulkOpeningValue == 2 ?
                                      <div>
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <label>Bulk Transaction Type</label>
                                            <select className="form-control" value={ this.state.bulkOtherUnitValue } onChange={ currObj.handleOtherUnitChange }>
                                              { bulkTransferOtherUnitType.map(purchaseTypeVal => {
                                                    return <option key={ purchaseTypeVal.id } value={ purchaseTypeVal.id }>
                                                            { purchaseTypeVal.name }
                                                          </option>;
                                                }) }
                                            </select>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>Party Name</label>
                                              <Text field='otherUnit.partyName' placeholder='Party Name' className="form-control" />
                                            </div>
                                          </div>
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>Address of party</label>
                                              <Text field='otherUnit.partyAddress' placeholder='Address of party' className="form-control" />
                                            </div>
                                          </div>
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            { currObj.state.bulkOtherUnitValue == 1 || currObj.state.bulkOtherUnitValue == 2 || currObj.state.bulkOtherUnitValue == 4 || currObj.state.bulkOtherUnitValue == 5 ?
                                              <div className="form-group"><label>T.P No.</label>
                                              <Text field='otherUnit.tpepipNumber' placeholder='T.P No.' className="form-control" />
                                            </div> : <div></div> }
                                            { currObj.state.bulkOtherUnitValue == 6 ?
                                            <div className="form-group"><label>E.P No.</label>
                                              <Text field='otherUnit.tpepipNumber' placeholder='E.P No.' className="form-control" />
                                            </div> : <div></div>
                                          }
                                          { currObj.state.bulkOtherUnitValue == 3 ?
                                            <div className="form-group"><label>I.P No.</label>
                                              <Text field='otherUnit.tpepipNumber' placeholder='I.P No.' className="form-control" />
                                            </div> : <div></div>
                                          }
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>Kind of Liscense</label>
                                              <Text field='otherUnit.liscenseType' placeholder='Kind of Liscense' className="form-control" />
                                            </div>
                                          </div>
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>Wine Variety</label>
                                              <select className="form-control" field="otherUnit.wineVariety" id="otherUnit.wineVariety"></select>
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
                                          { currObj.state.bulkOtherUnitValue == 3 ?
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>Import Fee Paid</label>
                                              <Text field='otherUnit.importExportFeePaid' placeholder='Import Fee Paid' className="form-control" />
                                            </div></div> : <div></div> }
                                            { currObj.state.bulkOtherUnitValue == 6 ?
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>Export Fee Paid</label>
                                              <Text field='otherUnit.importExportFeePaid' placeholder='Export Fee Paid' className="form-control" />
                                            </div> </div>: <div></div> }
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>Vend Fee Paid</label>
                                              <Text field='otherUnit.vendFeePaid' placeholder='Vend Fee Paid' className="form-control" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>Excise Duty Paid</label>
                                              <Text field='otherUnit.exciseDutyPaid' placeholder='Excise Duty Paid' className="form-control" />
                                            </div>
                                          </div>
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>Special Fee Paid</label>
                                              <Text field='otherUnit.specialFeePaid' placeholder='Special Fee Paid' className="form-control" />
                                            </div>
                                          </div>
                                          <div className="col-lg-4 col-md-4 col-sm-12">
                                            <div className="form-group">
                                              <label>Losses</label>
                                              <Text field='otherUnit.losses' placeholder='Losses' className="form-control" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      : <div></div> }
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
                                          <textarea field='remarks' className="form-control" />
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
            </div>
            );
    }
}

export default Register5;