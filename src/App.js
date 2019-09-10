import React from 'react';
import Routes from 'config/route';
import {Router} from 'react-router-dom';
import History from 'config/route/history';

const App = ({...props}) => {
  return <Router history={History}>{<Routes childProps={props} />}</Router>;
};

export default App;
