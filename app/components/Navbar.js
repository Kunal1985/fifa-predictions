import React from 'react';
import { Link } from 'react-router';
import rp from 'request-promise';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.editProfile = this.editProfile.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    editProfile() {
        let currProps = this.props;
        currProps.history.push("/editProfile");
    }

    changePassword() {
        let currProps = this.props;
        currProps.history.push("/changePassword");
    }

    logoutUser() {
        let currProps = this.props;
        let options = {
            method: 'POST',
            uri: 'http://localhost:3000/logout',
            json: true
        };
        rp(options)
            .then(function(body) {
                console.log("Success Logout");
                currProps.history.push("/");
            })
            .catch(function(err) {
                console.log("Error Logout", err);
            });
    }

    render() {
        let currObj = this;
        if (!currObj.state || (currObj.state && !currObj.state.currUser)) {
            rp("http://localhost:3000/userDetails")
                .then(function(body) {
                    currObj.setState({
                        currUser: JSON.parse(body)
                    });
                })
                .catch(function(err) {
                    console.warn("Error", err);
                });
        }
        return (
            <nav className='navbar navbar-static-top'>
              <div id='navbar'>
                <ul className='nav list-header'>
                  <li className="login-links">
                    { (currObj.state && currObj.state.currUser) ?
                      <div>
                        <div className="pull-left text-left">
                          <div>
                            <span><b>Lic. No</b> : 123</span>
                            <span><b>Name</b> : few</span>
                          </div>
                          <div>
                            <span><b>District</b> : sdf</span>
                            <span><b>Under</b> : qwe</span>
                          </div>
                        </div>
                        <div className="text-right pull-right">
                          <strong className="text-size-16">Hello, { currObj.state.currUser.username }</strong>
                          <br />
                          <span className="text-size-16">
                                                                                                                                <a href="#" onClick={ this.logoutUser }>Logout</a> | <a href="#" onClick={ this.changePassword }>Change Password</a>
                                                                                                                                </span>
                        </div>
                      </div>
                      :
                      <strong className="text-size-16">Please log in to proceed!</strong> }
                  </li>
                </ul>
              </div>
            </nav>
            );
    }
}

export default Navbar;