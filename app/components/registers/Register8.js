import React from 'react';
import {Link} from 'react-router';
import { sideBarList, sizeInML, TransferType } from '../../utils/Constants';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register8 extends Authentication {
  constructor(props) {
    super(props);
  }

  onClear() {
    document.getElementById("register8").reset();
  }

  render() {
    return (
      <div className="container">
      <div className="register-heading">Finished Goods/Dispatch</div>
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
                      <form onSubmit={submitForm} id="register8">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                    <label>Date</label>
                                    <Text field='reg8Date' placeholder='Date' className="form-control" type="date"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="form-label-headings">Opening Balance of Wine</div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Brand Name</label>
                                        <Text field='reg8BrandName' placeholder='Brand Name' className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Strength</label>
                                        <Text field='reg8Strength' placeholder='Strength' className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Batch No.</label>
                                        <Text field='reg8BatchNo' placeholder='Batch No.' className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Size</label>
                                        <select field='reg8SizeMl' className="form-control">
                                        {sizeInML.map(sizeInMLVal => {
                                          return <option key={sizeInMLVal.id} value={sizeInMLVal.id}>
                                            {sizeInMLVal.name}
                                          </option>;
                                        })}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Number of Bottles</label>
                                        <Text field='reg8NumberOfBottles' placeholder='Number of Bottles' className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                    <label>Quantity of Wine Dispatched from Finished Goods</label>
                                        <select field='reg8dispatchType' className="form-control">
                                            {TransferType.map(TransferTypeVal => {
                                            return <option key={TransferTypeVal.id} value={TransferTypeVal.id}>
                                                {TransferTypeVal.name}
                                            </option>;
                                            })}
                                        </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                    <label>Party Name</label>
                                    <Text field='reg8PartyName' placeholder='Party Name' className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                    <label>Kind of Liscense Held</label>
                                    <Text field='reg5BulkPurchasePartyAdd' placeholder='Address of party' className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="form-group">
                                <label>Size in ML</label>
                                <Text field='reg8SizeinML' placeholder='Size in ML' className="form-control" />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="form-group">
                                <label>Number of Bottles</label>
                                <Text field='reg8NumberofBottles' placeholder='Number of Bottles' className="form-control" />
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="form-group">
                                <label>T.P/E.P</label>
                                <Text field='reg8TpEp' placeholder='T.P/E.P' className="form-control" />
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="form-group">
                                <label>Vend/Export Fee</label>
                                <Text field='reg8VendExportFee' placeholder='Vend/Export Fee' className="form-control" />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="form-group">
                                <label>Excise Duty</label>
                                <Text field='reg8ExciseDuty' placeholder='Excise Duty' className="form-control" />
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="form-group">
                                <label>Total Amount</label>
                                <Text field='reg8TotalAmount' placeholder='Total Amount' className="form-control" />
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="form-group">
                                <label>Chalan Number</label>
                                <Text field='reg8ChalanNumber' placeholder='Chalan Number' className="form-control" />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="form-group">
                                <label>Chalan Date</label>
                                <Text field='reg8ChalanDate' placeholder='Chalan Date' className="form-control" type="date"/>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                    <label>Mfg. Cost</label>
                                    <Text field='reg8MfgCost' placeholder='Mfg. Cost' className="form-control" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                    <label>Approved MRP</label>
                                    <Text field='reg8ApprovedMrp' placeholder='Approved MRP' className="form-control" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="form-label-headings">Closing Balance of Wine</div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Brand Name</label>
                                        <Text field='reg8ClosingBrandName' placeholder='Brand Name' className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Strength</label>
                                        <Text field='reg8ClosingStrength' placeholder='Strength' className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Batch No.</label>
                                        <Text field='reg8ClosingBatchNo' placeholder='Batch No.' className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Size</label>
                                        <select field='reg8ClosingSizeMl' className="form-control">
                                        {sizeInML.map(sizeInMLVal => {
                                          return <option key={sizeInMLVal.id} value={sizeInMLVal.id}>
                                            {sizeInMLVal.name}
                                          </option>;
                                        })}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Number of Bottles</label>
                                        <Text field='reg8ClosingNumberOfBottles' placeholder='Number of Bottles' className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                    <label className="text-area-labels">
                                    Remarks:
                                    <textarea className="form-control"/>
                                    </label>
                                </div> 
                            </div>
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

export default Register8;