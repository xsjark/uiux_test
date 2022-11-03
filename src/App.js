
import { useState } from 'react';
import CameraCard from './components/cameraCard/CameraCard';
import DetailsCard from './components/detailsCard/DetailsCard';
import LoanCard from './components/loanCard/LoanCard';
import IntroCard from './components/introCard/IntroCard';
import Navigation from './components/navigation/Navigation';
import Stepper from './components/stepper/Stepper';
import FinalizeCard from './components/finalizeCard/FinalizeCard';
import SuccessCard from './components/successCard/SuccessCard';
import Footer from './components/footer/Footer';

function App() {

  const [step, setStep] = useState(0)

  const [formData, setFormData] = useState();
  const [photoData, setPhotoData] = useState()
  const [loanAmount, setLoanAmount] = useState(100);

  const handleForward = () => {
    if(step <= 4) {
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

  const handleTakePhoto = (dataURI) => {
    setPhotoData(dataURI)
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
        return <CameraCard handleForward={handleForward} handleBack={handleBack} handleTakePhoto={handleTakePhoto}/>;
      case 3: 
        return <LoanCard handleForward={handleForward} handleBack={handleBack} handleLoanAmount={handleLoanAmount} loanAmount={loanAmount}/>;
      case 4: 
        return <FinalizeCard handleForward={handleForward} handleBack={handleBack} formData={formData} photoData={photoData} loanAmount={loanAmount}/>;
      case 5: 
        return <SuccessCard handleRestart={handleRestart} loanAmount={loanAmount}/>;
      default:
        return 'foo';
    }
  }
  return (
    <div className="App min-vh-100 d-flex flex-column">
      <Navigation />
      <Stepper step={step}/>
      {renderSwitch(step)}
      <Footer />
    </div>
  );
}

export default App;
