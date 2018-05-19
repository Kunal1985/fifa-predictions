import React from 'react';
import { Link, browserHistory } from 'react-router';
import { getAllRecords } from '../../utils/Functions';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import { Table } from 'react-bootstrap';

class WineryUserSummary extends Authentication {
  constructor(props) {
    super(props);
    this.modelName = "WineryUser";
    this.viewName = `${this.modelName}Summary`;
    this.goBack = this.goBack.bind(this);
    this.redirectToCreate = this.redirectToCreate.bind(this);
    this.redirectToEdit = this.redirectToEdit.bind(this);
  }

  redirectToCreate() {
    let currProps = this.props;
    browserHistory.push("/wineryUser");
  }

  redirectToEdit(currId) {
    let currProps = this.props;
    browserHistory.push({
      pathname: "/wineryUser",
      state: {
        upsertAction: "update",
        id: currId
      }
    });
  }

  goBack() {
    let currProps = this.props;
    browserHistory.goBack();
  }

  componentDidMount(){
    console.log(this.viewName, "componentDidMount");
    getAllRecords(this, this.modelName);
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
        <div className="register-heading">Winery Users</div>
        <div className="text-right"><a onClick={ thisVar.goBack }>Back</a></div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="search-section">
              <div>
                <button type="button" className="btn btn-default" onClick={ thisVar.redirectToCreate }>
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
                <th>Winery Name</th>
                <th>Liscence Number</th>
                <th>Authorized Officer</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              { currRecords ? currRecords.map((currRecord, index) => (
                <tr key={ currRecord._id }>
                  <td className="text-center" onClick={ () => thisVar.redirectToEdit(currRecord._id) }><i className="fa fa-edit"></i></td>
                  <td>{ currRecord.name }</td>
                  <td>
                    { currRecord.liscenceNumber }
                  </td>
                  <td>
                    { currRecord.authorizedOfficer }
                  </td>
                  <td>
                    { currRecord.district }
                  </td>
                </tr>
              )) : "" }
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default WineryUserSummary