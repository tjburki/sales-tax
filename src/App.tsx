import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import classes from './App.module.scss';
import { OrderForm } from './pages/order-form';
import { Checkout } from './pages/checkout';

function App() {
  return (
    <div className={classes.app}>
      <Router>
        <Route exact path='/' component={OrderForm} />
        <Route path='/checkout' component={Checkout} />
      </Router>
    </div>
  );
}

export default App;