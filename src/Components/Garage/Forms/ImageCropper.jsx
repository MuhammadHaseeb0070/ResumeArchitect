import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from './cropImage';

const ImageCropper = ({ imageSrc, onCropComplete, onClose }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleCrop = useCallback(async () => {
    setIsLoading(true);
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      onCropComplete(croppedImage);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }, [imageSrc, croppedAreaPixels, onCropComplete]);

  return (
    <div className="absolute px-5 font-poppins inset-0 bg-gray-900 bg-opacity-20 backdrop-blur-sm flex flex-col justify-center items-center z-50 rounded-md">
      <div className="w-full rounded-md border-2 p-2">
        <h3 className="w-full text-center text-4xl text-black py-4 font-semibold">Crop Image</h3>
        <div className="rounded-md p-4" style={{ position: 'relative', padding: '4px', width: '100%', height: '400px' }}>
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={1}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={handleCropComplete}
          />
        </div>
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 rounded-md">
            <div className="w-16 h-16 border-4 border-t-4 border-white border-opacity-30 border-solid rounded-full animate-spin"></div>
          </div>
        )}
        <div className="flex flex-row-reverse justify-between mt-4">
          <button
            type="button"
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
            onClick={handleCrop}
            disabled={isLoading}
          >
            Crop
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
            onClick={onClose}
            disabled={isLoading}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCropper;
