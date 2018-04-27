import React from 'react';
import { Link } from 'react-router';
import { sideBarList, sizeInML, bottleSize, wineType, } from '../../utils/Constants';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register7 extends Authentication {
    constructor(props) {
        super(props);

        this.goBack = this.goBack.bind(this);
        this.state = {
            transferType: "ownUnitTransfer"
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            transferType: e.target.value
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
              <div className="register-heading">Disgorging</div>
              <div className="text-right"><a onClick={ this.goBack }>Back</a></div>
              <div className="container">
                <Form onSubmit={ (values) => {
                                     console.log(values);
                                 } } validate={ (values) => {
                                                                                                                                                            return {
                                                                                                                                                        
                                                                                                                                                            }
                                                                                                                                                        } } handleChange>
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
                                          <select className="form-control" field="disgorgingType" id="disgorgingType" value={ this.state.value } onChange={ currObj.handleChange }>
                                            <option value="ownUnitTransfer" selected>Transfer to Own Unit</option>
                                            <option value="otherUnitTransfer">Tranfer to Other Unit</option>
                                          </select>
                                        </div>
                                      </div>
                                      { currObj.state.transferType === "ownUnitTransfer" ? <div>
                                                                                       <div className="row">
                                                                                         <div className="col-lg-4 col-md-4 col-sm-12">
                                                                                           <div className="form-group">
                                                                                             <label>Bottle Size</label>
                                                                                             <Select className="form-control" field="ownUnit.sizeInML" id="ownUnit.sizeInML" options={sizeInML}/>
                                                                                           </div>
                                                                                         </div>
                                                                                         <div className="col-lg-4 col-md-4 col-sm-12">
                                                                                           <div className="form-group">
                                                                                             <label>Number of Bottles</label>
                                                                                             <Text field='ownUnit.bottlesQty' placeholder='Number of Bottles' className="form-control" />
                                                                                           </div>
                                                                                         </div>
                                                                                       </div>
                                                                                     </div> : <div>
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
                                                                                                      <Select className="form-control" field="otherUnit.size" id="otherUnit.size" options={sizeInML}/>
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
                                                                                              </div> }
                                    </div>
                                  </div>
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
            </div>
            );
    }
}

export default Register7;