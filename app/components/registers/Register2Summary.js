import React from 'react';
import { Link } from 'react-router';
import { getAllRecords } from '../../utils/Functions';
import rp from 'request-promise';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import { Table } from 'react-bootstrap';

class Register2Summary extends Authentication {
  constructor(props) {
    super(props);
    this.modelName = "Register2";
    this.viewName = `${this.modelName}Summary`;
    this.goBack = this.goBack.bind(this);
    this.redirectToCreate = this.redirectToCreate.bind(this);
    this.redirectToEdit = this.redirectToEdit.bind(this);
  }

  redirectToCreate() {
    let currProps = this.props;
    currProps.history.push("/register2");
  }

  redirectToEdit(currId) {
    let currProps = this.props;
    currProps.history.push({
      pathname: "/register2",
      state: {
        upsertAction: "update",
        id: currId
      }
    });
  }

  goBack() {
    let currProps = this.props;
    currProps.history.goBack();
  }

  componentDidMount(){
    console.log(this.viewName, "componentDidMount");      
    getAllRecords(this, "Register2");
  }

  componentDidUpdate(){
    console.log(this.viewName, "componentDidUpdate");
  }

  render() {
    let thisVar = this;
    let currState = thisVar.state;
    let currRecords = currState ? currState.records : null;
    return (
      <div className="container">
        <div className="register-heading">Crushing/Juice Processing</div>
        <div className="text-right"><a onClick={ thisVar.goBack }>Back</a></div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="search-section">
              <div>
                <button className="btn btn-default" onClick={ thisVar.redirectToCreate }>
                  Add New
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Table bordered hover responsive>
            <thead>
              <tr>
                <th>Edit</th>
                <th>Fruit/Grape Variety</th>
                <th>Quantity</th>
                <th>Juice Obtained</th>
                <th>Clarification Losses</th>
              </tr>
            </thead>
            <tbody>
              { currRecords ? currRecords.map((currRecord, index) => (
                <tr key={ currRecord._id }>
                  <td className="text-center" onClick={ () => thisVar.redirectToEdit(currRecord._id) }><i className="fa fa-edit"></i></td>
                  <td>{ currRecord.grapeVariety }</td>
                  <td>{ currRecord.quantity }</td>
                  <td>{ currRecord.juiceObtained }</td>
                  <td>{ currRecord.clarificationLoss }</td>
                </tr>
              )) : "" }
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Register2Summary