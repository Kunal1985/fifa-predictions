import React from 'react';
import { Link, browserHistory } from 'react-router';
import { sideBarList, searchType } from '../../utils/Constants';
import { getAllRecords } from '../../utils/Functions';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import ReactTable from "react-table";
import matchSorter from 'match-sorter';

class SpiritOpeningEntry extends Authentication {
    constructor(props) {
        super(props);
        this.modelName = "SpiritDetails";
        this.viewName = `${this.modelName}Summary`;
        this.goBack = this.goBack.bind(this);
        this.redirectToCreate = this.redirectToCreate.bind(this);
        this.redirectToEdit = this.redirectToEdit.bind(this);
    }

    redirectToCreate() {
        let currProps = this.props;
        browserHistory.push("/createSpiritOpening");
    }

    redirectToEdit(currId) {
      let currProps = this.props;
      browserHistory.push({
        pathname: "/createSpiritOpening",
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

      const columns = [{
        Header: 'Edit', // String-based value accessors!
        accessor: '_id',
        Cell: row => (
          <span onClick={ () => thisVar.redirectToEdit(row.value) }><i className="fa fa-edit"></i>
          </span>
        )
      }, {
        Header: 'Tank Number',
        accessor: 'tankNumber', // String-based value accessors!
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["tankNumber"] }),
        filterAll: true
      }, {
        Header: 'Type of Spirit',
        accessor: 'spiritType', // String-based value accessors!
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["spiritType"] }),
        filterAll: true
      }, {
        id: 'strength', // Required because our accessor is not a string
        Header: 'Strength',
        accessor: d => d.strength, // Custom value accessors!
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["strength"] }),
        filterAll: true
      }, {
        id: 'quantity', // Required because our accessor is not a string
        Header: 'Quantity',
        accessor: d => d.quantity, // Custom value accessors!
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["quantity"] }),
        filterAll: true
      }, {
        id: 'pl', // Required because our accessor is not a string
        Header: 'P.L',
        accessor: d => d.pl, // Custom value accessors!
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["pl"] }),
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
              <div className="register-heading">Spirit (Storage) Details</div>
              <div className="text-right"><a onClick={ this.goBack }>Back</a></div>
              <Form onSubmit={ (values) => {
                                   console.log('s');
                               } } validate={ (values) => {
                                                                                                                                                      return {
                                                                                                                                                  
                                                                                                                                                      }
                                                                                                                                                  } }>
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

export default SpiritOpeningEntry