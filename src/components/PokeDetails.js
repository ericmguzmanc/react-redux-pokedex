import React, {Fragment, PureComponent} from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row } from 'reactstrap'
import { fetchPokemonInfo } from '../store/actions/actions';
import PokeCard from './PokeCard';
import PokeInfo from './PokeInfo';
import Loading from './Loading';
import { Animated } from 'react-animated-css';

class PokeDetails extends PureComponent {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPokemonInfo(id);
  }

  handleBackClick = () => {
    const {history} = this.props;
    history.push('/pokemons/');
  }

  render () {
    const { isLoading, selectedPokemon } = this.props;
    
    const ShowWhenReady = ({isLoading, children}) => {
      if (isLoading) {
        return null;
      }
      return(children);
    }

    return (
      <Fragment>
        <Loading isLoading={isLoading} />
       <Animated animationIn="fadeIn" animationOut="fadeOut">
          <ShowWhenReady isLoading={isLoading}>
            <Row>
            <Col sm="1" className="text-left">
              <div style={{marginTop: "5px", position: ""}}>
                <Button outline color="primary" onClick={this.handleBackClick}>
                  <span role="img" aria-label="back button">👈</span>
                </Button>
              </div>
            </Col>
              <Col sm="4">
                <div style={{ display: "inline-block",  marginTop: "5px"}}>
                  <PokeCard 
                    isLoading={isLoading}
                    pokemon={selectedPokemon}
                    pokeTypes={true}
                    pokeAnimated={true}
                    />
                </div>
              </Col>
              
              <Col sm="7">
                <div style={{ marginTop: "5px" }}>
                  <PokeInfo 
                    isLoading={isLoading}
                    pokemon={selectedPokemon}
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

const mapStateToProps = ({ selectedPokemon }) => (
  {
    isLoading: selectedPokemon.isLoading,
    selectedPokemon: selectedPokemon.data
  }
);

export default connect(mapStateToProps, { fetchPokemonInfo })(PokeDetails);