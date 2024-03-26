import React from 'react';

const DetailBox = ({ title, description }) => (
  <div className="detail-box">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default DetailBox;
