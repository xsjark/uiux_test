
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import CameraCard from './components/cameraCard/CameraCard';
import DetailsCard from './components/detailsCard/DetailsCard';
import IntroCard from './components/introCard/IntroCard';
import Navigation from './components/navigation/Navigation';
import Stepper from './components/stepper/Stepper';

function App() {

  const [step, setStep] = useState(0)

  const handleClick = num => {
    setStep(step+1);
  };

  const renderSwitch = (param) => {
    switch(param) {
      case 1:
        return <IntroCard handleClick={handleClick}/>;
      case 2: 
        return <DetailsCard handleClick={handleClick}/>;
      case 3: 
        return <CameraCard handleClick={handleClick}/>;
      default:
        return 'foo';
    }
  }
  return (
    <div className="App min-vh-100 d-flex flex-column">
      {step}
      <Navigation />
      <Stepper />
      {renderSwitch(step)}
      <Button onClick={() => setStep(1)}>HI</Button>
    </div>

    
  );
}

export default App;
