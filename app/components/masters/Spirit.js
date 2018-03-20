import React from 'react';
import { Link } from 'react-router';
import { sideBarList, searchType } from '../../utils/Constants';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import { Table } from 'react-bootstrap';

class Spirit extends Authentication {
    constructor(props) {
        super(props);
        this.createSpirit = this.createSpirit.bind(this);
        this.goBack = this.goBack.bind(this);
        this.editSpirit = this.editSpirit.bind(this);
    }

    createSpirit() {
        let currProps = this.props;
        currProps.history.push("/createSpirit");
    }

    editSpirit() {
        let currProps = this.props;
        currProps.history.push("/createSpirit");
    }

    goBack() {
        let currProps = this.props;
        currProps.history.push("/home");
    }

    render() {
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
                                        <button className="btn btn-default" type='submit'>
                                          Search
                                        </button>
                                      </div>
                                      <div>
                                        <button className="btn btn-default" type='submit'>
                                          Search All
                                        </button>
                                      </div>
                                      <div>
                                        <button className="btn btn-default" onClick={ this.createSpirit }>
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
                    <tr>
                      <td className="text-center" onClick={ this.editSpirit }><i className="fa fa-edit"></i></td>
                      <td>Mark</td>
                      <td>Otto</td>
                    </tr>
                    <tr>
                      <td className="text-center" onClick={ this.editSpirit }><i className="fa fa-edit"></i></td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                    </tr>
                    <tr>
                      <td className="text-center" onClick={ this.editSpirit }><i className="fa fa-edit"></i></td>
                      <td>Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>;
              </div>
            </div>
            );
    }
}

export default Spirit