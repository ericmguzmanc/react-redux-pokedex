import React from 'react';
import './styles/Loading.css';

const Loading = () => {
  return(
    <div className="pokeball">
      <div className="upper">
        <div className="inner"></div>
      </div>
      <div className="middle"></div>
      <div className="lower">
        <div className="inner"></div>
      </div>
    </div>
  );
};

export default Loading;