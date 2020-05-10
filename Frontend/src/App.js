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

function App() {
  // const [search, toggleSearch] = useState(false)
  const [weatherList, setWeatherList] = useState([])
  const [results, setResults] = useState([]);
  const [input, onChangeInput] = useState("");

  const store = {
    // search: { state: search, set: toggleSearch },
    results: { state: results, set: setResults },
    weather: { state: weatherList, set: setWeatherList },
    input: { state: input, set: onChangeInput }
  }


  // http://api.weatherstack.com/current?access_key=47ec0f905ee514b756eae4cdbca5803d&query=Philadelphia
  return (
    <>
      <Router>
        <AppContext.Provider value={store}>
          <main className="bg-brown">
            <div className="container">
              <div className="row">
                {/* <MainContainer> */}
                <div className="col-md-4 bg-warning">
                  <Navigation />
                </div>
                <div className="col-md-8">
                  <Switch>
                    <Route path="/">
                      <InfoContainer />
                    </Route>
                  </Switch>
                </div>
              </div>
            </div>
          </main>
          {/* </MainContainer> */}
        </AppContext.Provider>
      </Router>
    </>
  );
}

export default App;

