import { PropsWithChildren } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import config from '../config/index';
import { useHistory } from 'react-router';

const AuthProvider = (props: PropsWithChildren<{}>) => {
  const history = useHistory();
  const onRedirectCallback = (appState: any) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={config.authODomain}
      clientId={config.auth0ClientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {props.children}
    </Auth0Provider>
  );
};

export default AuthProvider;
