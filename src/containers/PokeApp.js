import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../store/actions/actions';
import PokeRouter from './PokeRouting';
import './styles/App.css'; 

class PokeApp extends PureComponent {

  componentDidMount() {
    this.props.fetchPokemon();
  }

  render() {
    const { general } = this.props;
    return(
      <div className={`content  ${(general.darkMode) ? 'darkMode' : ''} `} >
        <div className="container text-center" style={{margin: 'auto'}}>
          <div style={{'marginTop': '0px'}}>
            <PokeRouter />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ general }) => {
  return {
    general
  }
}

export default connect(mapStateToProps, { fetchPokemon })(PokeApp);