import { observable } from 'mobx';
import React from 'react';

export type ComponentStyle = Record<string, React.CSSProperties>;

export function NewComponentStyle<T extends ComponentStyle>(styles: T) {
    const dynamicStyles = observable(styles);
    return dynamicStyles;
}
