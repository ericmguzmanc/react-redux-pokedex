import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, CardTitle, CardText, Progress, Row, Col} from 'reactstrap';
import { firstCharToUpperCase } from '../utils/functons/pages';
import {  getPokeStatsLimit } from '../utils/functons/reduce-pokeObjects';
import './styles/PokeDetail.css';


const PokeInfo = ({isLoading, pokemon : { flavor_text, height, weight, type, abilities, stats }}) => {
  
  if (isLoading) {
    return null;
  }

  return(
    <Fragment>
      <div style={{width:"100%", display: "inline-block", marginBottom: "5px"}}>
        <Card>
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
      <div style={{width:"100%", display: "inline-block"}}>
        <Card>
          <CardBody>
            <CardTitle></CardTitle>
              <CardText>{flavor_text}</CardText>
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
        <Progress className={`${name}-stat`} barClassName="animate-progress-bar" value={base_stat} max={getPokeStatsLimit(name)}>{base_stat}</Progress>
        {/* <div className={`progress ${name}-stat`}>
          <div className="progress-bar" role="progressbar" style="width: 100%" aria-valuenow={base_stat} aria-valuemin="0" aria-valuemax={getPokeStatsLimit(name)}>{base_stat}</div>
        </div> */}
      </Col>
    </Row>  
  )
}

// const getKeyframeName = () => {
//   return `@keyframe ${animationName} {
//     from {
//       width: 0;
//     }
//     to {
//       width: 100%;
//     }
//   }`;
// }


const pstyle = `
  
.animate-progress-bar {
  width: 0;
  animation: progress 1.5s ease-in-out forwards;
} 

@keyframes progress {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
} 

`;

const renderProgressValue = (value) => {

}

const statTitlesStyles = {
  margin: "0px",
  textAlign: "right",
  fontWeight: "bold",
  color: "#363636"
};




export default PokeInfo;