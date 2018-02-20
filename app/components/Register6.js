import React from 'react';
import {Link} from 'react-router';
import { sideBarList } from '../utils/Constants';
import Authentication from './Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Register6 extends Authentication {
  constructor(props) {
    super(props);
    this.state = {transferType: "disgorged"};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({transferType:e.target.value });
  }

  onClear() {
    document.getElementById("register6").reset();
  }

  render() {
    let currObj = this;
    return (
        <div className="container">
        <div className="register-heading">Tirage/Disgorging</div>
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
                        <form onSubmit={submitForm} id="register6">
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                              <div className="form-group">
                                  <label>Date</label>
                                  <Text field='reg6Date' placeholder='Date' className="form-control" type="date"/>
                              </div>
                            </div>
                          </div>
                            <div>
                              <div className="form-label-headings">Opening Balance of Tirage Bottles</div>
                              <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                  <div className="form-group">
                                    <label>Size in ML</label>
                                    <select className="form-control"></select>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                  <div className="form-group">
                                    <label>Number of Bottles</label>
                                    <Text field='reg6NoofBottles' placeholder='Number of Bottles' className="form-control"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="form-label-headings">Quantity of Wine Received from Bottling Room	</div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Size in ML</label>
                                      <select className="form-control"></select>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Quantity of Bottles</label>
                                      <Text field='reg6QuantityofBottlesBottling' placeholder='Quantity of Bottles' className="form-control"/>
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
                                      <select className="form-control"></select>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Quantity of Bottles</label>
                                      <Text field='reg6QuantityofBottlesAvailable' placeholder='Quantity of Bottles' className="form-control"/>
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
                                      <select className="form-control"></select>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Quantity of Bottles</label>
                                      <Text field='reg6quantityofBottlesDisgorging' placeholder='Quantity of Bottles' className="form-control"/>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <label>Tank Number</label>
                                        <select className="form-control"></select>
                                    </div>
                                  </div>
                                </div>
                            
                              <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                  <div className="form-group">
                                      <label>Opening Balance</label>
                                      <Text field='reg6OpeningBalanceDisgorging' placeholder='Opening Balance' className="form-control"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="form-label-headings">Quantity of Wine Bottled</div>
                              <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                  <div className="form-group">
                                    <label>Type of Wine</label>
                                    <select className="form-control"></select>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                  <div className="form-group">
                                    <label>Bottle Size</label>
                                    <select className="form-control"></select>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                  <div className="form-group">
                                    <label>Number of Bottles</label>
                                    <Text field='reg6NoofBottlesBottled' placeholder='Number of Bottles' className="form-control"/>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                  <div className="form-group">
                                    <label>Quantity in Litres</label>
                                    <Text field='reg6QuantityLitresBottled' placeholder='Quantity in Litres' className="form-control"/>
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
                                    <select className="form-control" value={this.state.value} onChange={currObj.handleChange}>
                                      <option value="disgorged" selected>Disgorged</option>
                                      <option value="tranfer">Tranfer to Other Unit</option>
                                    </select>
                                  </div>
                                </div>
                                {currObj.state.transferType === "disgorged" ? <div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Bottle Size</label>
                                      <select className="form-control"></select>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Number of Bottles</label>
                                      <Text field='reg6NoofBottlesDisgorged' placeholder='Number of Bottles' className="form-control"/>
                                    </div> 
                                  </div>
                                </div>
                                </div> : <div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Name of Party</label>
                                      <Text field='reg6NameofPartyOther' placeholder='Name of Party' className="form-control"/>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Address of Party</label>
                                      <Text field='reg6AddressofPartyOther' placeholder='Address of Party' className="form-control"/>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>T.P/E.P  No.</label>
                                      <Text field='reg6TpepNoOther' placeholder='T.P/E.P  No.' className="form-control"/>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Size in ML</label>
                                      <Text field='reg6SizeInMlOther' placeholder='Size in ML' className="form-control"/>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Number of Bottles</label>
                                      <Text field='reg6NoofBottlesTransferOther' placeholder='Number of Bottles' className="form-control"/>
                                    </div> 
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Vendor Fee Paid</label>
                                      <Text field='reg6VendorFeePaidOther' placeholder='Vendor Fee Paid' className="form-control"/>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Excise Duty Paid</label>
                                      <Text field='reg6ExciseeDutyPaidOther' placeholder='Excise Duty Paid' className="form-control"/>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Special Fee Paid</label>
                                      <Text field='reg6SpecialFeePaidOther' placeholder='Special Fee Paid' className="form-control"/>
                                    </div>
                                  </div>
                                </div>
                                </div> }
                              </div>
                              <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                  <div className="form-group">
                                    <label>Type of Wine</label>
                                    <select className="form-control"></select>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                  <div className="form-group">
                                    <label>Bottle Size</label>
                                    <select className="form-control"></select>
                                  </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                  <div className="form-group">
                                    <label>Number of Bottles</label>
                                    <Text field='reg6NoofBottles' placeholder='Number of Bottles' className="form-control"/>
                                  </div> 
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                  <label>Disgorging Loss</label>
                                  <Text field='reg6DisgorgingLoss' placeholder='Disgorging Loss' className="form-control"/>
                                </div> 
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                    <label>Closing Balance of disgorged Bottles</label>
                                    <Text field='reg6ClosingBalanceDisgorged' placeholder='Closing Balance of disgorged Bottles' className="form-control"/>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="form-group">
                                    <label>Closing Balance of Tirage Bottles</label>
                                    <Text field='reg6ClosingBalanceTirage' placeholder='Closing Balance of Tirage Bottles' className="form-control"/>
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

export default Register6;