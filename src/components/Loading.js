import React from 'react';
import './styles/Loading.css';
import { Animated } from 'react-animated-css';

const Loading = ({ isLoading }) => {
  
  if(typeof isLoading != "undefined") {
    if(!isLoading) {
      return null;
    }
  }

  return(
    <Animated animationIn="fadeIn" animationOut="fadeOut">
      <div className="pokeball" style={{position: 'absolute', marginTop: '-150px'}}>
        <div className="upper">
          <div className="inner"></div>
        </div>
        <div className="middle"></div>
        <div className="lower">
          <div className="inner"></div>
        </div>
      </div>
    </Animated>
  );
};

export default Loading;