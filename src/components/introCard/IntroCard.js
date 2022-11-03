import Card from 'react-bootstrap/Card';

function IntroCard({handleForward}) {
    return (
        <div className="flex-grow-1 d-flex flex-column align-items-center ">
            <Card className="col-10 col-md-8">
                <Card.Body className="d-flex flex-column align-items-center p-3 p-md-5">
                <p className='fs-4 fw-bold'>Start</p>
                <p>Start process. Your application may or may not be accepted.</p>
                <button type="button" class="btn btn-primary mt-3" onClick={() => handleForward()}>Continue</button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default IntroCard;