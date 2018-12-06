import React, { Fragment } from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap'
import { POKE_SPRITE_URL } from '../utils/constants/poke-api.constants';

const PokeCard = ({pokemon}) => (
  <Fragment>
    <Card key={pokemon.id}>
      <CardImg style={{width: "18rem"}} top src={`${POKE_SPRITE_URL}${pokemon.id}.png`} />
      <CardBody>
        <CardTitle>{`#${pokemon.id} ${pokemon.name}`}</CardTitle>
      </CardBody>
    </Card>
  </Fragment>
);

export default PokeCard;