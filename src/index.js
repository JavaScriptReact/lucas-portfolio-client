import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import AdminForm from "./containers/AdminForm";
import "./styles/styl/style.css";

function Application() {
  const [show_admin_form, set_show_admin_form] = React.useState(false);

  React.useEffect(() => {
    window.onkeydown = (e) => {
      if (e.ctrlKey && e.altKey && e.key === "a") {
        set_show_admin_form(true);
      }
    };
  }, []);
  return (
    <>
      <Router>
        {show_admin_form ? <AdminForm action={set_show_admin_form} /> : <App />}
      </Router>
    </>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
