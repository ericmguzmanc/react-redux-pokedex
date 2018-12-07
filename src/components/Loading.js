import React from 'react';
import './styles/Loading.css';

const Loading = ({ isLoading }) => {
  
  if(typeof isLoading != "undefined") {
    if(!isLoading) {
      return null;
    }
  }

  return(
    <div className="pokeball" style={{position: 'absolute', marginTop: '-150px'}}>
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