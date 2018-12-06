import React, {Fragment, PureComponent} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPokemonInfo } from '../store/actions/actions';
import PokeCard from './PokeCard';

class PokeDetail extends PureComponent {

  componentDidMount() {
    console.log(this.props);
    const { id } = this.props.match.params;
    this.props.fetchPokemonInfo(id)
  }

  render () {
    return (
      <Fragment>
        HOLA
        {/* <PokeDetailW /> */}
      </Fragment>
    );
  }
};

const PokeDetailWrapper = withRouter(({...props}) => (
  <PokeDetail {...props}/>
))

export default connect(null, { fetchPokemonInfo })(PokeDetailWrapper);