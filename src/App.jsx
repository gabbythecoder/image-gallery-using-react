//!!!! split your code into components

//-start with your wireframe: you build your React client based on the UI 

import "./App.css";
import { useState, useEffect } from "react";

export default function App() {

  const [images, setImages] = useState([]);

  useEffect(() => {
    async function getImages() {
      const response = await fetch(import.meta.env.VITE_IMAGE_API);
      const data = await response.json();
      setImages(data);
  }
    getImages();
  }, []);
  console.log(images); //testing to see if it logs on console 


  //state
  //- state to store API image data
  //- state to store the index value (navigate between images)

  //effect
  //- fetch data from an API
  //- once the data is fetched, update the image data state to store the fetched data

  //function to control what index we are currently clicking on 
  //the index represents a specific image object in the array 

  // function handleSwitchImage(index) {
  //   setIndex(index)
  // }

  return (
    <>
      <h1>Gallery</h1>
    </>
  )
}
