import { useState } from "react";
import Upload from "../Assets/Icons/cloud-computing.png";

export default function ImageUploader() {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file) {
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      <label htmlFor="fileInput">
        {uploadedImage ? (
          <img
            src={uploadedImage}
            alt="Uploaded"
            style={{ width: "150px", height: "150px", borderRadius: "50%" }}
          />
        ) : (
          <div
            style={{
              width: "150px",
              height: "150px",
              border: "2px solid white",
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "24px",
              cursor: "pointer",
              borderRadius: "50%",
              background: "rgb(0, 103, 163)",
            }}>
            <img src={Upload} alt="" />
          </div>
        )}
      </label>
    </div>
  );
}
