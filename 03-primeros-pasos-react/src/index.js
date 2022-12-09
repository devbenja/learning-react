import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import './index.css';

/*import {App} from './PrimeraApp';*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App tecnologia='React' rango='FrontEnd'/>*/}
    
    <CounterApp/>
  </React.StrictMode>
); 