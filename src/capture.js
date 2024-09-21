function createCaptureFunc(video){
    let _video = video;
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    let captureCount = 0;
    
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;

    let downloadLink = document.createElement('a');
    let downloadCount = 0;
    
    return {
        getDataUrl: () => {
            if(ctx === null){
                return '';
            }
            ctx.drawImage(_video, 0, 0, canvas.width, canvas.height);
            return canvas.toDataURL();
        },
        download: (dataUrl, fileName = null) => {
            fileName = fileName ?? downloadCount;
            downloadCount += 1;

            downloadLink.download = fileName;
            downloadLink.href = dataUrl;
            downloadLink.click();
        }
    }
}

export default createCaptureFunc;