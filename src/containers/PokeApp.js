import React, { PureComponent, Suspense} from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../store/actions/actions';
import Loading from '../components/Loading';
// import PokeList from '../components/PokeList';
const PokeList = React.lazy(() => import('../components/PokeList'));

class PokeApp extends PureComponent {

  componentDidMount() {
    this.props.fetchPokemon();
  }

  

  render() {

    const { isFetching } = this.props;
    console.log(`isFetching: ${isFetching}`);

    return(
      <div className="content">
        <div className="container text-center" style={{margin: 'auto'}}>
          <div style={{'marginTop': '25px'}}>
            <Suspense fallback={<Loading />}>
              <PokeList />
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ pokemons }) => {
  return {
    isFetching: pokemons.isFetching
  }
}

export default connect(mapStateToProps, { fetchPokemon })(PokeApp);