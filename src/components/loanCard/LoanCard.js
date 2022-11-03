import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Slider from "./Slider";

function LoanCard({ handleForward, handleBack, handleLoanAmount, loanAmount }) {
    const [isDisplayed, setIsDisplayed] = useState(false);

    useEffect(() => {
        setInterval(() => {
            setIsDisplayed(true);
        }, 5000);
    }, []);

    return (
        <div className="flex-grow-1 d-flex flex-column align-items-center">

            {isDisplayed
                ?<Card className="col-10 col-md-8">
                    <Card.Body className="d-flex flex-column align-items-center p-3 p-md-5">
                        <div className="d-flex flex-column align-items-center">
                            <p className='fs-4 fw-bold'>Congratulations!</p>
                            <p className="text-center">Your application has been accepted. Use the slider to select the amount.</p>
                        </div>
                        <Slider handleLoanAmount={handleLoanAmount} loanAmount={loanAmount}/>
                        <div className="d-flex">
                            <button type="button" className="btn btn-light mt-3 me-3" onClick={() => handleBack()}>Back</button>
                            <button type="button" class="btn btn-primary mt-3" onClick={() => {handleForward()}}>Continue</button>
                        </div>
                    </Card.Body>
                </Card>
                :<Card className="col-10 col-md-8">
                    <Card.Body className="d-flex flex-column align-items-center p-5">
                        <div className="d-flex flex-column align-items-center">
                            <p className='fs-4 fw-bold'>Please wait</p>
                            <p className="text-center">Your application is being processed.</p>
                        </div>
                    </Card.Body>
                </Card>
            }


        </div>
    );
}

export default LoanCard;