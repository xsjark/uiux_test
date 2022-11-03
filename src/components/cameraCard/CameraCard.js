import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import CameraPreviewCard from '../cameraPreviewCard/CameraPreviewCard';

function CameraCard({ handleForward, handleBack, handleTakePhoto, idType }) {
    const [dataUri, setDataUri] = useState('');

    function handleTakePhotoAnimationDone(dataUri) {
        console.log('takePhoto');
        setDataUri(dataUri);
        handleTakePhoto(dataUri);
    }
    const isFullscreen = false;
    return (
        <div className="flex-grow-1 d-flex flex-column align-items-center">
            <Card className="col-10 col-md-8">
                {
                    (dataUri)
                        ? <Card.Body className="d-flex flex-column p-3 p-md-5">
                            <div className="d-flex flex-column align-items-center">
                                <p className='fs-4 fw-bold'>Confirmacion de identidad</p>
                                <p>Verifique si todo es visible.</p>
                            </div>
                            <CameraPreviewCard dataUri={dataUri} isFullscreen={isFullscreen} />
                            <div className="d-flex justify-content-center">
                                <button type="button" class="btn btn-light mt-3 me-3" onClick={() => setDataUri()}>Back</button>
                                <button type="button" class="btn btn-primary mt-3" onClick={() => handleForward()}>Continue</button>
                            </div>
                        </Card.Body>
                        : <Card.Body className="d-flex flex-column p-3 p-md-5">
                            <div className="d-flex flex-column align-items-center">
                                <p className='fs-4 fw-bold'>Confirmacion de identidad</p>
                                <p>Tome una selfie con su {idType}.</p>
                            </div>
                            <Camera onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
                                isFullscreen={isFullscreen}
                            />
                            <div className="d-flex justify-content-center">
                                <button type="button" className="btn btn-light mt-3 me-3" onClick={() => handleBack()}>Back</button>
                                <button type="button" className="btn btn-primary mt-3" disabled>Continue</button>
                            </div>
                        </Card.Body>
                }
            </Card>
        </div>
    );
}

export default CameraCard;