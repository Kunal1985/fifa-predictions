import React from 'react';
import { Link } from 'react-router';
import { sideBarList, searchType } from '../../utils/Constants';
import { getAllRecords } from '../../utils/Functions';
import rp from 'request-promise';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import { Table } from 'react-bootstrap';

class Register7Summary extends Authentication {
  constructor(props) {
    super(props);
    this.modelName = "Register7";
    this.viewName = `${this.modelName}Summary`;
    this.goBack = this.goBack.bind(this);
    this.redirectToCreate = this.redirectToCreate.bind(this);
    this.redirectToEdit = this.redirectToEdit.bind(this);
  }

  redirectToCreate() {
    let currProps = this.props;
    currProps.history.push("/register7");
  }

  redirectToEdit(currId) {
    let currProps = this.props;
    currProps.history.push({
      pathname: "/register7",
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
        <div className="register-heading">Disgorging</div>
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
                <th>Disgorging Type</th>
                <th>Labelling</th>
                <th>Disgorging Loss</th>
                <th>Disgorged Bottles</th>
                <th>Tirage Bottles</th>
                <th>Verify</th>
              </tr>
            </thead>
            <tbody>
              { currRecords ? currRecords.map((currRecord, index) => (
                  <tr key={ currRecord._id }>
                    <td className="text-center" onClick={ () => thisVar.redirectToEdit(currRecord._id) }><i className="fa fa-edit"></i></td>
                    <td>{ currRecord.disgorgingType }</td>
                    <td>
                      { currRecord.ownUnit ? currRecord.ownUnit.bottlesQty : currRecord.otherUnit ? currRecord.otherUnit.bottlesQty : "-----" }
                    </td>
                    <td>
                      { currRecord.disgorgingLoss ? currRecord.disgorgingLoss.bottlesQty : "-----" }
                    </td>
                    <td>
                      { currRecord.closingBalanceDisgorged ? currRecord.closingBalanceDisgorged.bottlesQty : "-----" }
                    </td>
                    <td>
                      { currRecord.closingBalanceTirage ? currRecord.closingBalanceTirage.bottlesQty : "-----" }
                    </td>
                    <td>{ currRecord.verified ? <span className="verified">Verified</span> : <span className="unverified">Unverified</span> }</td>
                  </tr>
                )) : "" }
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default Register7Summary