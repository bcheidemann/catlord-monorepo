import React from 'react';
import { Styles } from './menubar.styles';
import './menubar.scss';

export interface MenubarProps {
  title: string;
  logo: string;
  children?: React.ReactNode;
}

export function Menubar(props: MenubarProps) {
  return (
    <div style={Styles.outerDiv}>
      <div style={Styles.logo}>
        <img src={props.logo} alt={'Logo'} width={52} height={52} />
      </div>
      <div style={Styles.titleShadow}>
        <h1>{props.title}</h1>
      </div>
      <div style={Styles.title}>
        <h1>{props.title}</h1>
      </div>
      <div style={Styles.children}>
        {props.children}
      </div>
    </div>
  );
}

export default Menubar;
