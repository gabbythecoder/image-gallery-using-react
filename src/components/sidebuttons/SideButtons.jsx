import "./SideButtons.css";

export default function SideButtons({ selectedImageIndex, setSelectedImageIndex, imagesLength }) {
    function handlePreviousImage() {
        if (selectedImageIndex > 0) {
            setSelectedImageIndex(selectedImageIndex - 1);
        }
    }

    function handleNextImage() {
        if (selectedImageIndex < imagesLength - 1) {
            setSelectedImageIndex(selectedImageIndex + 1);
        }
    }

    return (
        <div className="side-buttons">
            <button 
                onClick={handlePreviousImage} 
                aria-label="Previous Image" 
                disabled={selectedImageIndex === 0}
                >
                <i className="fa-solid fa-arrow-left"></i>
            </button>

            <button 
                onClick={handleNextImage} 
                aria-label="Next Image"
                disabled={selectedImageIndex === imagesLength - 1}
                >
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
    )
}