import React, { Suspense } from 'react'
import logo from './logo.svg';
import './App.css';

import {

  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import NotFound from './components/NotFound/index';
import Header from './components/Header/index';


const Photo = React.lazy(() => import('./features/Photo/index'));



function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>loadding ...</div>}>
        {/* <BrowserRouter> */}
        <Header />
        <ul>
          <li><Link to='/photo'> Go to photo page</Link></li>
          <li> <Link to='photo/add'>Go to add new photo page</Link></li>
          <li><Link to='photo/123'>Go to edit photo page</Link></li>
          <Photo />
        </ul>
        {/* <Switch>
            {/* <Redirect exact from='/' to='/photo' /> */}

        {/* <Route path='/' component={Photo} />
            <Route component={NotFound} />

          </Switch>  */}
        {/* </BrowserRouter> */}
      </Suspense>
    </div>
  );
}

export default App;
