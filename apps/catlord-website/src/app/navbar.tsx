import { Dropdown, Menubar } from '@catlord/components';
import React from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { menuData, NavData } from './menu/menu.data';

export const NavBar: React.FC = (props) => {
  const history = useHistory();

  return (
    <Menubar title={'CatLord MC'} logo={Logo}>
      <Dropdown<NavData>
        elements={menuData}
        onElementSelected={(element) => {
          if (element.data.route) {
            history.push(element.data.route);
          }
        }}
      />
    </Menubar>
  );
};
