import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FinalizeCard({ handleRestart }) {
    const [isDisplayed, setIsDisplayed] = useState(false);

    useEffect(() => {
    setInterval(() => {
        setIsDisplayed(true);
    }, 5000);
    }, []);
    return (
        <div className="flex-grow-1 d-flex flex-column align-items-center">

            {isDisplayed 
            ? <Card className="col-10">
                <Card.Body className="d-flex flex-column align-items-center p-5">
                    <div className="d-flex flex-column align-items-center">
                        <p className='fs-4 fw-bold'>Congratulations!</p>
                        <p>Your application has been accepted.</p>
                    </div>
                    <button type="button" class="btn btn-light mt-3 w-100" onClick={() => handleRestart()}>Start over</button>
                </Card.Body>
            </Card>
            : <Card className="col-10">
            <Card.Body className="d-flex flex-column align-items-center p-5">
                <div className="d-flex flex-column align-items-center">
                    <p className='fs-4 fw-bold'>Please wait</p>
                    <p>Your application is being processed.</p>
                </div>
            </Card.Body>
        </Card>
            }

            
        </div>
    );
}

export default FinalizeCard;