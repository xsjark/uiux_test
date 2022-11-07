import Card from 'react-bootstrap/Card';

function FinalizeCard({ handleForward, handleBack, formData, photoData, loanAmount }) {

    return (
        <div className="flex-grow-1 d-flex flex-column align-items-center">
            <Card className="col-10 col-md-8">
                <Card.Body className="d-flex flex-column p-3 p-md-5">
                    <div className="d-flex flex-column align-items-center">
                        <p className='fs-4 fw-bold'>Finalize</p>
                        <p className="text-center">Confirm your information.</p>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <img src={photoData} width="70%" className="my-3"/>

                        <div className="d-flex justify-content-between col-8">
                            <p>Nombre</p>
                            <p>{formData.name}</p>
                        </div>
                        <div className="d-flex justify-content-between col-8">
                            <p>Apellido</p>
                            <p>{formData.surname}</p>
                        </div>
                        <div className="d-flex justify-content-between col-8">
                            <p>Telefono</p>
                            <p>{formData.phone}</p>
                        </div>
                        <div className="d-flex justify-content-between col-8">
                            <p>Amount</p>
                            <p>${loanAmount}</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                            <button type="button" className="btn rounded-pill btn-light mt-3 me-3" onClick={() => handleBack()}>Back</button>
                            <button type="button" class="btn rounded-pill btn-primary mt-3" onClick={() => handleForward()}>Confirm</button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default FinalizeCard;