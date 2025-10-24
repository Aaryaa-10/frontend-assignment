import { useState } from "react";
//import './style.css';

function GalleryWidget() {
  const [images, setImages] = useState([
    "https://picsum.photos/200/200?1",
    "https://picsum.photos/200/200?2",
    "https://picsum.photos/200/200?3",
  ]);

  const addImage = () => {
    const newImage = `https://picsum.photos/200/200?random=${Math.random()}`;
    setImages([...images, newImage]);
  };

  return (
    <div className="widget">
      <div className="gallery-header">
        <h2>Gallery</h2>
        <button onClick={addImage} className="add-btn">+ Add Image</button>
      </div>
      <div className="gallery">
        {images.map((img, i) => (
          <img key={i} src={img} alt="Gallery" />
        ))}
      </div>
    </div>
  );
}

export default GalleryWidget;
