import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newProduct = { title, details, image };

        try {
            const response = await fetch('http://localhost:5000/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            });

            if (!response.ok) {
                throw new Error('Failed to create product');
            }

            // Clear the form after submission

            setTitle('');
            setDetails('');
            setImage('');
            alert('Product created successfully!');
            navigate('/')
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to create product');
        }
    };

    return (
        <div className="container my-5">
            <h2>Create New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="details" className="form-label">Details</label>
                    <textarea
                        className="form-control"
                        id="details"
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Image URL</label>
                    <input
                        type="text"
                        className="form-control"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Create Product</button>
            </form>
        </div>
    );
};

export default ProductForm;