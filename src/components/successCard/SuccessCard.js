import Card from 'react-bootstrap/Card';

function SuccessCard({handleRestart, loanAmount}) {

    return (
        <div className="flex-grow-1 d-flex flex-column align-items-center">
            <Card className="col-10 col-md-8">
                <Card.Body className="d-flex flex-column p-3 p-md-5">
                    <div className="d-flex flex-column align-items-center">
                        <p className='fs-4 fw-bold'>¡Felicidades!</p>
                        <p>Solicitud exitosa de ${loanAmount}.</p>
                    </div>
                    <div className="d-flex justify-content-center">
                            <button type="button" class="btn btn-primary mt-3" onClick={() => handleRestart()}>Nuevo préstamo</button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default SuccessCard;