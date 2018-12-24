import React, {Fragment, PureComponent} from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row } from 'reactstrap'
import { fetchPokemonInfo, setCurrentUrl } from '../store/actions/actions';
import PokeCard from './PokeCard';
import PokeInfo from './PokeInfo';
import Loading from './Loading';
import { Animated } from 'react-animated-css';
import ShowWhenReady from './ShowWhenReady';
import './styles/PokeDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft }  from '@fortawesome/free-solid-svg-icons';

class PokeDetails extends PureComponent {

  componentDidMount() {
    const { id } = this.props.match.params;
    const { history : { location : { pathname } } } = this.props;
    this.props.fetchPokemonInfo(id);
    this.props.setCurrentUrl(pathname)
  }

  handleBackClick = () => {
    const {history} = this.props;
    history.push('/pokemons/');
  }

  
  render () {
    const { isLoading, selectedPokemon, darkMode } = this.props;
    const backBtnStyle = {
      color: `${(darkMode) ? "#41454d" : " white"}`,
      background: `${(darkMode) ? "white" : "#41454d"}`
    };

    return (
      <Fragment>
        <Loading isLoading={isLoading} />
        <Animated animationIn="fadeIn" animationOut="fadeOut">
          <ShowWhenReady isLoading={isLoading}>
            <Row className="detail-main-content-row">
              <Col xl="1" className="text-left">
                <div style={{marginTop: "5px"}}>
                  <Button outline={darkMode} color="secondary" className="back-btn" style={backBtnStyle} onClick={this.handleBackClick}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                  </Button>
                </div>
              </Col>
              <Col xl="4" style={{marginLeft: "0px"}} className="text-center">
                <div style={{marginTop: "5px"}}>
                  <PokeCard 
                    isLoading={isLoading}
                    pokemon={selectedPokemon}
                    pokeTypes={true}
                    pokeAnimated={true}
                    />
                </div>
              </Col>
              
              <Col xl="7">
                <div style={{ marginTop: "5px" }}>
                  <PokeInfo 
                    isLoading={isLoading}
                    pokemon={selectedPokemon}
                    darkMode={this.props.darkMode}
                    />
                </div>
              </Col>
            </Row>
          </ShowWhenReady>
        </Animated>
      </Fragment>
    );
  }
};

const mapStateToProps = ({ selectedPokemon, general: { darkMode } }) => (
  {
    isLoading: selectedPokemon.isLoading,
    selectedPokemon: selectedPokemon.data,
    darkMode
  }
);

export default connect(mapStateToProps, { fetchPokemonInfo, setCurrentUrl })(PokeDetails);