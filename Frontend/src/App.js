import React, { useState } from 'react';
import MainContainer from './Components/MainContainer'
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
  const [search, toggleSearch] = useState(false)
  const [weatherList, setWeatherList] = useState([])
  const [input, onChangeInput] = useState("");

  const store = {
    search: { state: search, set: toggleSearch },
    weather: { state: weatherList, set: setWeatherList },
    input: { state: input, set: onChangeInput }
  }


  // http://api.weatherstack.com/current?access_key=47ec0f905ee514b756eae4cdbca5803d&query=Philadelphia
  return (
    <>
      <Router>
        <AppContext.Provider value={store}>
          <MainContainer>
            <div className="col-sm-4">
              <Navigation />
            </div>
            <div className="col-sm-8">
              <Switch>
                <Route path="/">
                  <InfoContainer />
                </Route>
              </Switch>
            </div>
          </MainContainer>
        </AppContext.Provider>
      </Router>
    </>
  );
}

export default App;

