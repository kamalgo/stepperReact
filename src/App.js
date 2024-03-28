import React,{useContext} from 'react';
import './App.css';
import PersonalDetails from './Pages/PersonalDetails';
import FamilyDetails from './Pages/FamilyDetails';
import ComDetails from './Pages/ComDetails';
import {Stepper, StepLabel, Step} from '@mui/material'
import ForstuLogo from './Components/ForstuLogo';
import { multiStepContext } from './StepContext';

function App() {

  const{ currentStep, finalData} = useContext(multiStepContext);

  function showStep(Step) {
    switch(Step){
      case 1:
        return <PersonalDetails/>
      case 2:
        return <FamilyDetails/>
      case 3:
        return <ComDetails/>

    }
  }
  return (
    <div className="App">
          <div style={{ textAlign: 'center' }}>
            <ForstuLogo/>
          </div>

      <div className='center-stepper'>
        <Stepper style={{width: '100%'}} activeStep={currentStep -1} orientation='horizontal'>
          <Step>
            <StepLabel>Personal Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Family Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Communication Details</StepLabel>
          </Step>
        </Stepper>
      </div>
      {showStep(currentStep)}

    </div>
  );
}

export default App;
