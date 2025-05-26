import React from 'react';
import './PhotoGallery.css';

const PhotoGallery = () => {
  return (
    <div className="feature-box">
      <h2>📸 Photo Gallery</h2>
      <div className="photo-gallery">      
        <img src="/images/facetime1.jpeg" alt="FaceTime" />
      </div>
      <p style={{ textAlign: 'center', marginTop: '10px' }}> My fav photo this month</p>
    </div>
   
  );
};

export default PhotoGallery;