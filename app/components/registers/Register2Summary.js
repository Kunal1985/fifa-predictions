import React from 'react';
import { Link } from 'react-router';
import { getAllRecords } from '../../utils/Functions';
import rp from 'request-promise';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import ReactTable from "react-table";
import matchSorter from 'match-sorter'

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
    getAllRecords(this, this.modelName);
  }

  componentDidUpdate(){
    console.log(this.viewName, "componentDidUpdate");
  }

  render() {
    let thisVar = this;
    let currState = thisVar.state;
    let currRecords = currState ? currState.records : null;

    const columns = [{
      Header: 'Edit', // String-based value accessors!
      accessor: '_id',
      Cell: row => (
        <span onClick={ () => thisVar.redirectToEdit(row.value) }><i className="fa fa-edit"></i>
        </span>
      )
    },{
      Header: 'Grape Variety',
      accessor: 'grapeVariety', // String-based value accessors!
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["grapeVariety"] }),
      filterAll: true
    }, {
      id: 'quantity', // Required because our accessor is not a string
      Header: 'Quantity',
      accessor: d => d.quantity, // Custom value accessors!
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["quantity"] }),
      filterAll: true
    }, {
      id: 'juiceObtained', // Required because our accessor is not a string
      Header: 'Juice Obtained',
      accessor: d => d.juiceObtained, // Custom value accessors!
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["juiceObtained"] }),
      filterAll: true
    }, {
      id: 'clarificationLoss', // Required because our accessor is not a string
      Header: 'Clarification Losses',
      accessor: d => d.clarificationLoss, // Custom value accessors!
      filterMethod: (filter, rows) =>
        matchSorter(rows, filter.value, { keys: ["clarificationLoss"] }),
      filterAll: true
    }, {
      Header: 'Verify',
      accessor: 'verified', // String-based value accessors!
      Cell: row => (
        <span style={{
          color: row.value == true ? '#008000'
            : '#FF0000'
        }}>{
          row.value == true ? 'Verified'
          : 'Unverified'
        }
        </span>
      )
    }]

    return (
      <div className="container">
        <div className="register-heading">Crushing/Juice Processing</div>
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
        { currRecords ? 
          <ReactTable
            data={currRecords}
            filterable
            defaultFilterMethod={(filter, row) =>
              String(row[filter.id]) === filter.value}
            columns={columns}
            defaultPageSize={10}
            className="-striped -highlight"
          /> : ""}
        </div>
      </div>
    );
  }
}

export default Register2Summary