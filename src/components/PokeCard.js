import React, { Fragment } from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap'
import { POKE_SPRITE_URL } from '../utils/constants/poke-api.constants';

const PokeImg = ({id}) => (<CardImg style={{width: "18rem"}} top src={`${POKE_SPRITE_URL}${id}.png`} />);

const PokeCard = ({pokemon}) => (
  <Fragment>
    <Card key={pokemon.id} style={{width:"330px", display: "inline-block", margin: "5px"}}>
      <PokeImg id={pokemon.id} />
      <CardBody>
        <CardTitle>{`#${pokemon.id} ${pokemon.name}`}</CardTitle>
      </CardBody>
    </Card>
  </Fragment>
);

export default PokeCard;