import React from 'react';
import { Link } from 'react-router';
import { sideBarList, searchType } from '../../utils/Constants';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import { Table } from 'react-bootstrap';

class FlavourOpeningEntry extends Authentication {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        let currProps = this.props;
        currProps.history.goBack();
    }

    render() {
        return (
            <div className="container">
              <div className="register-heading">Flavour</div>
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
                                <div className="form-group">
                                    <div className="col-lg-4 col-md-4 col-sm-12">
                                        <label>Date<i className="fa fa-calendar"></i></label>
                                        <Text field='flavourOpeningEntryDate' placeholder='Date' className="form-control" type="date" />
                                    </div>
                                </div>
                              </div>
                                <div className="row">
                                    <div><label>Opening Entry</label></div>
                                    <div>
                                        <Table bordered hover responsive>
                                        <thead>
                                            <tr>
                                            <th>Sr No</th>
                                            <th>Flavour</th>
                                            <th>UOM</th>
                                            <th>Quantity</th>
                                            <th>Verify</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td><Text field='flavourOpeningEntryQuantity' placeholder='Quantity' className="form-control" /></td>
                                            <td>Otto</td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td><Text field='flavourOpeningEntryQuantity' placeholder='Quantity' className="form-control" /></td>
                                            <td>Otto</td>
                                            </tr>
                                            <tr>
                                            <td>1</td>
                                            <td>Larry the Bird</td>
                                            <td>@twitter</td>
                                            <td><Text field='flavourOpeningEntryQuantity' placeholder='Quantity' className="form-control" /></td>
                                            <td>Otto</td>
                                            </tr>
                                        </tbody>
                                        </Table>;
                                    </div>
                                </div>
                                <div className="row">
                                  <div className="button-section text-center">
                                    <div className="text-center">
                                      <button className="btn btn-primary" onClick={ this.goBack }>
                                        Cancel
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                      )
                  } }
              </Form>
            </div>
            );
    }
}

export default FlavourOpeningEntry