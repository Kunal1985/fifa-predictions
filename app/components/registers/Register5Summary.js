import React from 'react';
import { Link, browserHistory } from 'react-router';
import { getAllRecords } from '../../utils/Functions';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import ReactTable from "react-table";
import matchSorter from 'match-sorter';

class Register5Summary extends Authentication {
    constructor(props) {
        super(props);
        this.modelName = "Register5";
        this.viewName = `${this.modelName}Summary`;
        this.goBack = this.goBack.bind(this);
        this.redirectToCreate = this.redirectToCreate.bind(this);
        this.redirectToEdit = this.redirectToEdit.bind(this);
    }

    redirectToCreate() {
        let currProps = this.props;
        browserHistory.push("/register5");
    }

    redirectToEdit(currId) {
        let currProps = this.props;
        browserHistory.push({
            pathname: "/register5",
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

    componentDidMount() {
        console.log(this.viewName, "componentDidMount");
        getAllRecords(this, this.modelName);
    }

    componentDidUpdate() {
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
        }, {
            Header: 'Tank',
            accessor: 'tankNumber', // String-based value accessors!
            filterMethod: (filter, rows) => matchSorter(rows, filter.value, {
                keys: ["tankNumber"]
            }),
            filterAll: true
        }, {
            id: 'transferType', // Required because our accessor is not a string
            Header: 'Transfer Type',
            accessor: d => d.transferType, // Custom value accessors!
            filterMethod: (filter, rows) => matchSorter(rows, filter.value, {
                keys: ["transferType"]
            }),
            filterAll: true
        }, {
            id: 'openingBalance', // Required because our accessor is not a string
            Header: 'Opening Balance',
            accessor: d => d.openingBalance, // Custom value accessors!
            filterMethod: (filter, rows) => matchSorter(rows, filter.value, {
                keys: ["openingBalance"]
            }),
            filterAll: true
        }, {
            id: 'closingBalance', // Required because our accessor is not a string
            Header: 'Closing Balance',
            accessor: d => d.closingBalance, // Custom value accessors!
            filterMethod: (filter, rows) => matchSorter(rows, filter.value, {
                keys: ["closingBalance"]
            }),
            filterAll: true
        }, {
            Header: 'Verify',
            accessor: 'verified', // String-based value accessors!
            Cell: row => (
                <span style={ {
 color: row.value == true ? '#008000'
 : '#FF0000'
 } }>{ row.value == true ? 'Verified'
                                                                          : 'Unverified' }
                        </span>
            )
        }]

        return (
            <div className="container">
              <div className="register-heading">Bulk Transfer</div>
              <div className="text-right"><a onClick={ thisVar.goBack } type="button">Back</a></div>
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
                  <ReactTable data={ currRecords } filterable defaultFilterMethod={ (filter, row) => String(row[filter.id]) === filter.value } columns={ columns } defaultPageSize={ 10 } className="-striped -highlight"
                  /> : "" }
              </div>
            </div>
            );
    }
}

export default Register5Summary