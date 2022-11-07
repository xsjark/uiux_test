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
                            <p className='fs-4 fw-bold'>¿Cuánto necesitas?</p>
                            <p className="text-center">Elige la cantidad del préstamo.</p>
                        </div>
                        <Slider handleLoanAmount={handleLoanAmount} loanAmount={loanAmount}/>
                        <div className="d-flex">
                            <button type="button" className="btn rounded-pill btn-light mt-3 me-3" onClick={() => handleBack()}>Atrás</button>
                            <button type="button" class="btn rounded-pill btn-primary mt-3" onClick={() => {handleForward()}}>Continuar</button>
                        </div>
                    </Card.Body>
                </Card>
                :<Card className="col-10 col-md-8">
                    <Card.Body className="d-flex flex-column align-items-center p-5">
                        <div className="d-flex flex-column align-items-center">
                            <p className='fs-4 fw-bold'>Por favor, espera</p>
                            <p className="text-center">Estamos procesando su información.</p>
                        </div>
                    </Card.Body>
                </Card>
            }


        </div>
    );
}

export default LoanCard;