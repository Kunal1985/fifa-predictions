import React from 'react';
import {Link} from 'react-router';
import { sideBarList, grapeVariety } from '../utils/Constants';
import Authentication from './Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import { Tabs, Tab } from 'react-bootstrap';

class Admin extends Authentication {
  
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      key: 1
    };
  }

  handleSelect(key) {
    this.setState({ key });
  }

  render() {
    console.log("grapeVariety", grapeVariety);
    return (
      <div className="container">
        <div className="admin-panel">
            <Tabs
            activeKey={this.state.key}
            onSelect={this.handleSelect}
            id="controlled-tab"
        >
            <Tab eventKey={1} title="Home">
            Tab 1 content
            </Tab>
            <Tab eventKey={2} title="Create Winery User">
            <div className="register-heading">Create Winery User</div>
                <Form
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                    validate={(values) => {
                        return {
                            
                        }
                    }}
                >
                    {({submitForm}) => {
                        let errorMessage = null;
                        
                        return (
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <form onSubmit={submitForm} id="admin-create-user">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Winery Name</label>
                                                    <Text field='createUserWineryName' placeholder='Winery Name' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Liscence Number</label>
                                                    <Text field='createUserLiscenceNumber' placeholder='Liscence Number' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Authorized Officer</label>
                                                    <select className="form-control"></select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Owner Name</label>
                                                    <Text field='createUserOwnerName' placeholder='Owner Name' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Email</label>
                                                    <Text field='createUserEmail' placeholder='Email' className="form-control"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12">
                                                <div className="form-group">
                                                    <label>Telephone Number</label>
                                                    <Text field='createUserTelephoneNumber' placeholder='Telephone Number' className="form-control"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                        <div className="form-label-headings">Address</div>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-4 col-sm-12">
                                                    <div className="form-group">
                                                        <label>Address</label>
                                                        <Text field='createUserAddress' placeholder='Address' className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-12">
                                                    <div className="form-group">
                                                        <label>State</label>
                                                        <select className="form-control"></select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-12">
                                                    <div className="form-group">
                                                        <label>District</label>
                                                        <select className="form-control"></select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-4 col-sm-12">
                                                    <div className="form-group">
                                                        <label>Taluka/Tahsil</label>
                                                        <select className="form-control"></select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-12">
                                                    <div className="form-group">
                                                        <label>Village</label>
                                                        <select className="form-control"></select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-12">
                                                    <div className="form-group">
                                                        <label>Gat/ Survey No.</label>
                                                        <Text field='reg1SurveyNo' placeholder='Gat/ Survey No.' className="form-control"/>
                                                    </div>
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
            </Tab>
            <Tab eventKey={3} title="Create Excise User">
            Tab 3 content
            </Tab>
        </Tabs>
        </div>
      </div>
    );
  }
}

export default Admin;