import "./App.css";
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css'

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
