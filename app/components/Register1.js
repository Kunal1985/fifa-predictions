import React from 'react';
import {Link} from 'react-router';
import { sideBarList } from '../utils/Constants';
import Authentication from './Authentication';

class Register1 extends Authentication {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="container">
            Register1
        </div>
    );
  }
}

export default Register1;