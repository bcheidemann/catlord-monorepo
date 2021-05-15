import { Dropdown, Menubar } from '@catlord/components';
import React from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { HomeRoute } from './routes/home/home';
import Logo from '../assets/logo.png';
import { menuData, NavData } from './menu/menu.data';
import { NavBar } from './navbar';
import { MapRoute } from './routes/map/map';

export const App = () => {

  return (
    <Router>
      <NavBar />
      {/* Routes */}
      <HomeRoute />
      <MapRoute />
    </Router>
  );
};

export default App;
