import React from 'react';
import {Link} from 'react-router';
import {first, without, findWhere} from 'underscore';

class Predictions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        Predictions
      </div>
    );
  }
}

export default Predictions;