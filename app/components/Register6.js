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

  render() {
    let currObj = this;
    return (
        <div className="container">
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
                        <form onSubmit={submitForm}>
                            <div className="form-group">
                                <label>Date</label>
                                <Text field='date' placeholder='Date' className="form-control" type="date"/>
                            </div>
                            <div>
                              <div>Opening Balance of Tirage Bottles</div>
                              <div className="form-group">
                                <label>Size in ML</label>
                                <select className="form-control"></select>
                              </div>
                              <div className="form-group">
                                <label>Number of Bottles</label>
                                <Text field='noofBottles' placeholder='Number of Bottles' className="form-control"/>
                              </div>
                            </div>
                            <div>
                              <div>Quantity of Wine Received from Bottling Room	</div>
                              <div className="form-group">
                                <label>Size in ML</label>
                                <select className="form-control"></select>
                              </div>
                              <div className="form-group">
                                <label>Quantity of Bottles</label>
                                <Text field='quantityofBottles' placeholder='Quantity of Bottles' className="form-control"/>
                              </div>
                            </div>
                            <div>
                              <div>Total Wine Available</div>
                              <div className="form-group">
                                <label>Size in ML</label>
                                <select className="form-control"></select>
                              </div>
                              <div className="form-group">
                                <label>Quantity of Bottles</label>
                                <Text field='quantityofBottles' placeholder='Quantity of Bottles' className="form-control"/>
                              </div>
                            </div>
                            <div>
                              <div>No. of bottles Issued for Disgorging</div>
                              <div className="form-group">
                                <label>Size in ML</label>
                                <select className="form-control"></select>
                              </div>
                              <div className="form-group">
                                <label>Quantity of Bottles</label>
                                <Text field='quantityofBottles' placeholder='Quantity of Bottles' className="form-control"/>
                              </div>
                            </div>
                            <div className="form-group">
                                <label>Tank Number</label>
                                <select className="form-control"></select>
                            </div>
                            <div className="form-group">
                                <label>Opening Balance</label>
                                <Text field='openingBalance' placeholder='Opening Balance' className="form-control"/>
                            </div>
                            <div>
                              <div>Quantity of Wine Bottled</div>
                              <div className="form-group">
                                <label>Type of Wine</label>
                                <select className="form-control"></select>
                              </div>
                              <div className="form-group">
                                <label>Bottle Size</label>
                                <select className="form-control"></select>
                              </div>
                              <div className="form-group">
                                <label>Number of Bottles</label>
                                <Text field='noofBottles' placeholder='Number of Bottles' className="form-control"/>
                              </div> 
                              <div className="form-group">
                                <label>Quantity in Litres</label>
                                <Text field='quantityLitres' placeholder='Quantity in Litres' className="form-control"/>
                              </div> 
                            </div>
                            <div>
                              <div>Quantity of Wine Transferred for Labelling</div>
                              <div className="form-group">
                                <label>Type</label>
                                <select className="form-control" value={this.state.value} onChange={currObj.handleChange}>
                                  <option value="disgorged" selected>Disgorged</option>
                                  <option value="tranfer">Tranfer to Other Unit</option>
                                </select>
                                {currObj.state.transferType === "disgorged" ? <div>
                                <div className="form-group">
                                  <label>Bottle Size</label>
                                  <select className="form-control"></select>
                                </div>
                                <div className="form-group">
                                  <label>Number of Bottles</label>
                                  <Text field='noofBottlesDisgorged' placeholder='Number of Bottles' className="form-control"/>
                                </div> 
                                </div> : <div>
                                <div className="form-group">
                                  <label>Name of Party</label>
                                  <Text field='nameofParty' placeholder='Name of Party' className="form-control"/>
                                </div>
                                <div className="form-group">
                                  <label>Address of Party</label>
                                  <Text field='addressofParty' placeholder='Address of Party' className="form-control"/>
                                </div>
                                <div className="form-group">
                                  <label>T.P/E.P  No.</label>
                                  <Text field='tpepNo' placeholder='T.P/E.P  No.' className="form-control"/>
                                </div>
                                <div className="form-group">
                                  <label>Size in ML</label>
                                  <Text field='sizeInMl' placeholder='Size in ML' className="form-control"/>
                                </div>
                                <div className="form-group">
                                  <label>Number of Bottles</label>
                                  <Text field='noofBottlesTransfer' placeholder='Number of Bottles' className="form-control"/>
                                </div> 
                                <div className="form-group">
                                  <label>Vendor Fee Paid</label>
                                  <Text field='vendorFeePaid' placeholder='Vendor Fee Paid' className="form-control"/>
                                </div>
                                <div className="form-group">
                                  <label>Excise Duty Paid</label>
                                  <Text field='exciseeDutyPaid' placeholder='Excise Duty Paid' className="form-control"/>
                                </div>
                                <div className="form-group">
                                  <label>Special Fee Paid</label>
                                  <Text field='specialFeePaid' placeholder='Special Fee Paid' className="form-control"/>
                                </div>
                                </div> }
                              </div>
                              <div className="form-group">
                                <label>Type of Wine</label>
                                <select className="form-control"></select>
                              </div>
                              <div className="form-group">
                                <label>Bottle Size</label>
                                <select className="form-control"></select>
                              </div>
                              <div className="form-group">
                                <label>Number of Bottles</label>
                                <Text field='noofBottles' placeholder='Number of Bottles' className="form-control"/>
                              </div> 
                              <div className="form-group">
                                <label>Quantity in Litres</label>
                                <Text field='quantityLitres' placeholder='Quantity in Litres' className="form-control"/>
                              </div> 
                            </div>
                            <div className="form-group">
                                <label>Disgorging Loss</label>
                                <Text field='disgorgingLoss' placeholder='Disgorging Loss' className="form-control"/>
                            </div> 
                            <div className="form-group">
                                <label>Closing Balance of disgorged Bottles</label>
                                <Text field='closingBalanceDisgorged' placeholder='Closing Balance of disgorged Bottles' className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Closing Balance of Tirage Bottles</label>
                                <Text field='closingBalanceTirage' placeholder='Closing Balance of Tirage Bottles' className="form-control"/>
                            </div>
                            <div className="form-group">
                              <label>
                                Remarks:
                                <textarea className="form-control"/>
                              </label>
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