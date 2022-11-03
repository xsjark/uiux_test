
import { useState } from 'react';
import CameraCard from './components/cameraCard/CameraCard';
import DetailsCard from './components/detailsCard/DetailsCard';
import LoanCard from './components/loanCard/LoanCard';
import IntroCard from './components/introCard/IntroCard';
import Navigation from './components/navigation/Navigation';
import Stepper from './components/stepper/Stepper';

function App() {

  const [step, setStep] = useState(0)

  const [formData, setFormData] = useState();
  const [loanAmount, setLoanAmount] = useState(0);

  const handleForward = () => {
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

  const handleSubmitForm = (data) => {
    setFormData(data)
  }

  const handleLoanAmount = (amount) => {
    setLoanAmount(amount)
  }
  const renderSwitch = (param) => {
    switch(param) {
      case 0:
        return <IntroCard handleForward={handleForward} handleBack={handleBack}/>;
      case 1: 
        return <DetailsCard handleForward={handleForward} handleBack={handleBack} handleSubmitForm={handleSubmitForm}/>;
      case 2: 
        return <CameraCard handleForward={handleForward} handleBack={handleBack}/>;
      case 3: 
        return <LoanCard handleForward={handleForward} handleBack={handleBack} handleLoanAmount={handleLoanAmount} loanAmount={loanAmount}/>;
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
