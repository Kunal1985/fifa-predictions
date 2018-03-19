import React from 'react';
import { Link } from 'react-router';
import { sideBarList, OpeningBalanceType, LabellingTransType } from '../../utils/Constants';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register7 extends Authentication {
    constructor(props) {
        super(props);

        this.state = {
          LabellingTransType: 1
      };

      this.handleLabellingTrans = this.handleLabellingTrans.bind(this);
    }

    handleLabellingTrans(e) {
        this.setState({
          LabellingTransType: e.target.value
        });
    }

    onClear() {
        document.getElementById("register7").reset();
    }

    render() {
        let currObj = this;
        return (
            <div className="container">
              <div className="register-heading">Labelling</div>
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
                                <form onSubmit={ submitForm } id="register7">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Opening Balace</label>
                                        <select field='reg7OpeningBalance' className="form-control">
                                            {OpeningBalanceType.map(OpeningBalanceTypeVal => {
                                            return <option key={OpeningBalanceType.id} value={OpeningBalanceTypeVal.id}>
                                                {OpeningBalanceTypeVal.name}
                                            </option>;
                                            })}
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Size in ML</label>
                                        <Text field='reg7OpeningBalanceSizeinML' placeholder='Size in ML' className="form-control" />
                                      </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Number of Bottles</label>
                                        <Text field='reg7OpeningBalanceNumberofBottles' placeholder='Number of Bottles' className="form-control" />
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="form-label-headings">Wine Bottles Received</div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Name of the Unit</label>
                                          <Text field='reg7BottlesReceivedUnitName' placeholder='Name of the Unit' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>T.P Number</label>
                                          <Text field='reg7BottlesReceivedTpNo' placeholder='T.P Number' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Size in ML</label>
                                          <Text field='reg7BottlesReceivedSize' placeholder='Size in ML' className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Number of Bottles</label>
                                          <Text field='reg7BottlesReceivedNumberofBottles' placeholder='Number of Bottles' className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label>Labelling</label>
                                        <select field='reg7LabellingTransType' className="form-control"  value={ this.state.LabellingTransType } onChange={ currObj.handleLabellingTrans }>
                                            {LabellingTransType.map(LabellingTransTypeVal => {
                                            return <option key={LabellingTransTypeVal.id} value={LabellingTransTypeVal.id}>
                                                {LabellingTransTypeVal.name}
                                            </option>;
                                            })}
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  { currObj.state.LabellingTransType == 1 ?
                                  <div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Brand Name</label>
                                          <Text field='reg7LabellingBrandName' placeholder='Brand Name' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Strength</label>
                                          <Text field='reg7LabellingStrength' placeholder='Strength' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Batch No.</label>
                                          <Text field='reg7LabellingBatchNo' placeholder='Batch No' className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Mfg. Date</label>
                                          <Text field='reg7LabellingMfgDate' placeholder='Mfg. Date' className="form-control" type="date"/>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Size in ML</label>
                                          <Text field='reg7LabellingSizeinML' placeholder='Size in ML' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>No. of Bottles</label>
                                          <Text field='reg7LabellingNoOfBottles' placeholder='No. of Bottles' className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                  </div> : 
                                  <div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Name of Unit</label>
                                          <Text field='reg7TransferredUnitName' placeholder='Name of Unit' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>T.P No.</label>
                                          <Text field='reg7TransferredTpNo' placeholder='T.P No.' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Size in ML</label>
                                          <Text field='reg7TransferredSizeinMl' placeholder='Size in ML' className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Number of Bottles</label>
                                          <Text field='reg7TransferredNoOfBottles' placeholder='Number of Bottles' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Vend Fee</label>
                                          <Text field='reg7TransferredVendFee' placeholder='Vend Fee' className="form-control" />
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
                                          <Text field='reg7SamlingSize' placeholder='Size in Ml' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>No. of Bottles</label>
                                          <Text field='reg7SamlingNoOfBottles' placeholder='No. of Bottles' className="form-control" />
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
                                          <Text field='reg7BreakagesSize' placeholder='Size in Ml' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>No. of Bottles</label>
                                          <Text field='reg7BreakagesNoOfBottles' placeholder='No. of Bottles' className="form-control" />
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
                                          <Text field='reg7ClosingBalanceSize' placeholder='Size in Ml' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>No. of Bottles</label>
                                          <Text field='reg7ClosingBalanceNoOfBottles' placeholder='No. of Bottles' className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                      <div className="form-group">
                                        <label className="text-area-labels">
                                          Remarks:
                                          <textarea className="form-control" />
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="button-section text-center">
                                      <div className="text-center">
                                        <button className="btn btn-primary" onClick={ this.onClear }>
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
                    } }
                </Form>
              </div>
            </div>
            );
    }
}

export default Register7;