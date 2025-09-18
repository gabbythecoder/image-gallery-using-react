import "./LargeImage.css";

export default function LargeImage({ src, alt, title }) {
    return (
        <div className="large-image-container">
            <p>{title}</p>
            <img src={src} alt={alt} className="large-image"/>
        </div>
    );
};