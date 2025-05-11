import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams(); // Get the product id from the URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/products/${id}`);
                if (!response.ok) {
                    throw new Error('Product not found');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };

        fetchProductDetails();
    }, [id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="container my-5">
            <h2 className="text-center">{product.title}</h2>
            <div className="text-center">
                <img src={product.image || 'default_image.jpg'} alt={product.title} className="img-fluid mb-4" style={{ maxHeight: '400px', maxWidth: '100%' }} />
            </div>
            <p>{product.details}</p>
            <a href="/" className="btn btn-secondary">Back to Place</a>
        </div>
    );
};

export default Detail;
