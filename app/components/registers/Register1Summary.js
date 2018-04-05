import React from 'react';
import { Link } from 'react-router';
import { sideBarList, searchType } from '../../utils/Constants';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import { Table } from 'react-bootstrap';

class Register1Summary extends Authentication {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        this.createFermentedWine = this.createFermentedWine.bind(this);
        this.editFermentedWine = this.editFermentedWine.bind(this);
    }

    createFermentedWine() {
        let currProps = this.props;
        currProps.history.push("/register1");
    }

    editFermentedWine() {
      let currProps = this.props;
      currProps.history.push("/register1");
  }

    goBack() {
        let currProps = this.props;
        currProps.history.goBack();
    }

    render() {
        return (
            <div className="container">
              <div className="register-heading">Grape Receipt Transactions</div>
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
                                    <button className="btn btn-default" onClick={ this.createFermentedWine }>
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
                    <th>Tank</th>
                    <th>Quantity</th>
                    <th>Verify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center" onClick={ this.editFermentedWine }><i className="fa fa-edit"></i></td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td className="text-center" onClick={ this.editFermentedWine }><i className="fa fa-edit"></i></td>
                    <td>Jacob</td>
                    <td>Otto</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td className="text-center" onClick={ this.editFermentedWine }><i className="fa fa-edit"></i></td>
                    <td>Larry the Bird</td>
                    <td>Otto</td>
                    <td>Otto</td>
                  </tr>
                </tbody>
              </Table>;
              </div>
            </div>
            );
    }
}

export default Register1Summary