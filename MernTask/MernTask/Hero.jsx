import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import heroImage from '../assets/caroseal.jpg';
import paydayImage from '../assets/undergif.jpg'; // ✅ Import your new image

const Hero = () => {
  return (
    <>
      <div className="bg-light py-5">
        <div className="container d-flex flex-column flex-md-row align-items-center">
          <div className="text-center text-md-start mb-4 mb-md-0 me-md-5">
            <h1 className="display-4 fw-bold">Upgrade Your Style</h1>
            <p className="lead">Trendy Fashion Collections for Men, Women & Kids</p>
            <a href="/shop" className="btn btn-dark btn-lg mt-3">Shop Now</a>
          </div>
          <div className="text-center">
            <img
              src={heroImage}
              alt="Fashion Banner"
              className="img-fluid rounded"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
      </div>
      <div className="container my-4">
        <img
          src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/7/10/9a7d7fe6-cb25-46a7-89ce-5fad3577ba5a1752150319128-Bank-Strip--3-.gif"
          alt="Bank Offers"
          className="img-fluid w-100 rounded"
        />
      </div>

      <div className="container my-4">
        <img
          src={paydayImage}
          alt="Payday Perks"
          className="img-fluid w-100"
        />
      </div>
    </>
  );
};

export default Hero;
