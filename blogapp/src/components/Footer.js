import React from 'react'

function Footer() {
  return (
    <div>
        <footer class="bg-secondary text-white mt-4">
    <div class="container" >
        <div class="row py-1">
            <div class="col-md-4">
                <h5>About Us</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="col-md-4">
                <h5>Quick Links</h5>
                <ul class="list-unstyled">
                    <li><a href="#" class="text-white">Home</a></li>
                    <li><a href="#" class="text-white">Places</a></li>
                    <li><a href="#" class="text-white">Contact</a></li>
                    <li><a href="#" class="text-white">Cart</a></li>
                </ul>
            </div>
            <div class="col-md-4">
                <h5>Follow Us</h5>
                <a href="#" class="text-white mr-2"><i class="fab fa-facebook-f"></i></a><br></br>
                <a href="#" class="text-white mr-2"><i class="fab fa-twitter"></i></a><br></br>
                <a href="#" class="text-white"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
        <div class="text-center py-3">
            <p>&copy; 2024 ShopName. All rights reserved.</p>
        </div>
    </div>
</footer>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"></link>
    </div>
  )
}

export default Footer