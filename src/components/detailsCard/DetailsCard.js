import Card from 'react-bootstrap/Card';
import { useForm } from 'react-hook-form';

function DetailsCard({ handleForward, handleBack, handleSubmitForm }) {

    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <div className="flex-grow-1 d-flex flex-column align-items-center">
            <Card className="col-10 col-md-8">
                <Card.Body className="d-flex flex-column p-3 p-md-5">
                    <div className="d-flex flex-column align-items-center">
                        <p className='fs-4 fw-bold'>Personal details</p>
                        <p>Enter your personal details into the form.</p>
                    </div>

                    <form className="d-grid gap-3" onSubmit={handleSubmit((data) => {
                        handleSubmitForm(data);
                        handleForward();
                    })}>
                        <input {...register("name", { required: "Name is required" })} id="name" className="form-control" placeholder="Nombre" />

                        <input {...register("surname", { required: "Surname is required" })} id="surname" className="form-control" placeholder="Apellido" />

                        <input {...register("phone", { required: "Phone is required" })} id="phone" className="form-control" placeholder="Telefono" />

                        <select {...register("idType", { required: "Type of identification is required" })} id="idtype" className="form-control">
                            <option value="" selected>Tipo identificación</option>
                            <option value="pasaporte">Pasaporte</option>
                            <option value="cédula o otro identificación oficial">Otro identificación oficial</option>
                        </select>
                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn btn-light mt-3 me-3" onClick={() => handleBack()}>Atrás</button>
                            <input type="submit"value="Continuar"  className="btn btn-primary mt-3" />
                        </div>
                    </form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default DetailsCard;