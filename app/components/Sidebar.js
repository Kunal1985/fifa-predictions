import React from 'react';
import {Link} from 'react-router';
import { getSideBarList } from '../utils/Functions';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.changeStep = this.changeStep.bind(this);
    //$( '#sidenav div:first').addClass('active');
  }

  changeStep(e, item) {
      e.preventDefault();
      let currProps = this.props;
      currProps.history.push(item.url);
      //$(e.currentTarget).closest('.sidenav').find('.step-name-container').removeClass('active');
      //$(e.currentTarget).addClass('active');
  }

  render() {
    let currUser = this.props.currUser;
    let sideBarList = getSideBarList(currUser);
    return (
        <div id="sidenav" className="sidenav">
            {sideBarList.map((item, index) => (
                <div key={index} className="step-name-container" onClick={(e) => this.changeStep(e, item)}>
                  <a href="#" key={index} >
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