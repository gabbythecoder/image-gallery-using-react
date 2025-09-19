import Thumbnail from "./Thumbnail.jsx";
import "./ThumbnailImages.css";

export default function ThumbnailImages({ images, onSelectImage }) {
  function handleClick(index) {
    onSelectImage(index);
  }

  return (
    <div className="thumbnail-container">
      {images.map((image, index) => (
        <Thumbnail
          key={image.id}
          src={image.urls.thumb}
          alt={image.alt_description}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
