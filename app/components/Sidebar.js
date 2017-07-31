import React from 'react';
import {Link} from 'react-router';
import { sideBarList } from '../utils/Constants';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.sideBarList = sideBarList;
  }

  render() {
    let sideBarList = this.sideBarList;
    return (
        <div id="sidenav" className="sidenav">
            {sideBarList.map((item, index) => (
                <a href={item.url} key={index}>
                  <span className="text-color-white">{item.title1}</span><br />
                  <span>{item.title2}</span>
                </a>
            ))}
        </div>
    );
  }
}

export default Sidebar;