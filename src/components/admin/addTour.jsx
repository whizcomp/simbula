import React, { useState } from "react";

export default function addTour() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div>
      <h1>Add a tour</h1>
      <div className="image-input-container">
        {selectedImage ? (
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
        ) : (
          <label htmlFor="file-input" className="file-input-label">
            <img src="path_to_icon_image" alt="Icon" className="icon" />
            Choose an Image
            <input
              type="file"
              id="file-input"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
        )}
      </div>
    </div>
  );
}
