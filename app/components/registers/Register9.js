import React from 'react';
import {Link} from 'react-router';
import { sideBarList, sizeInML, TransferType } from '../../utils/Constants';
import { getCurrRecord, upsertRecord, validateForm } from '../../utils/Functions';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register9 extends Authentication {
  constructor(props) {
    super(props);
    this.modelName = "Register9";
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    let currProps = this.props;
    currProps.history.goBack();
  }

  render() {
    let queryParams = this.props.location.query;
    let thisVar = this;
    getCurrRecord(queryParams, this, thisVar.modelName);
  return (
      <div className="container">
      <div className="register-heading">Finished Goods/Dispatch</div>
      <div className="text-right"><a onClick={ this.goBack }>Back</a></div>
          <div className="container">
    <Form
        defaultValues = {thisVar.state? thisVar.state.currRecord ? thisVar.state.currRecord: {} : {}}
        onSubmit={ (values) => {
            let data = values;
            if(thisVar.state && thisVar.state.currRecord)
              data._id = thisVar.state.currRecord._id;
            console.log("ValuestoSend", data);
            upsertRecord(data, thisVar, thisVar.modelName);
          } 
        }
        validate={ (values) => {
            return validateForm(values, thisVar.modelName);
          } 
        }>
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
                                    <Text field='date' placeholder='Date' className="form-control" type="date"/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="form-label-headings">Opening Balance of Wine</div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Brand Name</label>
                                        <Text field='brandName' placeholder='Brand Name' className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Strength</label>
                                        <Text field='strength' placeholder='Strength' className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Batch No.</label>
                                        <Text field='batchNumber' placeholder='Batch No.' className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Size</label>
                                        <select field='reg8SizeMl' className="form-control" field="size" id="size">
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
                                        <Text field='bottleQty' placeholder='Number of Bottles' className="form-control"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                    <label>Quantity of Wine Dispatched from Finished Goods</label>
                                        <select field="dispatchType" id="dispatchType" className="form-control">
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
                                <label>T.P/E.P</label>
                                <Text field='tpEpNumber' placeholder='T.P/E.P' className="form-control" />
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="form-group">
                                <label>Vend/Export Fee</label>
                                <Text field='vendExportFee' placeholder='Vend/Export Fee' className="form-control" />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="form-group">
                                <label>Excise Duty</label>
                                <Text field='exciseDuty' placeholder='Excise Duty' className="form-control" />
                            </div>
                            </div>
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
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="form-group">
                                <label>Chalan Date</label>
                                <Text field='chalanDate' placeholder='Chalan Date' className="form-control" type="date"/>
                            </div>
                            </div>
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
                                        <Text field='closingWineBalance.brandName' placeholder='Brand Name' className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Strength</label>
                                        <Text field='closingWineBalance.strength' placeholder='Strength' className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Batch No.</label>
                                        <Text field='closingWineBalance.batchNumber' placeholder='Batch No.' className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Size</label>
                                        <select field='reg8ClosingSizeMl' className="form-control" field="closingWineBalance.size" id="closingWineBalance.size">
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
                                        <Text field='closingWineBalance.bottleQty' placeholder='Number of Bottles' className="form-control"/>
                                    </div>
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
                                    <button className="btn btn-primary" onClick={this.goBack}>
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
      </div>
  );
  }
}

export default Register9;