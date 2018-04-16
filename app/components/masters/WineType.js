import React from 'react';
import { Link } from 'react-router';
import { sideBarList, searchType } from '../../utils/Constants';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import { Table } from 'react-bootstrap';

class WineType extends Authentication {
    constructor(props) {
        super(props);
        this.createBrand = this.createBrand.bind(this);
        this.goBack = this.goBack.bind(this);
        this.editBrand = this.editBrand.bind(this);
    }

    createBrand() {
        let currProps = this.props;
        currProps.history.push("/createWineType");
    }

    editBrand() {
        let currProps = this.props;
        currProps.history.push("/createWineType");
    }

    goBack() {
        let currProps = this.props;
        currProps.history.push("/home");
    }

    render() {
        return (
            <div className="container">
              <div className="register-heading">Type of Wine</div>
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
                                        <button className="btn btn-default" onClick={ this.createBrand }>
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
                      <th>Edit </th>
                      <th>Date </th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center" onClick={ this.editBrand }><i className="fa fa-edit"></i></td>
                      <td>Mark</td>
                      <td>Otto</td>
                    </tr>
                    <tr>
                      <td className="text-center" onClick={ this.editBrand }><i className="fa fa-edit"></i></td>
                      <td>Mark</td>
                      <td>Otto</td>
                    </tr>
                    <tr>
                      <td className="text-center" onClick={ this.editBrand }><i className="fa fa-edit"></i></td>
                      <td>Mark</td>
                      <td>Otto</td>
                    </tr>
                  </tbody>
                </Table>;
              </div>
            </div>
            );
    }
}

export default WineType