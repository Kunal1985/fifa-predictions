import React from 'react';
import { Link, browserHistory } from 'react-router';
import { logoutUser, getUserDetails } from '../utils/Functions';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.viewName = "Navbar";
        this.logoutUser = this.logoutUser.bind(this);
        this.editProfile = this.editProfile.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    editProfile() {
        let currProps = this.props;
        browserHistory.push("/editProfile");
    }

    changePassword() {
        let currProps = this.props;
        browserHistory.push("/changePassword");
    }

    logoutUser() {
        logoutUser(this);
    }

    componentDidMount() {
        console.log(this.viewName, "componentDidMount");
    }

    componentDidUpdate() {
        console.log(this.viewName, "componentDidUpdate");
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