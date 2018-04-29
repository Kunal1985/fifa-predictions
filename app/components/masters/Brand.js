import React from 'react';
import { Link } from 'react-router';
import { sideBarList, searchType } from '../../utils/Constants';
import { getAllRecords } from '../../utils/Functions';
import Authentication from '../Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';
import { Table } from 'react-bootstrap';

class Brand extends Authentication {
    constructor(props) {
        super(props);
        this.setState({});
        this.createBrand = this.createBrand.bind(this);
        this.goBack = this.goBack.bind(this);
        this.editBrand = this.editBrand.bind(this);
    }

    createBrand() {
        let currProps = this.props;
        currProps.history.push("/createBrand");
    }

    editBrand(currId) {
        let currProps = this.props;
        currProps.history.push("/createBrand?upsertAction=update&id=" + currId);
    }

    goBack() {
        let currProps = this.props;
        currProps.history.push("/home");
    }

    render() {
      getAllRecords(this, "BrandMaster");
      console.log("STATE", this.state);
      let currRecords = this.state ? this.state.records : null;
        return (
            <div className="container">
              <div className="register-heading">Brand</div>
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
                      <th>Name </th>
                      <th>Size in ML</th>
                      <th>Mfg. Cost Declared</th>
                      <th>Excise Duty</th>
                      <th>Sales Tax</th>
                      <th>MRP</th>
                      <th>Label Approved Order No.</th>
                      <th>MRP Approval Date</th>
                      <th>MRP Effective From</th>
                      <th>MRP Change Date</th>
                    </tr>
                  </thead>
                  <tbody>
                  { currRecords ? currRecords.map((currRecord, index) => (
                      <tr key={ currRecord._id }>
                      <td className="text-center" onClick={ () => this.editBrand(currRecord._id) }><i className="fa fa-edit"></i></td>
                      <td>{ currRecord.name }</td>
                      <td>{ currRecord.size }</td>
                      <td>{ currRecord.mfgCost }</td>
                      <td>{ currRecord.exciseDuty }</td>
                      <td>{ currRecord.salesTax }</td>
                      <td>{ currRecord.mrp }</td>
                      <td>{ currRecord.labelAppOrderNo }</td>
                      <td>{ currRecord.mrpApprovalDate }</td>
                      <td>{ currRecord.mrpEffectiveDate }</td>
                      <td>{ currRecord.mrpChangeDate }</td>
                    </tr>
                    )) : "" }
                  </tbody>
                </Table>;
              </div>
            </div>
            );
    }
}

export default Brand