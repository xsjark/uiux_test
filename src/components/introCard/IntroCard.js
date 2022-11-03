import Card from 'react-bootstrap/Card';

function IntroCard({handleForward}) {
    return (
        <div className="flex-grow-1 d-flex flex-column align-items-center ">
            <Card className="col-10 col-md-8">
                <Card.Body className="d-flex flex-column align-items-center p-3 p-md-5">
                <p className='fs-4 fw-bold'>Iniciar</p>
                <p>Va a pasar por un proceso de seleccion. Su credito puede o no ser aprobado.</p>
                <button type="button" class="btn btn-primary mt-3" onClick={() => handleForward()}>Continuar</button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default IntroCard;