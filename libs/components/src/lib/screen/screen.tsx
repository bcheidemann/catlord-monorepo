import './screen.scss';
import React from 'react';
import { Menubar } from '../menubar/menubar';
import { Styles } from './screen.styles';
import { Container } from '../container/container';
import { Theme } from '@catlord/styles';
import { observer } from 'mobx-react';

export interface ScreenProps {
  children?: React.ReactNode;
}

export const Screen = observer((props: ScreenProps) => {
  return (
    <div style={Styles.outerDiv}>
      <Container
        style={Styles.container}
        scrollBarColor={Theme.backgroundLight.hex()}
      >
        {props.children}
      </Container>
    </div>
  );
});

export default Screen;
