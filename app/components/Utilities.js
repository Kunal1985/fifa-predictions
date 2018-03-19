import React from 'react';
import {Link} from 'react-router';
import { sideBarList } from '../utils/Constants';
import Authentication from './Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Utilities extends Authentication {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="register-heading">Utilities</div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
            </div>
          </div>
      </div>
    );
  }
}

export default Utilities;