import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Layouts/Navbar/Navbar'

import Home from './components/Pages/Home'
import Services from './components/Pages/Home'
import Products from './components/Pages/Home'
import SignUp from './components/Pages/Home'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
