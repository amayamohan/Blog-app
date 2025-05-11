// import React from 'react'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Productcard =()=> {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try{

                
            const response = await fetch('http://localhost:5000/api/products');
            const data = await response.json();
            setProducts(data);
            }catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);



  return (
    <div>
        <section id="products" className="container my-5">
                <h2 className="text-center mb-4">Let's Explore ✈️</h2>
                <div className="row">
                    {products.map(product => (
                        <div className="col-md-4" key={product._id}>
                            <div className="card mb-4 shadow-sm">
                                <img src={product.image || 'default_image.jpg'} className="card-img-top" alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.details ? product.details : 'N/A'}</p>
                                    <Link to={`/product/${product._id}`} className="btn btn-primary">View More</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        
            
    </div>
  )
}

export default Productcard