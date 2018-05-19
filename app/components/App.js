import React from 'react';
import { browserHistory } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Login from './Login';
import { getToken, getCurrUserName, getCurrUserRole } from '../utils/TokenUtils';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.state = {
      isOpen: false
    }
    this._menuToggle = this._menuToggle.bind(this);
    this._handleDocumentClick = this._handleDocumentClick.bind(this);
}

  /**
   * Calculate & Update state of new dimensions
   */
  updateDimensions() {
    if(window.innerWidth < 500) {
      this.setState({ width: 450, height: 102 });
    } else {
      let update_width  = window.innerWidth-100;
      let update_height = Math.round(update_width/4.4);
      this.setState({ width: update_width, height: update_height });
    }
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
    document.addEventListener('click', this._handleDocumentClick, false);
  }

  componentWillMount () {
    console.log("AppJS componentWillMount");
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
    document.removeEventListener('click', this._handleDocumentClick, false);
  }

  componentDidUpdate() {
    let currUser;
    let currObj = this;
    let currState = currObj.state;
    let tokenPresent = getToken();
    if(tokenPresent){
      if(!currState || (currState && !currState.currUser)){
        currObj.setState({
          currUser: {
            username: getCurrUserName(),
            role: parseInt(getCurrUserRole())
          }
        });
      }
    } else{
      currUser = currState && currState.currUser ? currState.currUser : null;
      if(currUser)
        currObj.setState({
          currUser: null
        });
    }
    currUser = currState && currState.currUser ? currState.currUser : null;
    console.log("AppJS componentDidUpdate", currUser);
  }

  _handleDocumentClick(e) {
    if (e.target.className.indexOf("fa-bars") ==-1 && this.state.isOpen === true) {
      this.setState({
      isOpen: false
    });
    };
  }
  _menuToggle(e) {
    e.stopPropagation();
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let currState = this.state;
    let pathname = this.props.location.pathname;
    let isMobile = currState.width < 479;
    let currUser = currState && currState.currUser ? currState.currUser : null;
    return (
      <div ref="root">
        <Navbar history={browserHistory} currUser={currUser}/>
        {(pathname == "/") ?
          <div className="row">
            {this.props.children}
          </div>
           :
          <div className={"row " + (isMobile ? 'is-mobile' : 'is-desktop')}>
            {(isMobile) ? <div className="hambclicker" onClick={ this._menuToggle }><i className="fa fa-bars fa-2x"></i></div> : <div></div>}
            <div className={"col-lg-3 col-md-3 col-sm-12 " + (this.state.isOpen ? 'is-open' : 'is-close')}>
              <div className="left-section">
                <Sidebar history={browserHistory} currUser={currUser} />
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12">
              <div className="right-section">
                {this.props.children}
              </div>
            </div>
          </div>
        }
        <Footer />
      </div>
    );
  }
}

export default App;