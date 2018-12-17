import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon as lightFaMoon } from '@fortawesome/free-regular-svg-icons';
import { setDarkMode } from '../store/actions/actions';

const DarkMode = (props) => {
  const darkMode = props.general.darkMode;

  const handleClick = () => {
    document.body.style.background = `${(!darkMode) ? "#282c34" : "white"}`;
    props.setDarkMode();
  }

  return (
    <Button outline={darkMode} color="secondary" className="dark-mode-btn" onClick={() => handleClick()}>
      <FontAwesomeIcon icon={(!darkMode) ? faMoon : lightFaMoon}/>
    </Button>
  );
};

const mapStateToProps = ({ general }) => {
  return {
    general
  }
};



export default connect(mapStateToProps, { setDarkMode })(DarkMode);