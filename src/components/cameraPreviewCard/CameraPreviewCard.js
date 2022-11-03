function CameraPreviewCard({ dataUri, isFullscreen  }) {
    let classNameFullscreen = isFullscreen ? 'demo-image-preview-fullscreen' : '';

    return (
        <div className={'demo-image-preview d-flex flex-column' + classNameFullscreen}>
        <img src={dataUri} />
      </div>
    );
}

export default CameraPreviewCard;