import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DetailsCard({ handleClick, handleBack }) {
    return (
        <div className="flex-grow-1 d-flex flex-column align-items-center">
            <Card className="col-10">
                <Card.Body className="d-flex flex-column p-5">
                    <div className="d-flex flex-column align-items-center">
                        <p className='fs-4 fw-bold'>Personal details</p>
                        <p>Start process. Your application may or may not be accepted.</p>
                    </div>
                    <label for="inputPassword5" class="form-label">Nombre</label>
                    <input type="text" id="name" class="form-control" aria-describedby="passwordHelpBlock" />

                    <label for="inputPassword5" class="form-label">Telefono</label>
                    <input type="text" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" />

                    <label for="exampleFormControlSelect1" class="form-label">Example select</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>

                    <button type="button" class="btn btn-primary mt-3" onClick={() => handleClick()}>Continue</button>
                    <button type="button" class="btn btn-light mt-3" onClick={() => handleBack()}>Back</button>

                </Card.Body>
            </Card>
        </div>
    );
}

export default DetailsCard;