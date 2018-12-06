import React, { Suspense } from 'react';
import Loading from '../components/Loading';

export default function withSuspense (WrappedComponent, props) {
  const LazyWrappedComponent = React.lazy(() => WrappedComponent);

  return class extends React.PureComponent {
    render() {
      return  (
        <Suspense fallback={<Loading />}>
          <LazyWrappedComponent {...props} />
        </Suspense>
      );
    }
  };
}


