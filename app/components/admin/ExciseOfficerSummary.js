import React from 'react';
import { Link, browserHistory } from 'react-router';
import { getAllRecords } from '../../utils/Functions';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import ReactTable from "react-table";
import matchSorter from 'match-sorter';

class ExciseOfficerSummary extends Authentication {
    constructor(props) {
        super(props);
        this.modelName = "ExciseOfficer";
        this.viewName = `${this.modelName}Summary`;
        this.goBack = this.goBack.bind(this);
        this.redirectToCreate = this.redirectToCreate.bind(this);
        this.redirectToEdit = this.redirectToEdit.bind(this);
    }

    redirectToCreate() {
        let currProps = this.props;
        browserHistory.push("/exciseOfficer");
    }

    redirectToEdit(currId) {
        let currProps = this.props;
        browserHistory.push({
            pathname: "/exciseOfficer",
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
            Header: 'Name',
            accessor: 'name', // String-based value accessors!
            filterMethod: (filter, rows) => matchSorter(rows, filter.value, {
                keys: ["name"]
            }),
            filterAll: true
        }, {
            Header: 'Office Name',
            accessor: 'officeName', // String-based value accessors!
            filterMethod: (filter, rows) => matchSorter(rows, filter.value, {
                keys: ["officeName"]
            }),
            filterAll: true
        }, {
            Header: 'Post',
            accessor: 'post', // String-based value accessors!
            filterMethod: (filter, rows) => matchSorter(rows, filter.value, {
                keys: ["post"]
            }),
            filterAll: true
        }, {
            Header: 'Email',
            accessor: 'email', // String-based value accessors!
            filterMethod: (filter, rows) => matchSorter(rows, filter.value, {
                keys: ["email"]
            }),
            filterAll: true
        }, {
            id: 'telephoneNumber', // Required because our accessor is not a string
            Header: 'Telephone Number',
            accessor: d => d.telephoneNumber, // Custom value accessors!
            filterMethod: (filter, rows) => matchSorter(rows, filter.value, {
                keys: ["telephoneNumber"]
            }),
            filterAll: true
        }]

        return (
            <div className="container">
              <div className="register-heading">Excise Officers</div>
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

export default ExciseOfficerSummary