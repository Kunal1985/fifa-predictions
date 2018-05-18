import React from 'react';
import { Link } from 'react-router';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import { getCurrRecord, upsertRecord, validateForm, getRecordsByQuery } from '../../utils/Functions';

class exciseOfficer extends React.Component {
    constructor(props) {
        super(props);
        this.modelName = "ExciseOfficer";
        this.viewName = `${this.modelName}Form`;
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        let currProps = this.props;
        currProps.history.goBack();
    }

    componentDidMount() {
        console.log(this.viewName, "componentDidMount");
        getRecordsByQuery(this, "States");
        let queryParams = this.props.location.state;
        getCurrRecord(queryParams, this, this.modelName);
    }

    componentDidUpdate() {
        console.log(this.viewName, "componentDidUpdate");
        let currState = this.state;
    }

    render() {
        let thisVar = this;
        let currState = this.state;
        let currRecord = currState ? currState.currRecord : null;
        let stateList = (currState && currState["states"]) ? currState["states"] : [];
        let districtList = (currState && currState["districts"]) ? currState["districts"] : [];
        let subDistrictList = (currState && currState["subdistricts"]) ? currState["subdistricts"] : [];
        let villageList = (currState && currState["villages"]) ? currState["villages"] : [];
        let stateInDB = currRecord ? currRecord.state : null;
        let districtInDB = currRecord ? currRecord.district : null;
        let subDistrictInDB = currRecord ? currRecord.taluka : null;
        let villageInDB = currRecord ? currRecord.village : null;
        return (
            <Form defaultValues = {currRecord}
                    onSubmit={(values) => {
                        let data = values;
                        if(currState && currState.currRecord)
                            data._id = currState.currRecord._id;
                        upsertRecord(data, thisVar, thisVar.modelName);
                    }}
                    validate={(values) => {
                        let currState = values.state;
                        let currDistrict = values.district;
                        let currSubDistrict = values.taluka;
                        if(currState && currState.selectedState != currState){
                            thisVar.setState({ selectedState: currState});
                            getRecordsByQuery(this, "Districts", {stateCode: parseInt(currState)});
                        }
                        if(currState && currState.selectedDistrict != currDistrict){
                            thisVar.setState({ selectedDistrict: currDistrict});
                            getRecordsByQuery(this, "SubDistricts", {districtCode: parseInt(currDistrict)});
                        }
                        if(currState && currState.selectedSubDistrict != currSubDistrict){
                            thisVar.setState({ selectedSubDistrict: currSubDistrict});
                            getRecordsByQuery(this, "Villages", {subDistrictCode: parseInt(currSubDistrict)});
                        }
                        return validateForm(values, thisVar.modelName);
                    }}
                >
                    {({submitForm}) => {
                        let errorMessage = null;
                        
                        return (
                            <div className="container">
                                <div className="register-heading">Excise Officers</div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <form onSubmit={submitForm} id="admin-create-user">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-4 col-sm-12">
                                                    <div className="form-group">
                                                        <label>Email*</label>
                                                        <Text field='email' placeholder='Email' className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-4 col-sm-12">
                                                    <div className="form-group">
                                                        <label>Name*</label>
                                                        <Text field='name' placeholder='Name' className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-12">
                                                    <div className="form-group">
                                                        <label>Office Name*</label>
                                                        <Text field='officeName' placeholder='Office Name' className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-md-4 col-sm-12">
                                                    <div className="form-group">
                                                        <label>Post*</label>
                                                        <Text field='post' placeholder='Post' className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-4 col-md-4 col-sm-12">
                                                    <div className="form-group">
                                                        <label>Telephone Number*</label>
                                                        <Text field='telephoneNumber' placeholder='Telephone Number' className="form-control"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group">
                                                    <RadioGroup field="officerType">
                                                        <label>Officer Type</label>
                                                        <div><Radio value="1" /><label>Winery Excise Officer</label></div>
                                                        <div><Radio value="2" /><label>Other Excise Officer</label></div>
                                                    </RadioGroup>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="button-section text-center">
                                                    <div className="text-center">
                                                        <button type="button" className="btn btn-primary" onClick={this.goBack}>
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
                            </div>
                        )
                    }}
                </Form>
        );
    }
}

export default exciseOfficer;