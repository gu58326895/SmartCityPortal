import {
  Routes,
  Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Cockpit from "./pages/Cockpit";

import "./styles.css";

function App() {

  return (

      <Routes>

        <Route
            path="/"
            element={<Dashboard />}
        />

        <Route
            path="/cockpit"
            element={<Cockpit />}
        />

      </Routes>

  );
}

export default App;