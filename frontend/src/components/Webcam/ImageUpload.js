import React, { useState } from 'react'
import { Await } from 'react-router-dom';

const ImageUpload = () => {
    
    const [file, setFile] = useState(null);

    const handleChange = (event) => {
        setFile(event.target.files[0]);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('image', file);

        try{
            const response = await fetch('https:', {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }

        // console.log(file);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" accept='image/*' onChange={handleChange} />
            <button type="submit">Upload</button>
        </form>
    );
};

export default ImageUpload