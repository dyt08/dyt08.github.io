import React, {lazy, Suspense, useEffect} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

const Home = lazy(() => import('pages/home'));

const Routes = ({childProps, location}) => {
  const {pathname} = location;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/" component={Home} props={childProps} />
      </Switch>
    </Suspense>
  );
};

export default withRouter(Routes);
