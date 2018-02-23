import React from 'react';
import {Link} from 'react-router';
import { sideBarList } from '../utils/Constants';
import Authentication from './Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register4 extends Authentication {
  constructor(props) {
    super(props);

    this.state = {bulkOpeningValue: "bulkWinePurchased", bulkClosingValue: "bulkWineSale"};

    this.handleOpeningChange = this.handleOpeningChange.bind(this);
    this.handleClosingChange = this.handleClosingChange.bind(this);
    
  }

  handleOpeningChange(e) {
    this.setState({bulkOpeningValue:e.target.value });
  }

  handleClosingChange(e) {
    this.setState({bulkClosingValue:e.target.value });
  }

  onClear() {
    document.getElementById("register4").reset();
  }

  render() {
    let currObj = this;
    return (
        <div className="container">
        <div className="register-heading">Bulk Transfer</div>
            <div className="container">
      <Form
          onSubmit={(values) => {
            console.log('s');
          }}
          validate={(values) => {
            return {
                
            }
          }}

          handleChange
      >
          {({submitForm}) => {
              let errorMessage = null;
              
              return (
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <form onSubmit={submitForm} id="register4">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Date</label>
                                        <Text field='date' placeholder='Date' className="form-control" type="date"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Tank Number</label>
                                        <select className="form-control"></select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Opening Balance</label>
                                        <Text field='openingBalanceBulk' placeholder='Opening Balance' className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="form-label-headings">Bulk Wine transactions</div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <label>Type</label>
                                        <select className="form-control" value={this.state.bulkOpeningValue} onChange={currObj.handleOpeningChange}>
                                            <option value="bulkWinePurchased">Bulk Wine Purchased</option>
                                            <option value="receivedForReprorocessing">Received for Reprocessing</option>
                                            <option value="tranferFromOtherTank">Tranferred from Other Tank</option>
                                        </select>
                                    </div>
                                </div>
                                { currObj.state.bulkOpeningValue === "bulkWinePurchased" ?
                                    <div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Party Name</label>
                                                    <Text field='reg5BulkPurchasePartyName' placeholder='Party Name' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Address of party</label>
                                                    <Text field='reg5BulkPurchasePartyAdd' placeholder='Address of party' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>T.P/E.P No.</label>
                                                    <Text field='reg5BulkPurchaseTpEpNo' placeholder='T.P/E.P No.' className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Quantity in Litres</label>
                                                    <Text field='reg5BulkPurchaseLitres' placeholder='Quantity in Litres' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Import Fee Paid</label>
                                                    <Text field='reg5BulkPurchaseImportFee' placeholder='Import Fee Paid' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Vend Fee Paid</label>
                                                    <Text field='reg5BulkPurchaseVendFee' placeholder='Vend Fee Paid' className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Excise Duty Paid</label>
                                                    <Text field='reg5BulkPurchaseExciseDuty' placeholder='Excise Duty Paid' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Special Fee Paid</label>
                                                    <Text field='regBulkPurchaseSpecialFee' placeholder='Special Fee Paid' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Losses</label>
                                                    <Text field='reg5BulkPurchaseLosses' placeholder='Losses' className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                : <div></div> }
                                { currObj.state.bulkOpeningValue === "receivedForReprorocessing" ?
                                    <div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Party Name</label>
                                                    <Text field='reg5BulkReprorocessingPartyName' placeholder='Party Name' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Address of party</label>
                                                    <Text field='reg5BulkReprorocessingPartyAdd' placeholder='Address of party' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>T.P/E.P No.</label>
                                                    <Text field='reg5BulkReprorocessingTpEpNo' placeholder='T.P/E.P No.' className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Quantity in Litres</label>
                                                    <Text field='reg5BulkReprorocessingLitres' placeholder='Quantity in Litres' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Import Fee Paid</label>
                                                    <Text field='reg5BulkReprorocessingImportFee' placeholder='Import Fee Paid' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Vend Fee Paid</label>
                                                    <Text field='reg5BulkReprorocessingVendFee' placeholder='Vend Fee Paid' className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Excise Duty Paid</label>
                                                    <Text field='reg5BulkReprorocessingExciseDuty' placeholder='Excise Duty Paid' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Special Fee Paid</label>
                                                    <Text field='regBulkReprorocessingSpecialFee' placeholder='Special Fee Paid' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Losses</label>
                                                    <Text field='reg5BulkReprorocessingLosses' placeholder='Losses' className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                : <div></div> }
                                { currObj.state.bulkOpeningValue === "tranferFromOtherTank" ?
                                    <div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Tank Number</label>
                                                    <select className="form-control"></select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Opening Balance</label>
                                                    <Text field='reg5TransferFromTankQty>OpeningBalance' placeholder='>Opening Balance' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Quantity Issued</label>
                                                    <Text field='reg5TransferFromTankQtyIssued' placeholder='Quantity Issued' className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Quantity Received</label>
                                                    <Text field='reg5TransferFromTankQtyReceived' placeholder='Quantity Received' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Losses</label>
                                                    <Text field='reg5TransferFromTankLosses' placeholder='Losses' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Closing Balance</label>
                                                    <Text field='reg5TransferFromTankClosingBalance' placeholder='Closing Balance' className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                : <div></div> }
                            </div>
                            <div className="form-group">
                                <label>Closing Balance</label>
                                <Text field='closingBalanceBulk' placeholder='Closing Balance' className="form-control"/>
                            </div>
                            <div>
                                <div className="form-label-headings">Bulk Wine transactions</div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <label>Type</label>
                                        <select className="form-control" value={this.state.bulkClosingValue} onChange={currObj.handleClosingChange}>
                                            <option value="bulkWineSale">Bulk Wine Sale</option>
                                            <option value="tranferOtherUnit">Tranferred to Other Unit</option>
                                            <option value="tranferOtherTank">Tranferred to Other Tank</option>
                                        </select>
                                    </div>
                                </div>
                                { currObj.state.bulkClosingValue === "bulkWineSale" ?
                                    <div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Party Name</label>
                                                    <Text field='reg5BulkSalePartyName' placeholder='Party Name' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Kind of Liscence Held</label>
                                                    <select className="form-control"></select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>T.P/E.P No.</label>
                                                    <Text field='reg5BulkSaleTpEpNo' placeholder='T.P/E.P No.' className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Quantity in Litres</label>
                                                    <Text field='reg5BulkSaleLitres' placeholder='Quantity in Litres' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Export Fee Paid</label>
                                                    <Text field='reg5BulkSaleExportFee' placeholder='Export Fee Paid' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Vend Fee Paid</label>
                                                    <Text field='reg5BulkSaleVendFee' placeholder='Vend Fee Paid' className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Excise Duty Paid</label>
                                                    <Text field='reg5BulkSaleExciseDuty' placeholder='Excise Duty Paid' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Special Fee Paid</label>
                                                    <Text field='reg5BulkSaleSpecialFee' placeholder='Special Fee Paid' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Losses</label>
                                                    <Text field='reg5BulkSaleLosses' placeholder='Losses' className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                : <div></div> }
                                { currObj.state.bulkClosingValue === "tranferOtherUnit" ?
                                    <div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Party Name</label>
                                                    <Text field='reg5TransferUnitPartyName' placeholder='Party Name' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Kind of Liscence Held</label>
                                                    <select className="form-control"></select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>T.P/E.P No.</label>
                                                    <Text field='reg5TransferUnitTpEpNo' placeholder='T.P/E.P No.' className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Quantity in Litres</label>
                                                    <Text field='reg5TransferUnitLitres' placeholder='Quantity in Litres' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Export Fee Paid</label>
                                                    <Text field='reg5TransferUnitExportFee' placeholder='Export Fee Paid' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Vend Fee Paid</label>
                                                    <Text field='reg5TransferUnitVendFee' placeholder='Vend Fee Paid' className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Excise Duty Paid</label>
                                                    <Text field='reg5TransferUnitExciseDuty' placeholder='Excise Duty Paid' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Special Fee Paid</label>
                                                    <Text field='reg5TransferUnitSpecialFee' placeholder='Special Fee Paid' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Losses</label>
                                                    <Text field='reg5TransferUnitLosses' placeholder='Losses' className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                : <div></div> }
                                { currObj.state.bulkClosingValue === "tranferOtherTank" ?
                                    <div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Tank Number</label>
                                                    <select className="form-control"></select>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Quantity Tranferred</label>
                                                    <Text field='reg5TransferTankQtyTransferred' placeholder='Quantity Tranferred' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Quantity Received</label>
                                                    <Text field='reg5TransferTankQtyReceived' placeholder='Quantity Received' className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Losses</label>
                                                    <Text field='reg5TransferTankLosses' placeholder='Losses' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Closing Balance</label>
                                                    <Text field='reg5TransferTankClosingBalance' placeholder='Closing Balance' className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                : <div></div> }
                            </div>
                            <div className="form-group">
                              <label>
                                Remarks:
                                <textarea className="form-control"/>
                              </label>
                            </div>
                            <div className="row">
                                <div className="button-section text-center">
                                    <div className="text-center">
                                        <button className="btn btn-primary" onClick={this.onClear}>
                                            Clear
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
        </div>
    );
  }
}

export default Register4;