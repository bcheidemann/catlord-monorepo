import React from 'react';
import { Styles } from './menubar.styles';
import './menubar.scss';

export interface MenubarProps {
  title: string;
}

export function Menubar(props: MenubarProps) {
  return (
    <div style={Styles.outerDiv}>
      <div style={{ position: 'absolute', padding: 8 }}>
        {/* <img src={ICON} alt={'Cat Lord logo'} width={52} height={52} /> */}
      </div>
      <div style={Styles.titleShadow}>
        <h1>{props.title}</h1>
      </div>
      <div style={Styles.title}>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}

export default Menubar;
