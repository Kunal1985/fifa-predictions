import React from 'react';
import {Link} from 'react-router';
import { sideBarList } from '../utils/Constants';
import Authentication from './Authentication';
import { Form, Text, Select, Textarea, Checkbox, Radio, RadioGroup, NestedForm, FormError } from 'react-form';

class Summary extends Authentication {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        Summary
      </div>
    );
  }
}

export default Summary;