import React from 'react';
import { Link, browserHistory } from 'react-router';
import { sideBarList, tankType } from '../../utils/Constants';
import { getAllRecords } from '../../utils/Functions';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import ReactTable from "react-table";
import matchSorter from 'match-sorter';

class TankMaster extends Authentication {
    constructor(props) {
        super(props);
        this.modelName = "TankMaster";
        this.viewName = `${this.modelName}Summary`;
        this.redirectToCreate = this.redirectToCreate.bind(this);
        this.goBack = this.goBack.bind(this);
        this.redirectToEdit = this.redirectToEdit.bind(this);
    }

    redirectToCreate() {
        let currProps = this.props;
        browserHistory.push("/createTank");
    }

    redirectToEdit(currId) {
      let currProps = this.props;
      browserHistory.push({
        pathname: "/createTank",
        state: {
          upsertAction: "update",
          id: currId
        }
      });
    }

    goBack() {
      let currProps = this.props;
      browserHistory.push("/home");
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
        Header: 'Number',
        accessor: 'number', // String-based value accessors!
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["number"] }),
        filterAll: true
      },{
        Header: 'Type',
        accessor: 'type', // String-based value accessors!
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["type"] }),
        filterAll: true,
        Cell: row => (
          <span>{ row.value == '1' ? "SS Tank" : "Oak Wine Barrel Tank" }</span>
        )
      }, {
        id: 'capacity', // Required because our accessor is not a string
        Header: 'Capacity',
        accessor: d => d.capacity, // Custom value accessors!
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["capacity"] }),
        filterAll: true
      }, {
        Header: 'Guging Date',
        accessor: 'gugingDate', // String-based value accessors!
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["gugingDate"] }),
        filterAll: true
      },{
        Header: 'Installation Date',
        accessor: 'installationDate', // String-based value accessors!
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["installationDate"] }),
        filterAll: true
      }, {
        id: 'openingBalance', // Required because our accessor is not a string
        Header: 'Opening Balance',
        accessor: d => d.openingBalance, // Custom value accessors!
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["openingBalance"] }),
        filterAll: true
      }, {
        id: 'closingBalance', // Required because our accessor is not a string
        Header: 'Closing Balance',
        accessor: d => d.closingBalance, // Custom value accessors!
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["closingBalance"] }),
        filterAll: true
      }]

        return (
            <div className="container">
              <div className="register-heading">Tank Master</div>
              <div className="text-right"><a onClick={ this.goBack }>Back</a></div>
              <Form 
                onSubmit={ (values) => {
                    console.log('s');
                }} 
                validate={ (values) => {
                    return {}
                }}>
                { ({submitForm}) => {
                      let errorMessage = null;
                  
                      return (
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                              <form onSubmit={ submitForm } id="tankmaster">
                                <div className="row">
                                  <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="search-section">
                                      <div>
                                        <button type="button" className="btn btn-default" onClick={ this.redirectToCreate }>
                                          Add New
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                      )
                  } }
              </Form>
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

export default TankMaster