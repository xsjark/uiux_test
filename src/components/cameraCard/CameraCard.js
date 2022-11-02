import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import CameraPreviewCard from '../cameraPreviewCard/CameraPreviewCard';

function CameraCard({ handleClick, handleBack }) {
    const [dataUri, setDataUri] = useState('');

    function handleTakePhotoAnimationDone(dataUri) {
        console.log('takePhoto');
        setDataUri(dataUri);
    }
    const isFullscreen = false;
    return (
        <div className="flex-grow-1 d-flex flex-column align-items-center">
            <Card className="col-10">
                        {
                            (dataUri)
                                ? <Card.Body className="d-flex flex-column p-5">
                                <CameraPreviewCard dataUri={dataUri} isFullscreen={isFullscreen} />
                                <button type="button" class="btn btn-primary mt-3" onClick={() => handleClick()}>Continue</button>
                                <button type="button" class="btn btn-light mt-3 w-100" onClick={() => handleBack()}>Back</button>
                                </Card.Body>
                                : <Card.Body>
                                <Camera onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
                                    isFullscreen={isFullscreen}
                                />
                                <button type="button" class="btn btn-light mt-3 w-100" onClick={() => handleBack()}>Back</button>
                                </Card.Body>
                        }
            </Card>
        </div>
    );
}

export default CameraCard;