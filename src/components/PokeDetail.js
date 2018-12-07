import React, {Fragment, PureComponent} from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardTitle, CardText } from 'reactstrap'
import { fetchPokemonInfo } from '../store/actions/actions';
import PokeCard from './PokeCard';
import Loading from './Loading';

class PokeDetail extends PureComponent {

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
          <div style={{width:"75px", margin: "5px -15px", position: 'absolute'}}>
            <Button outline color="primary" onClick={this.handleBackClick}>
              <span role="img" aria-label="back button">👈</span>
            </Button>
          </div>
        <div style={{width:"330px", display: "inline-block", margin: "5px"}}>
          <PokeCard 
            isLoading={isLoading}
            pokemon={selectedPokemon}
            />
        </div>
        <div style={{width:"660px", display: "inline-block", margin: "5px"}}>
          <Card>
            <CardBody>
              <CardTitle></CardTitle>
              <CardText></CardText>
            </CardBody>
          </Card>
        </div>
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

export default connect(mapStateToProps, { fetchPokemonInfo })(PokeDetail);