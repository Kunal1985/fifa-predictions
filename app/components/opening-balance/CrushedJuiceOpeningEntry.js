import React from 'react';
import { Link } from 'react-router';
import { sideBarList, searchType } from '../../utils/Constants';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import { Table } from 'react-bootstrap';

class CrushedJuiceOpeningEntry extends Authentication {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
        this.createCrushedJuice = this.createCrushedJuice.bind(this);
        this.editCrushedJuice = this.editCrushedJuice.bind(this);
    }

    createCrushedJuice() {
        let currProps = this.props;
        currProps.history.push("/createCrushedJuiceOpening");
    }

    editCrushedJuice() {
      let currProps = this.props;
      currProps.history.push("/createCrushedJuiceOpening");
  }

    goBack() {
        let currProps = this.props;
        currProps.history.goBack();
    }

    render() {
        return (
            <div className="container">
              <div className="register-heading">Crushed Juice Details</div>
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
                                    <button className="btn btn-default" onClick={ this.createCrushedJuice }>
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
                    <th>Grape Variety</th>
                    <th>Quantity</th>
                    <th>Verify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center" onClick={ this.editCrushedJuice }><i className="fa fa-edit"></i></td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>Otto</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td className="text-center" onClick={ this.editCrushedJuice }><i className="fa fa-edit"></i></td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Otto</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td className="text-center" onClick={ this.editCrushedJuice }><i className="fa fa-edit"></i></td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
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

export default CrushedJuiceOpeningEntry