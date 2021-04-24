import { observable, toJS } from 'mobx';
import React from 'react';

export type ComponentStyle = Record<string, React.CSSProperties>;

export function ComponentStyle<T extends ComponentStyle>(styles: T) {
    const dynamicStyles = observable(styles);
    return new Proxy(styles, {
        get(target, prop) {
            if (typeof prop === 'string') {
                return toJS(dynamicStyles[prop])
            }
        },
        set(target, prop, value) {
            return Reflect.set(dynamicStyles, prop, value);
        }
    });
}
