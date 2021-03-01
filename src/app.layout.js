import React from "react";
import auth from "./auth";


const AppLayout = (props) => {
  return <div>
    App Layout
            <button onClick={() => {
      auth.logout(() => {
        props.history.push('/')
      })
    }}>
      Logout
    </button>

  </div>
}
export default AppLayout