import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import CardWrapper from './CardWrapper';
import Search from './Search';
import { withRouter } from 'react-router';
import {  onPaginatedSearch, setCurrentUrl } from '../store/actions/actions';
import { onScrollHeight } from '../store/actions/actions';
import { Animated } from 'react-animated-css';
import { Row, Col } from 'reactstrap';

import './styles/Search.css';
import './styles/PokeList.css';

class PokeList extends PureComponent {

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
    window.scrollTo(0, this.props.scrollHeight);
    const { history: { location: { pathname } } } = this.props;
    this.props.setCurrentUrl(pathname);
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
        <Animated animationIn="fadeIn" animationOut="fadeOut">
          <Row style={{marginTop:"-5px"}}>
            <Col xs="12" style={searchBarStyle}>
              <div style={{width:"auto"}}>
                <Search></Search>
              </div>
            </Col>
          </Row>
          <Row className="poleList-row">
            <Col xs="12">
              {
                this.props.pokemons.map(pokemon =>(
                  <CardWrapper 
                    key={pokemon.id}
                    pokemon={pokemon}
                  />
                ))
              }
            </Col>
          </Row>
        </Animated>
      </Fragment>
    );
  }
};

const searchBarStyle = {
  textAlign: "center",
  marginTop: "5px",
  position: "fixed",
  left: "0",
  right: "0",
  zIndex: "1",
  padding: "5px",
  backgroundColor: "rgba(255,255,255,0.7)",
  borderBottom: "1px sollid gray"
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


export default withRouter( connect(mapStateToProps, { onPaginatedSearch, onScrollHeight, setCurrentUrl })(PokeList) )