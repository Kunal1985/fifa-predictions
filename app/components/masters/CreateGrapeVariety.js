import React from 'react';
import { Link, browserHistory } from 'react-router';
import { sideBarList } from '../../utils/Constants';
import { getCurrRecord, upsertRecord, validateForm } from '../../utils/Functions';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class CreateGrapeVariety extends Authentication {

    constructor(props) {
        super(props);
        this.modelName = "GrapeVarietyMaster";
        this.viewName = `${this.modelName}Form`;
        this.onCancel = this.onCancel.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    onCancel() {
        let currProps = this.props;
        browserHistory.goBack()
    }

    goBack() {
        let currProps = this.props;
        browserHistory.goBack();
    }

    componentDidMount(){
      console.log(this.viewName, "componentDidMount");
      let queryParams = this.props.location.state;
      getCurrRecord(queryParams, this, this.modelName);
    }

    componentDidUpdate(){
      console.log(this.viewName, "componentDidUpdate");
    }

    render() {
      let thisVar = this;
      let currState = thisVar.state;
      let currRecord = currState ? currState.currRecord : null;
        return (
            <div className="container">
              <div className="register-heading">Variety of Grape/Fruit</div>
              <div className="text-right"><a onClick={ this.goBack }>Back</a></div>
              <Form 
              defaultValues = {currRecord}
              onSubmit={ (values) => {
                let data = values;
                if(currState && currState.currRecord)
                  data._id = currState.currRecord._id;
                upsertRecord(data, thisVar, thisVar.modelName);
              } } validate={ (values) => {
                return validateForm(values, thisVar.modelName);
                } }>
                { ({submitForm}) => {
                      let errorMessage = null;
                  
                      return (
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <form onSubmit={ submitForm } id="createTank">
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12"></div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label>Name</label>
                                      <Text field='name' placeholder='Name' className="form-control" />
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-lg-4 col-md-4 col-sm-12"></div>
                                  <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                      <label className="text-area-labels">
                                        Desc:
                                        <Textarea className="form-control" field='desc' />
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="button-section text-center">
                                    <div className="text-center">
                                      <button type="button" className="btn btn-primary" onClick={ this.onCancel }>
                                        Cancel
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

export default CreateGrapeVariety;