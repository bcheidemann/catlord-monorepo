import './screen.scss';
import React from 'react';
import { Menubar } from '../menubar/menubar';
import { Styles } from './screen.styles';
import { Container } from '../container/container';
import { Theme } from '@catlord/styles';

export interface ScreenProps {
  children?: React.ReactNode;
}

export function Screen(props: ScreenProps) {
  return (
    <>
      <Menubar title={'CatLord MC'} />
      <div style={Styles.outerDiv}>
        <Container
          style={Styles.container}
          scrollBarColor={Theme.backgroundLight.hex()}
        >
          {props.children}
        </Container>
      </div>
    </>
  );
}

export default Screen;
