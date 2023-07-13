import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./components/Router";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
