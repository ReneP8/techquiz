import "./App.css";
import Random from "./pages/Random";
import 'bootstrap/dist/css/bootstrap.min.css'

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Random />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
