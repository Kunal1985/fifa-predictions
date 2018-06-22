import React from 'react';
import { Link, browserHistory } from 'react-router';
import { logoutUser, getRecordByUserName } from '../utils/Functions';
import { getCurrUserName } from '../utils/TokenUtils';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.viewName = "Navbar";
    this.logoutUser = this.logoutUser.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  changePassword() {
    let currProps = this.props;
    browserHistory.push("/changePassword");
  }

  logoutUser() {
    logoutUser(this);
  }

  componentDidMount() {
    // console.log(this.viewName, "componentDidMount");
  }

  componentDidUpdate() {
    // console.log(this.viewName, "componentDidUpdate");
  }
  
  render() {
    let thisVar = this;
    let currState = thisVar.state;
    let currUser = thisVar.props.currUser;
    return (
      <nav className='navbar navbar-static-top'>
        <div id='navbar'>
          <ul className='nav list-header'>
            <li className="login-links">
              {currUser ?
                <div>
                  <div className="clear"></div>
                  <div className="text-left logoNav">
                    <img src="/img/logo.png" className="logoNavImg"/>
                  </div>
                  <div className="text-right pull-right">
                    <strong className="text-size-16">Hello, {currUser.username}</strong>
                    <br />
                    <span className="text-size-16">
                      <a href="#" id="logoutBtn" onClick={this.logoutUser}>Logout</a> | <a href="#" onClick={this.changePassword}>Change Password</a>
                    </span>
                  </div>
                </div>
                :
                <strong className="text-size-16">Please log in to proceed!</strong>}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;