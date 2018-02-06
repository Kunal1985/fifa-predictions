import React from 'react';
import {Link} from 'react-router';
import rp from 'request-promise';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
  }

  logoutUser(){
    let currProps = this.props;
    let options = {
        method: 'POST',
        uri: 'http://localhost:3000/logout',
        json: true
    };
    rp(options)
        .then(function (body) {
            console.log("Success Logout");
            currProps.history.push("/");
        })
        .catch(function (err) {
            console.log("Error Logout", err);
        });
  }

  render() {
    let currObj = this;
    if(!currObj.state || (currObj.state && !currObj.state.currUser)){
      rp("http://localhost:3000/userDetails")
        .then(function (body) {
            currObj.setState({currUser: JSON.parse(body)});
        })
        .catch(function (err) {
            console.warn("Error", err);
        });
    }
    return (
      <nav className='navbar navbar-static-top'>
        <div id='navbar'>
          <ul className='nav navbar-nav list-header'>
            <li className="width-50-per">
                {/*<img src="img/logo.jpg" className="logoImg"/>*/}
                <span className="logoTitle">
                  {/*<div><strong>महाराष्ट्र राज्य उत्पादन शुल्क</strong></div>
                  <div><strong className="text-color-red">महाराष्ट्र शासन</strong></div>*/}
                </span>
            </li>
            <li className="width-50-per text-right login-links">
              {(currObj.state && currObj.state.currUser) ?
                <div>
                  <strong className="text-size-16">Hello, {currObj.state.currUser.username}</strong><br />
                  <span className="text-size-16">
                  <a href="#" onClick={this.logoutUser}>Logout</a> | <a href="#">Change Password</a> | <a href="#">Edit Profile</a>
                  </span>
                </div>
                : 
                <strong className="text-size-16">Please log in to proceed!</strong>
              }
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;