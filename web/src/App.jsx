import "./App.css";
import Home from "./pages/Home";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
