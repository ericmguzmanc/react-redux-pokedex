import React, { PureComponent } from 'react';
const withInfiniteScroll = (Component) =>
  class WithInfiniteScroll extends PureComponent {
    componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
      if (
        (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
        this.props.list.length
      ) {
        this.props.onPaginatedSearch();
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  export default withInfiniteScroll;