import React, { useState } from "react";
import "./App.css";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
const App = () => {
  const [images, setImages] = useState([
    { id: 1, src: img1, alt: "Image 1" },
    { id: 2, src: img2, alt: "Image 2" },
    { id: 3, src: img3, alt: "Image 3" },
  ]);
  const [droppedImages, setDroppedImages] = useState([]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("id", id.toString());
  };

  const handleDrop = (e) => {
    const id = parseInt(e.dataTransfer.getData("id"));
    const image = images.find((img) => img.id === id);
    if (image) {
      setDroppedImages([...droppedImages, image]);
      setImages(images.filter((img) => img.id !== id));
    }
  };

  return (
    <div className="App">
      <h1>Drag and Drop Images</h1>
      <div className="container">
        <div className="images">
          <h2>Available Images</h2>
          {images.map((image) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              draggable="true"
              onDragStart={(e) => handleDragStart(e, image.id)}
            />
          ))}
        </div>
        <div
          className="dropzone"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e)}
        >
          <h2>Drop Zone</h2>
          {droppedImages.map((image) => (
            <img key={image.id} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
