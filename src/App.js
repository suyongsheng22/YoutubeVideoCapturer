import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from '../src/Pages/Gallery';
import Error404 from '../src/Pages/error404';
export default function App() {
   return (
      <Router>
         <div className="App">
            <Switch>
               <Route path="/" exact component={InitialScreen} />

               <Route path="/Gallery" component={Gallery}></Route>
               <Route path="*" component={Error404}></Route>
            </Switch>
         </div>
      </Router>
   );
}

const InitialScreen = () => <Gallery />;
