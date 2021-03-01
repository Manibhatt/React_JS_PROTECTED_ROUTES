
import { Redirect, Route } from "react-router-dom";
import Auth from '../auth'


function ProtectedRoute({
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => {
        if (Auth.authenticated()) {
          return <Component {...props} />
        }
        else {
          return <Redirect to={{
            pathname: "/",
            state: {
              from: props.location
            }
          }} />
        }
      }
      }>
    </Route >
  )
}
export default ProtectedRoute;
