import './App.css';
import Home from './pages/Home';

import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import NavigationBar from './components/layout/NavigationBar';


function App() {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route path='/register'>
          <RegisterPage />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
