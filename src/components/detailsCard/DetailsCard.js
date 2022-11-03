import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useForm } from 'react-hook-form';

function DetailsCard({ handleForward, handleBack }) {

    const {register, handleSubmit, formState: {errors}} = useForm();
    console.log(errors)
    return (
        <div className="flex-grow-1 d-flex flex-column align-items-center">
            <Card className="col-10">
                <Card.Body className="d-flex flex-column p-5">
                    <div className="d-flex flex-column align-items-center">
                        <p className='fs-4 fw-bold'>Personal details</p>
                        <p>Start process. Your application may or may not be accepted.</p>
                    </div>

                    <form onSubmit={handleSubmit((data) => {
                        console.log(data)
                        handleForward()
                    })}>
                    <input {...register("name", {required: "Name is required"})} id="name" className="form-control" placeholder="Nombre"/>

                    <input {...register("surname", {required: "Surname is required"})} id="surname" className="form-control" placeholder="Apellido"/>

                    <input {...register("phone", {required: "Phone is required"})} id="phone" className="form-control" placeholder="Telefono"/>

                    <select {...register("idtype", {required: "Type of identification is required"})}  id="idtype" className="form-control" placeholder="Tipo identificación">
                        <option value="" selected>Open this select menu</option>
                        <option value={1}>Pasaporte</option>
                        <option value={2}>Otro identificación oficial</option>
                    </select>
                    <div>
                        <button type="button" className="btn btn-light mt-3" onClick={() => handleBack()}>Back</button>
                        <input type="submit" className="btn btn-primary mt-3"/>
                    </div>
                    </form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default DetailsCard;