import React from 'react';
import {Link} from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className='navbar navbar-static-top'>
        <div id='navbar'>
          <ul className='nav navbar-nav list-header'>
            <li className="width-50-per">
                <img src="img/logo.jpg" className="logoImg"/>
                <span className="logoTitle">
                  <div><strong>महाराष्ट्र राज्य उत्पादन शुल्क</strong></div>
                  <div><strong className="text-color-red">महाराष्ट्र शासन</strong></div>
                </span>
            </li>
            <li className="width-50-per text-right">
              <strong className="text-size-16">Hello, Username</strong><br />
              <span className="text-size-16">
              <a href="#">Logout</a> | <a href="#">Change Password</a> | <a href="#">Edit Profile</a>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;