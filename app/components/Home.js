import React from 'react';
import {Link} from 'react-router';
import {first, without, findWhere} from 'underscore';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        HOME
      </div>
    );
  }
}

export default Home;