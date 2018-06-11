import React from 'react';
import { Link, browserHistory } from 'react-router';
import { sideBarList } from '../../utils/Constants';
import { getAllRecords } from '../../utils/Functions';
import rp from 'request-promise';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import ReactTable from "react-table";
import matchSorter from 'match-sorter';

class GrapesSupplier extends Authentication {
    constructor(props) {
        super(props);
        this.modelName = "GrapesSupplierMaster";
        this.viewName = `${this.modelName}Summary`;
        this.goBack = this.goBack.bind(this);
        this.redirectToCreate = this.redirectToCreate.bind(this);
        this.redirectToEdit = this.redirectToEdit.bind(this);
    }

    redirectToCreate() {
        let currProps = this.props;
        browserHistory.push("/createGrapesSupplier");
    }

    redirectToEdit(currId) {
      let currProps = this.props;
      browserHistory.push({
        pathname: "/createGrapesSupplier",
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
        Header: 'Name',
        accessor: 'supplierName', // String-based value accessors!
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["supplierName"] }),
        filterAll: true
      },{
        Header: 'District',
        accessor: 'district', // String-based value accessors!
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["district"] }),
        filterAll: true
      },{
        Header: 'Village',
        accessor: 'village', // String-based value accessors!
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["village"] }),
        filterAll: true
      },{
        Header: 'Contact No.',
        accessor: 'contactNumber', // String-based value accessors!
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["contactNumber"] }),
        filterAll: true
      }]

        return (
            <div className="container">
              <div className="register-heading">Grapes Supplier</div>
              <div className="text-right"><a onClick={ thisVar.goBack } type="button">Back</a></div>
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
                                        <button type="button" className="btn btn-default" onClick={ thisVar.redirectToCreate }>
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

export default GrapesSupplier