import "./LargeImage.css";

export default function LargeImage({ src, alt }) {
    return (
        <div className="large-image-container">
            <img src={src} alt={alt} className="large-image"/>
        </div>
    );
};