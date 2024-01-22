import React from "react";
import loading from './../../assets/image/loading.gif'
import './loading.css'

const Loading = () => {
  return (
    <div className="loading-position">
      <div className="lds-roller d-flex justify-content-center align-items-center">
        <img className="loading-img" src={loading} />
      </div>
    </div>
  );
};

export default Loading;