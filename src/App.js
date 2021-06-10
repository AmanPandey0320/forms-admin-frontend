import Home from './pages/home';
import Login from './pages/loginform';
import './App.css';
import { BrowserRouter,Route,Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Login/>
          </Route>
          <Route exact path='/home/:type'>
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
