import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NoConnection from '../src/Pages/NoConnection';
import { Online, Offline } from 'react-detect-offline';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
   <div>
      <Online>
         <App />
      </Online>

      <Offline>
         <NoConnection></NoConnection>
      </Offline>
   </div>,

   document.getElementById('root')
);

serviceWorker.unregister();
