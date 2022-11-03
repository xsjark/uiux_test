import './stepper.css'
function Stepper() {
    return (
        <div id="stepper_container" className=" d-flex flex-row justify-content-around col-8 align-self-center">
            <div className="col-sm d-flex flex-column align-items-center">
                <p className="text-center">1.</p>
                <p className="text-center d-none d-md-block">Start process</p>
            </div>
            <div className="col-sm d-flex flex-column align-items-center">
                <p className="text-center">2.</p>
                <p className="text-center d-none d-md-block">Personal details</p>
            </div>
            <div className="col-sm d-flex flex-column align-items-center">
                <p className="text-center">3.</p>
                <p className="text-center d-none d-md-block">Confirm identity</p>
            </div>
            <div className="col-sm d-flex flex-column align-items-center">
                <p className="text-center">4.</p>
                <p className="text-center d-none d-md-block">Choose amount</p>
            </div>
            <div className="col-sm d-flex flex-column align-items-center">
                <p className="text-center">5.</p>
                <p className="text-center d-none d-md-block">Finalize</p>
            </div>
        </div>
    );
}

export default Stepper;
