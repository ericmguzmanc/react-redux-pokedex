import React, { Fragment } from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap'
import { POKE_SPRITE_URL } from '../utils/constants/poke-api.constants';

const PokeCard = ({isLoading, pokemon}) => {
    if (isLoading) {
      return null;
    }

    return (
      <Fragment>
        <Card key={pokemon.id} style={{cursor: "pointer", width:"20rem"}}>
          <CardImg style={{width: "18rem"}} top src={`${POKE_SPRITE_URL}${pokemon.id}.png`} />
          <CardBody>
            <CardTitle>{`#${pokemon.id} ${pokemon.name}`}</CardTitle>
          </CardBody>
        </Card>
      </Fragment>
    );
};

export default PokeCard;