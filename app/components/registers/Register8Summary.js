import React from 'react';
import { Link } from 'react-router';
import { getAllRecords } from '../../utils/Functions';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import { Table } from 'react-bootstrap';

class Register8Summary extends Authentication {
  constructor(props) {
    super(props);
    this.modelName = "Register8";
    this.viewName = `${this.modelName}Summary`;
    this.goBack = this.goBack.bind(this);
    this.redirectToCreate = this.redirectToCreate.bind(this);
    this.redirectToEdit = this.redirectToEdit.bind(this);
  }

  redirectToCreate() {
    let currProps = this.props;
    currProps.history.push("/register8");
  }

  redirectToEdit(currId) {
    let currProps = this.props;
    currProps.history.push({
      pathname: "/register8",
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
        <div className="register-heading">Labelling</div>
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
                <th>Opening Balance</th>
                <th>Closing Balance</th>
              </tr>
            </thead>
            <tbody>
              { currRecords ? currRecords.map((currRecord, index) => (
                  <tr key={ currRecord._id }>
                    <td className="text-center" onClick={ () => thisVar.redirectToEdit(currRecord._id) }><i className="fa fa-edit"></i></td>
                    <td>
                      { currRecord.openingBalance ? currRecord.openingBalance.sizeInML : "-----" }
                    </td>
                    <td>
                      { currRecord.closingBalance ? currRecord.closingBalance.sizeInML : "-----" }
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

export default Register8Summary