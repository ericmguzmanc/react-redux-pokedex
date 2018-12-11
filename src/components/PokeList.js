import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import CardWrapper from './CardWrapper';

// const PokeList = ({pokemons}) => {
class PokeList extends PureComponent {

  state = {
    fetchedPokemon: this.props.pokemons,
    pokemons: [],
    page: null,
    isLoading: this.props.isLoading
  };
  
  componentDidMount() {
    // window.scrollTo({   
      //   top: 100,   
      //   left: 100,   
      //   behavior: 'smooth' 
      // });
      
      if (!(this.state.fetchedPokemon > 0)) {
        this.onPaginatedSearch();
      }
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
    
  }

  onScroll = () => {
    if(
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
      this.props.pokemons.length
    ) {
      this.onPaginatedSearch();
    }
  }

  onPaginatedSearch = (e) => {
    // if (!this.state.isLoading) {
      let actualPage = this.state.page;
      (actualPage === null) ? actualPage = 0 : actualPage += 1;
      // console.log(' actual page ', actualPage);
      if (actualPage < this.state.fetchedPokemon.length) {
        this.getCurrentPokemonGroup(actualPage);
      } 
    // }
  };

  setMorePokemons = (morePokemon, page) => (prevState) => {
    // console.log("\n\n ", "prevstate ", prevState, " \n", morePokemon)
    return {
      pokemons: [...prevState.pokemons, ...morePokemon],
      page: page,
    }
  };

  getCurrentPokemonGroup = (page) => {
    const pokemonGroup = this.state.fetchedPokemon[page];
    // console.log('get all pokemons ', this.state.fetchedPokemon);
    // console.log('get current pokemon group ', page, ' \n', pokemonGroup)
    this.setState(this.setMorePokemons(pokemonGroup, page))
  };

  render() {

    // const {pokemons} = this.props;
    // const {pokemons} = this.state.pokemons;
    // console.log('state ', this.state);

    
    return (
      <Fragment>
        {
          this.state.pokemons.map(pokemon =>(
            <CardWrapper 
              key={pokemon.id}
              pokemon={pokemon}
            />
          ))
        }
      </Fragment>
    );
  }
};

const mapStateToProps = ({ pokemons: { pokemon, isLoading } }) => {
  return {
    pokemons: pokemon,
    isLoading: isLoading
  }
};

export default connect(mapStateToProps)(PokeList)