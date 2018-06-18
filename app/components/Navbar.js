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
        console.log(this.viewName, "componentDidMount");
    }

    componentDidUpdate() {
        console.log(this.viewName, "componentDidUpdate");
        let currUserName = getCurrUserName();
        if(currUserName)
            getRecordByUserName(this, "WineryUser", currUserName);
    }

    render() {
        let thisVar = this;
        let currState = thisVar.state;
        let currUser = currState ? currState.currRecord : null;
        return (
            <nav className='navbar navbar-static-top'>
                <div id='navbar'>
                    <ul className='nav list-header'>
                        <li className="login-links">
                            {currUser ?
                                <div>
                                    <div className="pull-left text-left">
                                        <div>
                                            <span><b>Lic. No</b> : {currUser.liscenceNumber} | </span>
                                            <span><b>Name</b> : {currUser.name}</span>
                                        </div>
                                        <div>
                                            <span><b>District</b> : {currUser.district} | </span>
                                            <span><b>Under</b> : {currUser.authorizedOfficer}</span>
                                        </div>
                                    </div>
                                    <div className="text-right pull-right">
                                        <strong className="text-size-16">Hello, {currUser.email}</strong>
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