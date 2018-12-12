import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import CardWrapper from './CardWrapper';
import {  onPaginatedSearch } from '../store/actions/actions';
import { onScrollHeight } from '../store/actions/actions';

class PokeList extends PureComponent {

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
    window.scrollTo(0, this.props.scrollHeight);
    }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
    this.props.onScrollHeight(window.scrollY);

  }

  onScroll = () => {
    if(
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
      this.props.pokemons.length
    ) {
      const { fetchedPokemon, pokemons, page } = this.props;
      this.props.onPaginatedSearch(fetchedPokemon, pokemons, page);
    }
  }

  render() {

    return (
      <Fragment>
        {
          this.props.pokemons.map(pokemon =>(
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

const mapStateToProps = ({ pokemons: { fetchedPokemon, isLoading, pokemons, page }, general: { scrollHeight } }) => {
  return {
    fetchedPokemon,
    isLoading,
    page,
    pokemons,
    scrollHeight
  }
};

export default connect(mapStateToProps, { onPaginatedSearch, onScrollHeight })(PokeList)