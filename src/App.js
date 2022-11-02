
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import CameraCard from './components/cameraCard/CameraCard';
import DetailsCard from './components/detailsCard/DetailsCard';
import FinalizeCard from './components/finalizeCard/FinalizeCard';
import IntroCard from './components/introCard/IntroCard';
import Navigation from './components/navigation/Navigation';
import Stepper from './components/stepper/Stepper';

function App() {

  const [step, setStep] = useState(0)

  const handleClick = () => {
    if(step <= 3) {
      setStep(step+1);
    }
  };

  const handleBack = () => {
    if(step >= 1) {
      setStep(step-1)
    }
  }

  const handleRestart = () => {
      setStep(0)
  }

  const renderSwitch = (param) => {
    switch(param) {
      case 0:
        return <IntroCard handleClick={handleClick} handleBack={handleBack}/>;
      case 1: 
        return <DetailsCard handleClick={handleClick} handleBack={handleBack}/>;
      case 2: 
        return <CameraCard handleClick={handleClick} handleBack={handleBack}/>;
      case 3: 
        return <FinalizeCard handleRestart={handleRestart}/>;
      default:
        return 'foo';
    }
  }
  return (
    <div className="App min-vh-100 d-flex flex-column">
      <Navigation />
      <Stepper />
      {renderSwitch(step)}
    </div>

    
  );
}

export default App;
