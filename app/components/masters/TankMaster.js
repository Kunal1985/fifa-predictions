import React from 'react';
import { Link } from 'react-router';
import { sideBarList, searchType } from '../../utils/Constants';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import { Table } from 'react-bootstrap';

class TankMaster extends Authentication {
    constructor(props) {
        super(props);
        this.createTank = this.createTank.bind(this);
        this.goBack = this.goBack.bind(this);
        this.editTank = this.editTank.bind(this);
    }

    createTank() {
        let currProps = this.props;
        currProps.history.push("/createTank");
    }

    editTank() {
      let currProps = this.props;
      currProps.history.push("/createTank");
  }

    goBack() {
      let currProps = this.props;
      currProps.history.push("/home");
  }

    render() {
        return (
            <div className="container">
              <div className="register-heading">Tank Master</div>
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
                                          <Text field='searchName' placeholder='Search' className="form-control"/>
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
                                        <button className="btn btn-default" onClick={ this.createTank }>
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
                    <th>Name</th>
                    <th>Type</th>
                    <th>Capacity</th>
                    <th>Guging Date</th>
                    <th>Installation Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center" onClick={ this.editTank }><i className="fa fa-edit"></i></td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td className="text-center" onClick={ this.editTank }><i className="fa fa-edit"></i></td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td className="text-center" onClick={ this.editTank }><i className="fa fa-edit"></i></td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </Table>;
              </div>
            </div>
            );
    }
}

export default TankMaster