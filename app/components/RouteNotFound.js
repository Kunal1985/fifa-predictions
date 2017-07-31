import React from 'react';
import {Link} from 'react-router';
import { sideBarList } from '../utils/Constants';

class RouteNotFound extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="container">
            RouteNotFound
        </div>
    );
  }
}

export default RouteNotFound;