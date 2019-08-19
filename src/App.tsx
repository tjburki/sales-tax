import * as React from 'react';
import classes from './App.module.scss';
import { Catalogue } from './components/catalogue/catalogue';
import { Cart } from './components/cart/cart';
import { BundleSelector } from './components/bundle/bundle-selector';

function App() {
  return (
    <div className={classes.app}>
      <div className='col-sm-8'>
        <BundleSelector />
        <Catalogue />
      </div>
      <div className='col-sm-4'>
        <Cart />
      </div>
    </div>
  );
}

export default App;