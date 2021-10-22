import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import useSWR from 'swr';
import { fetchDataWithToken } from '../helpers/datafetcher';

const AuthRoute = ({ children, ...props }) => {
  const apiEndpoint = `${process.env.REACT_APP_SERVICE_URL}/auths/me`;
  const { data, error } = useSWR([apiEndpoint], fetchDataWithToken);
  if (error) {
    return <Redirect to="/login" />;
  }

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <Route
      {...props}
      render={() => React.cloneElement(children, { user: data })}
    />
  );
};

export default AuthRoute;
