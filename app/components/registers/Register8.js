import React from 'react';
import { Link } from 'react-router';
import { sideBarList, OpeningBalanceType, labellingWineType, labellingTransType, sizeInML } from '../../utils/Constants';
import { getCurrRecord, upsertRecord, validateForm } from '../../utils/Functions';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register8 extends Authentication {
    constructor(props) {
        super(props);
        this.modelName = "Register8";
        this.goBack = this.goBack.bind(this);
        this.state = {
          transferType: 1
      };
    }

    goBack() {
      let currProps = this.props;
      currProps.history.goBack();
    }

    render() {
      let queryParams = this.props.location.query;
      let thisVar = this;
      getCurrRecord(queryParams, this, thisVar.modelName);
      let currRecord = (this.state && this.state.currRecord) ? this.state.currRecord : null;
      let transferTypeInDB = currRecord ? currRecord.transferType : null;
        return (
            <div className="container">
              <div className="register-heading">Labelling</div>
              <div className="text-right"><a onClick={ this.goBack }>Back</a></div>
              <div className="container">
                <Form 
                  defaultValues = {currRecord}
                  onSubmit={ (values) => {
                      let data = values;
                      if(currRecord)
                        data._id = thisVar.state.currRecord._id;
                      console.log("ValuestoSend", data);
                      upsertRecord(data, thisVar, thisVar.modelName);
                    } 
                  }
                  validate={ (values) => {
                      let currTransferType = values.transferType;
                      if(thisVar.state && thisVar.state.selectedTransferType != currTransferType){
                        thisVar.setState({selectedTransferType: currTransferType});
                        if(currTransferType)
                          thisVar.setState({transferType: parseInt(currTransferType)});
                      }
                      return validateForm(values, thisVar.modelName);
                    } 
                  }>
                  { ({submitForm}) => {
                        let errorMessage = null;
                    
                        return (
                            <div className="row">
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <form onSubmit={ submitForm } id="register7">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Opening Balance</label>
                                        <Select className="form-control" field="openingBalance.sizeInML" id="openingBalance.sizeInML" options={sizeInML}/>
                                        <Text field='openingBalanceSizeInML' type='hidden' className="form-control" />
                                        <Select className="form-control" field='openingBalance.wineType' options={labellingWineType} />
                                        <Text field='openingBalanceWineType' type='hidden' className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Size in ML</label>
                                        <Text field='sizeinML' placeholder='Size in ML' className="form-control" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Number of Bottles</label>
                                        <Text field='numberofBottles' type="number" placeholder='Number of Bottles' className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="form-label-headings">Wine Bottles Received</div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Name of the Unit</label>
                                          <Text field='bottlesReceived.unitName' placeholder='Name of the Unit' className="form-control" />
                                          <Text field='bottlesReceivedUnitName' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>T.P Number</label>
                                          <Text field='bottlesReceived.tpNo' placeholder='T.P Number' className="form-control" />
                                          <Text field='bottlesReceivedTpNo' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Size in ML</label>
                                          <Text field='bottlesReceived.sizeInML' placeholder='Size in ML' className="form-control" />
                                          <Text field='bottlesReceivedSizeInML' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Number of Bottles</label>
                                          <Text field='bottlesReceived.numberofBottles' placeholder='Number of Bottles' className="form-control" />
                                          <Text field='bottlesReceivedNumberOfBottles' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Labelling</label>
                                        <Select field='transferType' className="form-control" value={transferTypeInDB} options={labellingTransType} />
                                      </div>
                                    </div>
                                  </div>
                                  { thisVar.state.transferType == 1 ?
                                  <div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Brand Name</label>
                                          <Text field='labelling.brandName' placeholder='Brand Name' className="form-control" />
                                          <Text field='labellingBrandName' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Strength</label>
                                          <Text field='labelling.strength' placeholder='Strength' className="form-control" />
                                          <Text field='labellingStrength' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Batch No.</label>
                                          <Text field='labelling.batchNo' placeholder='Batch No' className="form-control" />
                                          <Text field='labellingBatchNo' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Mfg. Date</label>
                                          <Text field='labelling.mfgDate' placeholder='Mfg. Date' className="form-control" type="date"/>
                                          <Text field='labellingMfgDate' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Size in ML</label>
                                          <Text field='labelling.sizeinML' placeholder='Size in ML' className="form-control" />
                                          <Text field='labellingSizeinML' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>No. of Bottles</label>
                                          <Text field='labelling.noOfBottles' placeholder='No. of Bottles' className="form-control" />
                                          <Text field='labellingNoOfBottles' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                  </div> : 
                                  <div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Name of Unit</label>
                                          <Text field='transferred.unitName' placeholder='Name of Unit' className="form-control" />
                                          <Text field='transferredUnitName' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>T.P No.</label>
                                          <Text field='transferred.tpNo' placeholder='T.P No.' className="form-control" />
                                          <Text field='transferredTpNo' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Size in ML</label>
                                          <Text field='transferred.sizeinML' placeholder='Size in ML' className="form-control" />
                                          <Text field='transferredSizeinML' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Number of Bottles</label>
                                          <Text field='transferred.noOfBottles' placeholder='Number of Bottles' className="form-control" />
                                          <Text field='transferredNoOfBottles' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Vend Fee</label>
                                          <Text field='transferred.vendFee' placeholder='Vend Fee' className="form-control" />
                                          <Text field='transferredVendFee' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                  </div> }
                                  <div>
                                    <div className="form-label-headings">Sampling</div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Size in Ml</label>
                                          <Text field='sampling.sizeInML' placeholder='Size in ML' className="form-control" />
                                          <Text field='samplingSizeInML' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>No. of Bottles</label>
                                          <Text field='sampling.noOfBottles' placeholder='No. of Bottles' className="form-control" />
                                          <Text field='samplingNoOfBottles' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="form-label-headings">Breakages</div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Size in Ml</label>
                                          <Text field='breakages.sizeInML' placeholder='Size in ML' className="form-control" />
                                          <Text field='breakagesSizeInML' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>No. of Bottles</label>
                                          <Text field='breakages.noOfBottles' placeholder='No. of Bottles' className="form-control" />
                                          <Text field='breakagesNoOfBottles' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="form-label-headings">Closing Balance</div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Size in Ml</label>
                                          <Text field='closingBalance.sizeInML' placeholder='Size in ML' className="form-control" />
                                          <Text field='closingBalanceSizeInML' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>No. of Bottles</label>
                                          <Text field='closingBalance.noOfBottles' placeholder='No. of Bottles' className="form-control" />
                                          <Text field='closingBalanceNoOfBottles' type='hidden' className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label className="text-area-labels">
                                          Remarks:
                                          <Textarea className="form-control" field="remarks" />
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

export default Register8;