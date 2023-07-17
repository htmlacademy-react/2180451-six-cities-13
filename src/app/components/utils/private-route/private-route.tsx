import {Navigate} from 'react-router-dom';
import { AuthorizationStatus } from '../../../../constants';

type PrivateRouteProps = {
  children: JSX.Element;
  authStatus: string;
};


function PrivateRoute({authStatus, children}: PrivateRouteProps): JSX.Element {
  return authStatus === AuthorizationStatus.Auth ? children : <Navigate to={'/login'} />;
}

export default PrivateRoute;
