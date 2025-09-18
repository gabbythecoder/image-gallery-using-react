export default function Thumbnail( { src, alt, onClick}) {
    return (
        <>
            <button onClick={onClick} className="thumbnail">
                <img src={src} alt={alt}/>
            </button>
        </>
    )
}