import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import CameraPreviewCard from '../cameraPreviewCard/CameraPreviewCard';

function CameraCard({ handleClick }) {
    function handleTakePhoto (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
  }

  const [dataUri, setDataUri] = useState('');

  function handleTakePhotoAnimationDone (dataUri) {
    console.log('takePhoto');
    setDataUri(dataUri);
  }
  const isFullscreen = false;
    return (
        <div className="flex-grow-1 d-flex flex-column align-items-center">
            <Card className="col-8">
                <Card.Body className="d-flex flex-column p-5">
                <div>
      {
        (dataUri)
          ? <CameraPreviewCard dataUri={dataUri}
            isFullscreen={isFullscreen}
          />
          : <Camera onTakePhotoAnimationDone = {handleTakePhotoAnimationDone}
            isFullscreen={isFullscreen}
          />
      }
    </div>                </Card.Body>
            </Card>
        </div>
    );
}

export default CameraCard;