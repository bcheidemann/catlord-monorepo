import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Routes } from '../routes.enum';

export const MapRoute = () => (
  <Route exact={true} path={Routes.map}>
    <iframe
      title={'World Map'}
      src={'http://51.77.116.86:3405'}
      width={'100%'}
      height={'100%'}
      style={{
        borderStyle: 'none',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}
    />
  </Route>
);
