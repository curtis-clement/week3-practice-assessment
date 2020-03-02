import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import PatientSignUpPage from './components/PatientSignUpPage';
import OnDutyPage from './components/OnDutyPage';
import DoctorPortal from './components/DoctorPortal'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className='App'>
      <NavBar />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/patientSignUp' component={PatientSignUpPage} />
        <Route path='/onDuty' component={OnDutyPage} />
        <Route path='/doctorPortal' component={DoctorPortal} />
      </Switch>  
    </div>
    </Router>
  );
}

export default App;
