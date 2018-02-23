import React from 'react';
import {Link} from 'react-router';
import { sideBarList } from '../utils/Constants';
import Authentication from './Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class EditProfile extends Authentication {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
      <div className="register-heading">Edit Profile</div>
      <Form
          onSubmit={(values) => {
            console.log('s');
          }}
          validate={(values) => {
            return {
                
            }
          }}
      >
          {({submitForm}) => {
              let errorMessage = null;
              
              return (
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <form onSubmit={submitForm}>
                          <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                              <div className="form-group">
                                  <label>Winery Name</label>
                                  <Text field='editProfileWineryName' placeholder='Winery Name' className="form-control"/>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            </div>
                          </div>
                        </form>
                    </div>
                </div>
              )
          }}
      </Form>
      </div>
    );
  }
}

export default EditProfile;