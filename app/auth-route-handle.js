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
        this.setState({
          user: {
            name: getCurrUserName(),
            role: getCurrUserRole()
          }
        })
      }

      render() {
        const { role } = this.state.user
        if (allowedRoles.includes(role)) {
          return <WrappedComponent {...this.props} />
        } else {
          return <h1 className="danger">Uauthorized Access!</h1>
        }
      }
    }

const AdminRoute = Authorization(['0']);
const User1Route = Authorization(['1']);
const User12Route = Authorization(['1', '2']);

export { AdminRoute, User1Route, User12Route };