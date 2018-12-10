import React, { Fragment } from 'react';
import { Card, CardBody, CardTitle, CardText} from 'reactstrap'


const PokeInfo = ({isLoading, pokemon : { flavor_text, height, weight, type, abilities, stats }}) => {
  
  if (isLoading) {
    return null;
  }

  return(
    <Fragment>
      <div style={{width:"660px", display: "inline-block"}}>
        {console.log('details render')}
        <Card>
          <CardBody>
            <CardTitle></CardTitle>
              <CardText>{flavor_text}</CardText>
          </CardBody>
        </Card>
      </div>
      <div style={{width:"660px", display: "inline-block", marginTop: "5px"}}>
        <Card>
          <CardBody>
            <CardTitle></CardTitle>
          </CardBody>
        </Card>
      </div>
    </Fragment>
  );
}

export default PokeInfo;