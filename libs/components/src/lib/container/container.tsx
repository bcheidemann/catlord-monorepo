import React from 'react';
import './container.scss';
import { Scrollbars } from 'react-custom-scrollbars';

/* eslint-disable-next-line */
export interface ContainerProps {
  style?: React.CSSProperties;
  scrollBarColor?: string;
  children?: React.ReactNode;
}

const renderThumb = (parentProps: ContainerProps) => ({ style, ...props }) => {
  const thumbStyle: React.CSSProperties = {
    borderRadius: 6,
    backgroundColor: parentProps.scrollBarColor || 'white',
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

export function Container(props: ContainerProps) {
  return (
    <Scrollbars
      autoHide={true}
      autoHideTimeout={500}
      autoHideDuration={200}
      renderThumbHorizontal={renderThumb(props)}
      renderThumbVertical={renderThumb(props)}
      style={props.style}
    >
      {props.children}
    </Scrollbars>
  );
}

export default Container;
