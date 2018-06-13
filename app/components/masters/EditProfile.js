import React from 'react';
import { Link, browserHistory } from 'react-router';
import { getCurrRecord, upsertRecord, validateForm, getRecordsByQuery } from '../../utils/Functions';
import { sideBarList } from '../../utils/Constants';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class EditProfile extends Authentication {

    constructor(props) {
        super(props);
        this.modelName = "UserProfile";
        this.viewName = `${this.modelName}Form`;
        this.goBack = this.goBack.bind(this);
        this.state = {
          owners: ['owner-0'],
          addresses: ['address-0']
      };
    }

    onClear() {
        document.getElementById("editForm").reset();
    }

    goBack() {
        let currProps = this.props;
        browserHistory.push("/home");
    }

    appendInput() {
      var newOwner = `owner-${this.state.owners.length}`;
      var newAddress = `address-${this.state.addresses.length}`;
      this.setState({
          owners: this.state.owners.concat([newOwner]),
          addresses: this.state.addresses.concat([newAddress])
      });
    }

    componentDidMount() {
      console.log(this.viewName, "componentDidMount");
      let queryParams = this.props.location.state;
      getCurrRecord(queryParams, this, this.modelName);
    }

    componentDidUpdate() {
        console.log(this.viewName, "componentDidUpdate");
    }

    render() {
        let thisVar = this;
        let currState = thisVar.state;
        let currRecord = currState ? currState.currRecord : null;
        return (
            <div className="container">
              <div className="register-heading">Liscensee Profile</div>
              <div className="text-right"><a onClick={ this.goBack }>Back</a></div>
              <Form onSubmit={ (values) => {
                                   console.log('s');
                               } } validate={ (values) => {
                                                                                                                                                      return {
                                                                                                                                                  
                                                                                                                                                      }
                                                                                                                                                  } }>
                { ({submitForm}) => {
                      let errorMessage = null;
                  
                      return (
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <form onSubmit={ submitForm } id="editForm">
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Name</label>
                                      <Text field='editProfileWineryName' placeholder='Winery Name' className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Liscense Number</label>
                                      <Text field='editProfileLiscenseNumber' placeholder='Liscense Number' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Liscense Type</label>
                                      <select className="form-control"></select>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Date of Grant</label>
                                      <Text field='editProfileDateofGrant' placeholder='Date of Grant' className="form-control" type="date" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Liscense Capacity</label>
                                      <Text field='editProfileLiscenseNumber' placeholder='Liscense Number' className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Last Renewal Date</label>
                                      <Text field='editProfileLiscenseNumber' placeholder='Liscense Number' className="form-control" type="date"/>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Liscence Valid upto</label>
                                      <Text field='editProfileLiscenseNumber' placeholder='Liscense Number' className="form-control" type="date"/>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>FSSAI Number</label>
                                      <Text field='editProfileLiscenseNumber' placeholder='Liscense Number' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>FSSAI Valid till</label>
                                      <Text field='editProfileLiscenseNumber' placeholder='Liscense Number' className="form-control" type="date"/>
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
                                    <div id="dynamicOwnerNameInput" className="form-group">
                                      <label>Owner Name</label>
                                      { this.state.owners.map((input, index) => <Text placeholder='Owner Name' className="form-control" field={ input } key={index} />) }
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div id="dynamicOwnerAddressInput" className="form-group">
                                      <label>Address</label>
                                      { this.state.addresses.map((input, index) => <Text placeholder='Address' className="form-control" field={ input } key={index} />) }
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <button type="button" className="btn btn-default" onClick={ () => thisVar.appendInput() } type="button">
                                      Add Tank
                                    </button>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Telephone Number</label>
                                      <Text field='editProfileTel' placeholder='Telephone Number' className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Email</label>
                                      <Text field='editProfileEmail' placeholder='Email' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label className="text-area-labels">
                                        Address:
                                        <textarea field='editProfileAddress' placeholder='Address' className="form-control" />
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Pin code</label>
                                      <Text field='editProfilePinCode' placeholder='Pin code' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Website</label>
                                      <Text field='editProfileWebAdd' placeholder='Website' className="form-control"/>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="button-section text-center">
                                    <div className="text-center">
                                      <button type="button" className="btn btn-primary" onClick={ this.onClear }>
                                        Clear
                                      </button>
                                    </div>
                                    <div className="text-center">
                                      <button className="btn btn-default" type='submit'>
                                        Save
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
            );
    }
}

export default EditProfile;