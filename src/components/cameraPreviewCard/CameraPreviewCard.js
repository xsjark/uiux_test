import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Camera from 'react-html5-camera-photo';

function CameraPreviewCard({ handleClick, dataUri, isFullscreen  }) {
    let classNameFullscreen = isFullscreen ? 'demo-image-preview-fullscreen' : '';

    return (
        <div className={'demo-image-preview ' + classNameFullscreen}>
        <img src={dataUri} />
      </div>
    );
}

export default CameraPreviewCard;