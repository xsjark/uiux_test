import ProgressBar from 'react-bootstrap/ProgressBar';

function Stepper({step}) {
    return (
        <div class="col-10 col-md-8 align-self-center my-5">
            <ProgressBar now={step/5*100 + 1/5*100} />
        </div>
    );
}

export default Stepper;
