import React from 'react';
import { Link } from 'react-router';
import { sideBarList, searchType } from '../../utils/Constants';
import Authentication from '../Authentication';
import rp from 'request-promise';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import { Table } from 'react-bootstrap';

class Register1Summary extends Authentication {
    constructor(props) {
        super(props);
        this.setState({});
        this.goBack = this.goBack.bind(this);
        this.createFermentedWine = this.createFermentedWine.bind(this);
        this.editFermentedWine = this.editFermentedWine.bind(this);
    }

    createFermentedWine() {
        let currProps = this.props;
        currProps.history.push("/register1");
    }

    editFermentedWine(currId) {
        let currProps = this.props;
        currProps.history.push("/register1?upsertAction=update&id=" + currId);
    }

    goBack() {
        let currProps = this.props;
        currProps.history.goBack();
    }

    getRegiter1(currObj) {
        console.log("getRegiter1");
        let options = {
            method: 'GET',
            uri: 'http://localhost:3000/getRegister1',
            json: true
        };
        rp(options)
            .then(function(body) {
                console.log("getRegiter1 Response", body.length, body);
                if (!currObj.state || currObj.state.lastCount != body.length)
                    currObj.setState({
                        records: body,
                        lastCount: body.length
                    });
            })
            .catch(function(err) {
                console.log("Error", err);
            });
    }

    render() {
        this.getRegiter1(this);
        console.log("STATE", this.state);
        let currRecords = this.state ? this.state.records : null;
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
                      <th>Variety</th>
                    </tr>
                  </thead>
                  <tbody>
                    { currRecords ? currRecords.map((currRecord, index) => (
                          <tr key={ currRecord._id }>
                            <td className="text-center" onClick={ () => this.editFermentedWine(currRecord._id) }><i className="fa fa-edit"></i></td>
                            <td>{ currRecord.supplierName }</td>
                            <td>
                              { currRecord.quantity }
                            </td>
                            <td>
                              { currRecord.grapeVariety }
                            </td>
                          </tr>
                      )) : "" }
                  </tbody>
                </Table>
              </div>
            </div>
            );
    }
}

export default Register1Summary