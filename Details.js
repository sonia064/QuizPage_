import React from 'react';
import './Details.css'; 

const Details = () => {
  return (
    <div className="details-page">
      <h2>Details Page</h2>
      <div className="details-container">
        <div className="detail">
          <h3>Machine Learning</h3>
          <p>Add graphical representation for Machine Learning here.</p>
        </div>
        <div className="detail">
          <h3>Deep Learning</h3>
          <p>Add graphical representation for Deep Learning here.</p>
        </div>
        <div className="detail">
          <h3>Vision Transformer</h3>
          <p>Add graphical representation for Vision Transformer here.</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
