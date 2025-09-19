export default function Thumbnail({ src, alt, onClick }) {
    return (
        <>
            <button onClick={onClick} className="thumbnail" aria-label={`Select image: ${alt}`}>
                <img src={src} alt={alt}/>
            </button>
        </>
    )
}