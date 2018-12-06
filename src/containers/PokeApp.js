import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../store/actions/actions';
import PokeRouter from './PokeRouting';

class PokeApp extends PureComponent {

  componentDidMount() {
    this.props.fetchPokemon();
  }

  render() {
    return(
      <div className="content">
        <div className="container text-center" style={{margin: 'auto'}}>
          <div style={{'marginTop': '25px'}}>
            <PokeRouter />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { fetchPokemon })(PokeApp);