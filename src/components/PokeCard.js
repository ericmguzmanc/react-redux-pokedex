import React, { Fragment } from 'react';
import { Card, CardBody, CardImg, CardTitle, CardFooter, Col, Row } from 'reactstrap'
import { POKE_SPRITE_URL } from '../utils/constants/poke-api.constants';
import { getPokeGradient } from '../utils/functons/reduce-pokeObjects';
import { firstCharToUpperCase } from '../utils/functons/pages';
import { Animated } from "react-animated-css";
import '../assets/animate.css';
import './styles/PokeCard.css';

const PokeCard = ({isLoading, pokemon, pokeTypes, pokeAnimated, darkMode}) => {
    if (isLoading) {
      return null;
    }
    
    const withDarkMode = (darkMode) ?  "#41454d" : "white";
    const pokeCardStyle = {
      cursor: "pointer",
      width: "21rem",
      color: `${(darkMode) ? "#ededed" : "#1c1c1c"}`,
      border: `${(darkMode) ? "1px solid #5d626e" : ""}`,
      background: (!pokeTypes) ? `${withDarkMode}`: getPokeGradient(pokemon)
    };

    return (
      <Fragment>
        <Card key={pokemon.id} style={pokeCardStyle} className={`${(darkMode) ? 'dark-mode-card' : ''}`}> 
          <Animated animationIn="tada" isVisible={true} animateOnMount={pokeAnimated}>
            <CardImg style={{width: "18rem", "margin":"auto"}} top src={`${POKE_SPRITE_URL}${pokemon.id}.png`} />
          </Animated>
          <CardBody>
            <CardTitle>{`#${pokemon.id} ${firstCharToUpperCase(pokemon.name)}`}</CardTitle>
          </CardBody>
          {
            (!pokeTypes) 
            ? null
            : (
              <CardFooter>
                <Row>
                  {
                    pokemon.types.map((properties, index) => {
                      if (pokemon.types.length === 1) {
                        return <Col key={index} xs="12" style={footerText}>{properties.type.name.toUpperCase()}</Col>
                      }else{
                        return <Col key={index} xs="6" style={footerText}>{properties.type.name.toUpperCase()}</Col>
                      }
                    })
                  }
                </Row>
              </CardFooter>
            )
          }
        </Card>
      </Fragment>
    );
};

const footerText = {
  textAlign: "center",
  fontWeight: "bold",
  textTransform: "capitalize"
}


export default PokeCard;