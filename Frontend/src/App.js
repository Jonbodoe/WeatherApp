import React, { useState } from 'react';
// import MainContainer from './Components/MainContainer'
import Navigation from './Components/Navigation'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import InfoContainer from './Components/InfoContainer'
import AppContext from './dataHandling/AppContext'
import './index.css'

function App() {
  const [results, setResults] = useState([]);
  const [input, onChangeInput] = useState("");
  const [loader, showLoader] = useState(false);
  const [location, setLocation] = useState([]);
  const [error, setError] = useState({
    display:false,
    details: '',
   });
  //  Setting global states w/ react hooks, 

  const store = {
    results: { state: results, set: setResults },
    // the result from shown inthe main section 
    input: { state: input, set: onChangeInput },
    // Search input state
    loader: { state: loader, set: showLoader },
    // Loading screen
    location: { state: location, set: setLocation},
    // List of locations
    error: { state: error, set: setError}
    // error handling
  }
  // state store

  return (
    <>
      <Router>
        <AppContext.Provider value={store}>
          <main className="bg-brown">
            <div className="container">
              <div className="row">
                <div className="col-md-4 bg-warning">
                  <Navigation />
                  {/* left navigation */}
                </div>
                <div className="col-md-8">
                  <Switch>
                    <Route path="/">
                      <InfoContainer />
                      {/* main section */}
                    </Route>
                  </Switch>
                </div>
              </div>
              </div>
          </main>
        </AppContext.Provider>
      </Router>
    </>
  );
}

export default App;

