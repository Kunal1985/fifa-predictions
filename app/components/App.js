import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Login from './Login';

class App extends React.Component {
  render() {
    let pathname = this.props.location.pathname;
    return (
      <div>
        <Navbar history={this.props.history} />
        {(pathname == "/") ?
          <div className="row">
            {this.props.children}
          </div>
           :
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="left-section">
                <Sidebar />
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9">
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