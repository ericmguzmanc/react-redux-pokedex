import React, {Fragment, PureComponent} from 'react';
import { connect } from 'react-redux';
import { Button, Col, Row } from 'reactstrap'
import { fetchPokemonInfo } from '../store/actions/actions';
import PokeCard from './PokeCard';
import PokeInfo from './PokeInfo';
import Loading from './Loading';

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
       
        <ShowWhenReady isLoading={isLoading}>
          <Row>
            <Col>
              <div style={{width:"75px", marginTop: "5px", position: 'absolute'}}>
                <Button outline color="primary" onClick={this.handleBackClick}>
                  <span role="img" aria-label="back button">👈</span>
                </Button>
              </div>
            </Col>
            <Col>
              <div style={{width:"330px", display: "inline-block"}}>
                <PokeCard 
                  isLoading={isLoading}
                  pokemon={selectedPokemon}
                  />
              </div>
            </Col>
            <Col>
              <PokeInfo 
                isLoading={isLoading}
                pokemon={selectedPokemon}
              />
            </Col>
        </Row>
        </ShowWhenReady>
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