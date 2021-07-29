import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { DataProvider } from './GlobalState'
import Header from './components/headers/Header'
import MainPages from './components/mainpages/Pages'
import Login from './components/mainpages/auth/Login';
import Register from './components/mainpages/auth/Register';


function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">

          <Route exact path="/">
            <Header />
            <MainPages />
          </Route>



          <Route path="/login" exact component={isLogged ? NotFound : Login} />
          <Route path="/register" exact component={isLogged ? NotFound : Register} />


        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
