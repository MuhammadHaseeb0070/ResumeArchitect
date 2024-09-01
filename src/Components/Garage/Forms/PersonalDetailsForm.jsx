import React, { useState } from "react";
import "./form.css";
import ImageUpload from "./ImageUpload"; // Component that handles the image upload
import ImageCropper from "./ImageCropper"; // New cropping component

function PersonalDetailsForm({
  setform,
  personalDetails,
  imageData,
  setImageData,
  onChange,
}) {
  const [isEditing, setisEditing] = useState(false);
  const [showCropper, setShowCropper] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageSelect = (imagePath) => {
    setImageSrc(imagePath);
    setImageData(imagePath);
    onChange('profileImage' , imagePath)
    if (setisEditing) {
    } else {
      setShowCropper(true); // Show the cropper modal when an image is selected
    }
  };

  const handleCropComplete = (croppedImage) => {
    setImageData(croppedImage);
    onChange("profileImage", croppedImage);
    setShowCropper(false); // Close the cropper modal after cropping
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (["firstName", "lastName", "position"].includes(name)) {
      onChange(name, value);
    } else if (["email", "phone", "location"].includes(name)) {
      onChange("contact", { ...personalDetails.contact, [name]: value });
    } else if (name === "description") {
      onChange("profile", { ...personalDetails.profile, [name]: value });
    }
  };

  return (
    <form className="p-6 bg-white shadow-md rounded-lg w-full max-w-xl mx-auto scale-90 flex flex-col">
      <h4 className="formHeader w-full text-center text-2xl font-semibold">
        Personal Details
      </h4>
      <div className="personalFormContainer w-full flex flex-col items-center justify-center">
        <div className="Header w-full flex justify-between items-center">
          <div className="w-full self-end">
            <div className="inputEntry w-full flex flex-col items-start justify-center mt-3 mb-1">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                className="inputField w-5/6 outline-none rounded-sm h-8 pl-2 border-2"
                value={personalDetails.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="inputEntry w-full flex flex-col items-start justify-center mt-2 mb-1">
              <label htmlFor="lastName w-full justify-self-start">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                className="inputField w-5/6 outline-none rounded-sm h-8 pl-2 border-2 "
                value={personalDetails.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <ImageUpload
          imageData={imageData}
            setisEditing={setisEditing}
            setShowCropper={setShowCropper}
            onImageSelect={handleImageSelect}
          />
        </div>
        <div className="inputEntry w-full flex flex-col items-start justify-center mt-2 mb-1">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            name="position"
            className="inputField w-5/6 outline-none rounded-sm h-8 pl-2 border-2"
            value={personalDetails.position}
            onChange={handleChange}
          />
        </div>
        <div className="inputEntry w-full flex flex-col items-start justify-center mt-2 mb-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="inputField w-5/6 outline-none rounded-sm h-8 pl-2 border-2"
            value={personalDetails.contact.email}
            onChange={handleChange}
          />
        </div>
        <div className="inputEntry w-full flex flex-col items-start justify-center mt-2 mb-1">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            className="inputField w-5/6 outline-none rounded-sm h-8 pl-2 border-2"
            value={personalDetails.contact.phone}
            onChange={handleChange}
          />
        </div>
        <div className="inputEntry w-full flex flex-col items-start justify-center mt-2 mb-1">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            className="inputField w-5/6 outline-none rounded-sm h-8 pl-2 border-2"
            value={personalDetails.contact.location}
            onChange={handleChange}
          />
        </div>
        <div className="inputEntry w-full flex flex-col items-start justify-center mt-2 mb-1">
          <label htmlFor="description">Profile Description</label>
          <textarea
            placeholder="Describe yourself"
            type="text"
            name="description"
            className="inputField w-full outline-none rounded-sm pl-2 border-2"
            value={personalDetails.profile.description}
            onChange={handleChange}
            rows={6}
          />
        </div>
      </div>
      <button
        className="goNextButton bg-transparent self-end mt-4 hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded"
        onClick={() => setform(1)}
      >
        Next
      </button>

      {showCropper && (
        <>
          <div className="w-full h-full">
            <ImageCropper
              imageSrc={imageSrc}
              onCropComplete={handleCropComplete}
              onClose={() => setShowCropper(false)}
            />
          </div>
        </>
      )}
    </form>
  );
}

export default PersonalDetailsForm;
