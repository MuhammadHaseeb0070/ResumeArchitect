import React, { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const ImageUpload = ({ onImageSelect, setShowCropper, setisEditing, imageData }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check file size (1 MB = 1048576 bytes)
      if (file.size > 1048576) {
        setError('File size exceeds 1 MB.');
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        onImageSelect(reader.result);
        setError('');
      };
    }
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
    onImageSelect(null);
  };

  return (
    <div className="image-upload flex flex-col items-center font-poppins">
      {!selectedImage ? (
        <>
          <label className="cursor-pointer bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
            Upload Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
          <p className="mt-2 text-gray-500">No file selected</p>
          {error && <p className="mt-2 text-red-500">{error}</p>}
        </>
      ) : (
        <div className="flex flex-col items-center">
          <img
            src={imageData}
            alt="Selected"
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setShowCropper(true)}
              className="bg-blue-500 text-base text-white font-semibold p-4 flex justify-center items-center rounded hover:bg-blue-600 h-8"
            >
              <FiEdit className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleDeleteImage}
              className="bg-red-500 text-white font-semibold p-4 rounded hover:bg-red-600 h-8 flex justify-center items-center"
            >
              <MdOutlineDeleteOutline className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
