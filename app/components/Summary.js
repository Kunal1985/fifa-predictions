import React from 'react';
import {Link} from 'react-router';
import { sideBarList } from '../utils/Constants';
import Authentication from './Authentication';

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