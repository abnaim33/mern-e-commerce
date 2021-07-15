import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { DataProvider } from './GlobalState'
import Header from './components/headers/Header'
import MainPages from './components/mainpages/Pages'


function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">

          <Route exact path="/">
            <Header />
            <MainPages />
          </Route>

        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
