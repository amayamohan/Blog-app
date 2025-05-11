import React from 'react'
import logo from '../logo.jpg';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
        <a class="navbar-brand" href="#">
            <img src={logo} alt="E-shop Logo" style={{maxWidth:'100%' }}></img>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Products</a>
                    {/* <Link class="nav-link" to="/productDetails">Products</Link> */}

                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Cart</a>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/create">Create Blog</Link>
                </li>
            </ul>
        </div>
    </nav>
    </div>
  )
}
export default Navbar