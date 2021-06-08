import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import ProtectedRoute from '../auth/ProtectedRoute';
import Loading from '../components/common/Loading/Loading';
import router from './router';

const Routes = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const classes = useStyles();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className={classes.main}>
      <div>Header</div>
      <div className={classes.page}>
        <Switch>
          <ProtectedRoute path={router.codeEditor} component={<div>Code Editor</div>} />
          <Route exact path={router.home}>
            {isAuthenticated ? <Redirect to={router.codeEditor} /> : <div>Home</div>}
          </Route>
        </Switch>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  page: {
    height: '100%',
  },
}));

export default Routes;
