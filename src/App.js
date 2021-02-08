import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Layouts/Navbar/Navbar'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        </Switch>
      </Router>
    </>
  );
}

export default App;
