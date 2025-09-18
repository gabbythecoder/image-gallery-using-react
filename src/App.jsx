import "./App.css";
import { useState, useEffect } from "react";
import ThumbnailImages from "./components/ThumbnailImages.jsx";
import LargeImage from "./components/LargeImage.jsx";

export default function App() {

  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    async function getImages() {
      const response = await fetch(import.meta.env.VITE_IMAGE_API);
      const data = await response.json();
      setImages(data);
  }
    getImages();
  }, []);
  console.log(images); //testing to see if it logs on console 

  function handleSwitchImage(index) {
    setSelectedImageIndex(index);
  } 

  return (
    <>
      <h1>Gallery</h1>
      <section>
        <ThumbnailImages images={images} onSelectImage={handleSwitchImage}/>
      </section>

      {selectedImageIndex !== null && (
        <LargeImage 
            src={images[selectedImageIndex].url}
            alt={images[selectedImageIndex].alt}
            title={images[selectedImageIndex].title}
            
          />
      )}

    </>
  )
}
