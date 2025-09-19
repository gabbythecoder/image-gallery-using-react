import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ query, setQuery }) {
    const [inputValue, setInputValue] = useState(query);

    function handleInputChange(event) {
        setInputValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setQuery(inputValue);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="search-bar">
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder= "Search for photos..."
                className="input-box"
                />
            </form>
        </div>
    )
}