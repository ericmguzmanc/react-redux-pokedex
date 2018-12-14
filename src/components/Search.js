import React, {Fragment} from 'react';
import { Row, Button, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import './styles/Search.css';

const Search = () => {
  return(
    <Fragment>
      <Row >
        <Col xs="3"></Col>
        <Col xs="3" style={{textAlign: "center", marginLeft: "-1.4%"}}>
          <div className="search-div align-middle" >
            <input type="search" placeholder="Search..." />
          </div>
        </Col>
        <Col xs="5" style={{marginTop:"4px", marginLeft:"5.8%"}}>
          <Button color="secondary" className="dark-mode-btn">
            <FontAwesomeIcon icon={faMoon}/>
          </Button>
        </Col>
        <Col xs="1"></Col>
      </Row>
    </Fragment>
  );
}

export default Search;