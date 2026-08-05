import {
  Routes,
  Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Cockpit from "./pages/Cockpit";
import TicketSystem from "./pages/TicketSystem/TicketSystem";
import Login from "./pages/Login/Login";
import RequireAuth from "./auth/RequireAuth";


import "./styles.css";

function App() {

  return (

      <Routes>

        <Route
            path="/login"
            element={<Login />}
        />

        <Route element={<RequireAuth />}>

        <Route
            path="/"
            element={<Dashboard />}
        />

        <Route
            path="/cockpit"
            element={<Cockpit />}
        />

          <Route
              path="/ticketSystem"
              element={<TicketSystem />}
          />

        </Route>

      </Routes>

  );
}

export default App;
