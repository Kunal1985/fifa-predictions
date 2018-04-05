import React from 'react';
import { Link } from 'react-router';
import { sideBarList, sizeInML, bottleSize, wineType, } from '../../utils/Constants';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register6 extends Authentication {
    constructor(props) {
        super(props);

        this.goBack = this.goBack.bind(this);
        this.state = {
            transferType: "disgorged"
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
              <div className="register-heading">Tirage/Disgorging</div>
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
                                        <Text field='reg6Date' placeholder='Date' className="form-control" type="date" />
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="form-label-headings">Opening Balance of Tirage Bottles</div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Size in ML</label>
                                          <Select className="form-control" field="reg6TirageSizeInMl" id="reg6TirageSizeInMl" options={sizeInML}/>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Number of Bottles</label>
                                          <Text field='reg6NoofBottles' placeholder='Number of Bottles' className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="form-label-headings">Quantity of Wine Received from Bottling Room </div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Size in ML</label>
                                          <Select className="form-control" field="reg6ReceivedSizeInMl" id="reg6ReceivedSizeInMl" options={sizeInML}/>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Quantity of Bottles</label>
                                          <Text field='reg6QuantityofBottlesBottling' placeholder='Quantity of Bottles' className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="form-label-headings">Total Wine Available</div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Size in ML</label>
                                          <Select className="form-control" field="reg6AvailableSizeInMl" id="reg6AvailableSizeInMl" options={sizeInML}/>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Quantity of Bottles</label>
                                          <Text field='reg6QuantityofBottlesAvailable' placeholder='Quantity of Bottles' className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="form-label-headings">No. of bottles Issued for Disgorging</div>
                                    <div className="row">
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Size in ML</label>
                                          <Select className="form-control" field="reg6DisgorgingIssuedSizeInMl" id="reg6DisgorgingIssuedSizeInMl" options={sizeInML}/>
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Quantity of Bottles</label>
                                          <Text field='reg6quantityofBottlesDisgorging' placeholder='Quantity of Bottles' className="form-control" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <div className="form-label-headings">Quantity of Wine Transferred for Labelling</div>
                                    <div className="form-group">
                                      <div className="row">
                                        <div className="col-lg-4 col-md-4 col-sm-12">
                                          <label>Type</label>
                                          <select className="form-control" value={ this.state.value } onChange={ currObj.handleChange }>
                                            <option value="disgorged" selected>Disgorged</option>
                                            <option value="tranfer">Tranfer to Other Unit</option>
                                          </select>
                                        </div>
                                      </div>
                                      { currObj.state.transferType === "disgorged" ? <div>
                                                                                       <div className="row">
                                                                                         <div className="col-lg-4 col-md-4 col-sm-12">
                                                                                           <div className="form-group">
                                                                                             <label>Bottle Size</label>
                                                                                             <Select className="form-control" field="reg6DisgorgedSizeInMl" id="reg6DisgorgedSizeInMl" options={sizeInML}/>
                                                                                           </div>
                                                                                         </div>
                                                                                         <div className="col-lg-4 col-md-4 col-sm-12">
                                                                                           <div className="form-group">
                                                                                             <label>Number of Bottles</label>
                                                                                             <Text field='reg6NoofBottlesDisgorged' placeholder='Number of Bottles' className="form-control" />
                                                                                           </div>
                                                                                         </div>
                                                                                       </div>
                                                                                     </div> : <div>
                                                                                                <div className="row">
                                                                                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                                                                                    <div className="form-group">
                                                                                                      <label>Name of Party</label>
                                                                                                      <Text field='reg6NameofPartyOther' placeholder='Name of Party' className="form-control" />
                                                                                                    </div>
                                                                                                  </div>
                                                                                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                                                                                    <div className="form-group">
                                                                                                      <label>Address of Party</label>
                                                                                                      <Text field='reg6AddressofPartyOther' placeholder='Address of Party' className="form-control" />
                                                                                                    </div>
                                                                                                  </div>
                                                                                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                                                                                    <div className="form-group">
                                                                                                      <label>T.P/E.P No.</label>
                                                                                                      <Text field='reg6TpepNoOther' placeholder='T.P/E.P  No.' className="form-control" />
                                                                                                    </div>
                                                                                                  </div>
                                                                                                </div>
                                                                                                <div className="row">
                                                                                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                                                                                    <div className="form-group">
                                                                                                      <label>Size in ML</label>
                                                                                                      <Select className="form-control" field="reg6OtherUnitSizeInMl" id="reg6OtherUnitSizeInMl" options={sizeInML}/>
                                                                                                    </div>
                                                                                                  </div>
                                                                                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                                                                                    <div className="form-group">
                                                                                                      <label>Number of Bottles</label>
                                                                                                      <Text field='reg6NoofBottlesTransferOther' placeholder='Number of Bottles' className="form-control" />
                                                                                                    </div>
                                                                                                  </div>
                                                                                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                                                                                    <div className="form-group">
                                                                                                      <label>Vendor Fee Paid</label>
                                                                                                      <Text field='reg6VendorFeePaidOther' placeholder='Vendor Fee Paid' className="form-control" />
                                                                                                    </div>
                                                                                                  </div>
                                                                                                </div>
                                                                                                <div className="row">
                                                                                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                                                                                    <div className="form-group">
                                                                                                      <label>Excise Duty Paid</label>
                                                                                                      <Text field='reg6ExciseeDutyPaidOther' placeholder='Excise Duty Paid' className="form-control" />
                                                                                                    </div>
                                                                                                  </div>
                                                                                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                                                                                    <div className="form-group">
                                                                                                      <label>Special Fee Paid</label>
                                                                                                      <Text field='reg6SpecialFeePaidOther' placeholder='Special Fee Paid' className="form-control" />
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
                                          <Text field='reg7DisgorgingLossNoOfBottles' placeholder='No. of Bottles' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>Quantity in Litres</label>
                                          <Text field='reg7DisgorgingLossQuantity' placeholder='Quantity in Litres' className="form-control" />
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
                                          <Text field='reg7DisgorgingClosingBalanceSize' placeholder='Size in ML' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>No. of Bottles</label>
                                          <Text field='reg7DisgorgingClosingBalanceNoOfBottles' placeholder='No. of Bottles' className="form-control" />
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
                                          <Text field='reg7TirageClosingBalanceSize' placeholder='Size in ML' className="form-control" />
                                        </div>
                                      </div>
                                      <div className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="form-group">
                                          <label>No. of Bottles</label>
                                          <Text field='reg7TirageClosingBalanceNoOfBottles' placeholder='No. of Bottles' className="form-control" />
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

export default Register6;