import React from 'react';
import { getCurrUserRole, getCurrUserName } from './utils/TokenUtils';

const Authorization = (allowedRoles) =>
  (WrappedComponent) =>
    class WithAuthorization extends React.Component {
      constructor(props) {
        super(props)
        this.state = {};
      }
      
      componentWillMount(){
        // let currState = this.state;
        // if(!currState || (currState && !currState.user))
        try{
          this.setState({
            user: {
              name: getCurrUserName(),
              role: getCurrUserRole()
            }
          })
        } catch(err){
          this.setState({trespass: true});
        }
      }

      render() {
        if(this.state.trespass)
          return <WrappedComponent {...this.props} />
        const { role } = this.state.user
        if (allowedRoles.includes(role)) {
          return <WrappedComponent {...this.props} />
        } else {
          return <h1 className="danger">Unauthorized Access!</h1>
        }
      }
    }

const AdminRoute = Authorization(['0']);
const User1Route = Authorization(['1']);
const User12Route = Authorization(['1', '2']);
const User3Route = Authorization(['3']);

export { AdminRoute, User1Route, User12Route, User3Route };