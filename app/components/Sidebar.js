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
                <div className="step-name-container">
                  <a href={item.url} key={index}>
                    <div><span className="fa-stack">
                          <span className="fa fa-circle-o fa-stack-2x"></span>
                          <strong className="fa-stack-1x">
                              {index}  
                          </strong>
                      </span>
                    </div>
                    <div className="text-bold">{item.title2}</div>
                  </a>
                </div>
            ))}
        </div>
    );
  }
}

export default Sidebar;