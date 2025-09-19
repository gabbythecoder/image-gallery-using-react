import "./App.css";
import { useState, useEffect } from "react";
import ThumbnailImages from "./components/thumbnailimages/ThumbnailImages.jsx";
import LargeImage from "./components/largeimage/LargeImage.jsx";
import SearchBar from "./components/searchbar/SearchBar.jsx";
import SideButtons from "./components/sidebuttons/SideButtons.jsx";

export default function App() {
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const [query, setQuery] = useState("Philippines"); //this is the default

  useEffect(() => {
    async function getImages() {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}&per_page=8`
      );
      const data = await response.json();
      setImages(data.results);

      //automatically display the first image 
      if (data.results.length > 0) {
        setSelectedImageIndex(0);
      } else {
        setSelectedImageIndex(null);
      }
    }
    getImages();
  }, [query]);
  //testing to see if it logs on console
  // console.log(images); 

  //keyboard navigation for side buttons
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "ArrowLeft" && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    } else if (event.key === "ArrowRight" && selectedImageIndex < images.length -1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  }

  window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, images.length]);

  function handleSwitchImage(index) {
    setSelectedImageIndex(index);
  }

  return (
    <>
      <h1 className="main-title">Gallery</h1>

      <section>
        <SearchBar query={query} setQuery={setQuery} />
      </section>

      <section>
        <ThumbnailImages images={images} onSelectImage={handleSwitchImage} />
      </section>

      <section>

        {selectedImageIndex !== null && (
          <div className="image-button-container">
        <SideButtons 
                selectedImageIndex={selectedImageIndex} 
                setSelectedImageIndex={setSelectedImageIndex} 
                imagesLength={images.length}
            />

          <LargeImage
            src={images[selectedImageIndex].urls.regular}
            alt={images[selectedImageIndex].alt_description}
            selectedImageIndex={selectedImageIndex}
            setSelectedImageIndex={setSelectedImageIndex}
            imagesLength={images.length}
          />
          </div> 
        )}

      </section>
    </>
  );
}
