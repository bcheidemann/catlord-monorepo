import { ComponentStyle } from '@catlord/styles';
import { Theme } from '@catlord/styles';
import { MenuBarDimensions } from '../menubar/menubar.styles';

const styles: ComponentStyle = {
    button: {
        position: 'relative',
        marginRight: 10,
        height: 40,
        width: 80,
        borderWidth: 4,
        borderColor: Theme.background.hex(),
        borderRadius: 8,
        borderStyle: 'solid',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'default',
        userSelect: 'none',
        color: Theme.background.hex(),
        fontWeight: 'bold',
        fontSize: 20,
    },
    menu: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pointerEvents: 'none',
        opacity: 0,
    },
    menuInner: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        color: Theme.text.hex(),
        userSelect: 'none',
    },
    dim: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black',
        opacity: 0,
        pointerEvents: 'none',
    },
    menuItem: {
        position: 'relative',
        opacity: 0,
        left: 400,
        fontSize: 32,
        padding: 16,
    },
}

export const Styles = ComponentStyle(styles);
