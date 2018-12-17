import React, {Fragment, PureComponent} from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import './styles/Search.css';
import DarkMode from './DarkMode';
import { searchPokemonQuery, searchModeOn, setSearchTerm, fetchPokemon } from '../store/actions/actions';

class Search extends PureComponent {

  state = {
    searchQuery: this.props.searchTerm,
  };

  handleChange = (e) => {
    console.log('pokemons ', this.props.fetchedPokemon);

    const value  = e.target.value;

    this.setState({searchQuery: value});
    this.props.searchPokemonQuery(value, this.props.fetchedPokemon);
    this.props.setSearchTerm(value);
    
    if (value.length === 1) {
      this.props.searchModeOn(true);
    } else if (value.length < 1) {
      this.props.searchModeOn(false);
      this.props.fetchPokemon();
    }
  } 


  render() {
    return(
      <Fragment>
        <Row >
          <Col xs="3"></Col>
          <Col xs="3" style={{textAlign: "center", marginLeft: "-1.4%"}}>
            <div className="search-div align-middle" >
              <input type="search" placeholder="Search..." value={this.state.searchQuery} onChange={this.handleChange} />
            </div>
          </Col>
          <Col xs="5" style={{marginTop:"4px", marginLeft:"5.8%"}}>
            <DarkMode></DarkMode>
          </Col>
          <Col xs="1"></Col>
        </Row>
      </Fragment>
    );
  }
}


const mapStateToProps = ({pokemons: {fetchedPokemon}, general: {searchTerm}}) => {
  return {
    fetchedPokemon,
    searchTerm
  }
};


export default connect(
  mapStateToProps, 
  { 
    searchPokemonQuery, 
    searchModeOn, 
    setSearchTerm, 
    fetchPokemon
  })(Search);