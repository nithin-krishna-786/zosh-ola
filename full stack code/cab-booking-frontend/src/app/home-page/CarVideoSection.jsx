import React from "react";
import "./CarVideoSection.css";

const CarVideoSection = () => {
  return (
    <div className="carVideoSection mt-32">
      <h1 className="text-5xl font-bold my-10 text-center">India's most ambitious car</h1>
      <div>
        <video autoPlay controls loop  style={{ width: '100%', height: '100%' }} >
          <source
            src="https://res.cloudinary.com/dnbw04gbs/video/upload/v1686548750/pexels-pavel-danilyuk-6157781-1280x720-30fps_ulbgjb.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default CarVideoSection;
