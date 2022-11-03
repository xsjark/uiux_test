import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import CameraPreviewCard from '../cameraPreviewCard/CameraPreviewCard';

function CameraCard({ handleForward, handleBack }) {
    const [dataUri, setDataUri] = useState('');

    function handleTakePhotoAnimationDone(dataUri) {
        console.log('takePhoto');
        setDataUri(dataUri);
    }
    const isFullscreen = false;
    return (
        <div className="flex-grow-1 d-flex flex-column align-items-center">
            <Card className="col-8">
                {
                    (dataUri)
                        ? <Card.Body className="d-flex flex-column p-5">
                            <CameraPreviewCard dataUri={dataUri} isFullscreen={isFullscreen} />
                            <div className="d-flex justify-content-end">
                                <button type="button" class="btn btn-light mt-3 me-3" onClick={() => setDataUri()}>Back</button>
                                <button type="button" class="btn btn-primary mt-3" onClick={() => handleForward()}>Continue</button>
                            </div>
                        </Card.Body>
                        : <Card.Body className="d-flex flex-column p-5">
                            <Camera onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
                                isFullscreen={isFullscreen}
                            />
                            <div className="d-flex justify-content-end">
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