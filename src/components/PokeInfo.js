import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, CardTitle, CardText, Progress, Row, Col, Badge} from 'reactstrap';
import { firstCharToUpperCase } from '../utils/functons/pages';
import {  getPokeStatsLimit, getPokeWeight, getPokeSize } from '../utils/functons/reduce-pokeObjects';
import './styles/PokeDetail.css';


const PokeInfo = ({isLoading, pokemon : { flavor_text, height, weight, stats }, darkMode}) => {
  
  if (isLoading) {
    return null;
  }

  const isDarkMode = (darkMode) ? 'dark-mode-card' : '';
  

  return(
    <Fragment>
      <div style={{marginBottom: "5px"}}>
        <Card className={isDarkMode}>
          <CardHeader>
            <CardTitle style={{marginBottom: "0rem"}}>Stats</CardTitle>
          </CardHeader>
          <CardBody>
            {
              stats.map((stat, index) => {
                return renderPokeStats(stat, index);
              })
            }
          </CardBody>
        </Card>
      </div>
      <div style={{width:"100%"}}>
        <Card className={isDarkMode}>
          <CardHeader>
            <Row>
              <Col xs="6" className="poke-body-property height">
                <span>Height:</span> 
                <Badge color="secondary" pill>{getPokeSize(height, 'dm')}</Badge>
              </Col>
              <Col xs="6" className="poke-body-property weight">
                <span>Weight:</span> 
              <Badge color="secondary" pill>{getPokeWeight(weight, 'hg')}</Badge>
              </Col>
            </Row>
          </CardHeader>
          <CardBody>
              <CardText>
                {flavor_text}
              </CardText>
          </CardBody>
        </Card>
      </div>
    </Fragment>
  );
}

const renderPokeStats = ( stats, index ) => {
  const {stat: { name }, base_stat } = stats;
  return (
    <Row style={{marginBottom:"10px"}} key={index}>
      <Col xs="3" className="progress-title" style={statTitlesStyles}>{firstCharToUpperCase(name)}</Col>
      <Col xs="9">
        <Progress barClassName={`${name}-stat`} value={base_stat} max={getPokeStatsLimit(name)}>{base_stat}</Progress>
      </Col>
    </Row>  
  )
}

const statTitlesStyles = {
  margin: "0px",
  textAlign: "right",
  fontWeight: "bold",
  color: `${PokeInfo.darkMode} ? "#ededed" : "#363636" `
};


export default PokeInfo;