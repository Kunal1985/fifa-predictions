import React from 'react';
import { Link, browserHistory } from 'react-router';
import { sideBarList, searchType } from '../../utils/Constants';
import { getAllRecords } from '../../utils/Functions';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import { Table } from 'react-bootstrap';

class Spirit extends Authentication {
    constructor(props) {
        super(props);
        this.modelName = "SpiritMaster";
        this.viewName = `${this.modelName}Summary`;
        this.redirectToCreate = this.redirectToCreate.bind(this);
        this.goBack = this.goBack.bind(this);
        this.redirectToEdit = this.redirectToEdit.bind(this);
    }

    redirectToCreate() {
        let currProps = this.props;
        browserHistory.push("/createSpirit");
    }

    redirectToEdit(currId) {
      let currProps = this.props;
      browserHistory.push({
        pathname: "/createSpirit",
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
        return (
            <div className="container">
              <div className="register-heading">Spirit</div>
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
                                      <div>Search By</div>
                                      <div>
                                        <select className="form-control">
                                          { searchType.map(searchBy => {
                                                return <option key={ searchBy.id } value={ searchBy.id }>
                                                         { searchBy.name }
                                                       </option>;
                                            }) }
                                        </select>
                                      </div>
                                      <div>
                                        <Text field='searchName' placeholder='Search' className="form-control" />
                                      </div>
                                      <div>
                                        <button type="button" className="btn btn-default" type='submit'>
                                          Search
                                        </button>
                                      </div>
                                      <div>
                                        <button type="button" className="btn btn-default" type='submit'>
                                          Search All
                                        </button>
                                      </div>
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
                <Table bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Edit</th>
                      <th>Type of Spirit</th>
                      <th>Brand</th>
                    </tr>
                  </thead>
                  <tbody>
                  { currRecords ? currRecords.map((currRecord, index) => (
                      <tr key={ currRecord._id }>
                      <td className="text-center" onClick={ () => this.redirectToEdit(currRecord._id) }><i className="fa fa-edit"></i></td>
                      <td>{ currRecord.type }</td>
                      <td>{ currRecord.brand }</td>
                    </tr>
                    )) : "" }
                  </tbody>
                </Table>;
              </div>
            </div>
            );
    }
}

export default Spirit