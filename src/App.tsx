//Packages
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Components
import { OrderForm } from './pages/order-form';
import CheckoutContainer from './pages/checkout-container';
import { Confirmation } from './pages/confirmation';

//Styles
import classes from './App.module.scss';

const App: React.FC = () => {
  return (
    <div className={classes.app}>
      <Router>
        <Route exact path='/' component={OrderForm} />
        <Route path='/checkout' component={CheckoutContainer} />
        <Route path='/confirmation' component={Confirmation} />
      </Router>
    </div>
  );
}

export default App;