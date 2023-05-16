import React, { useState } from 'react'

const ImageUpload = () => {
    
    const [file, setFile] = useState(null);

    const handleChange = (event) => {
        setFile(event.target.files[0]);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(file);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" accept='image/*' onChange={handleChange} />
            <button type="submit">Upload</button>
        </form>
    );
};

export default ImageUpload