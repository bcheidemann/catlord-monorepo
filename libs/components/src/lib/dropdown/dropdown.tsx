import { observer } from 'mobx-react';
import React from 'react';
import { Styles } from './dropdown.styles';
import gsap from 'gsap';
import { Theme } from '@catlord/styles';
import ReactDOM from 'react-dom';
import { action, observable, toJS } from 'mobx';
import { DropdownElement } from './dropdown.types';

export interface DropdownProps<Data = never> {
  elements: Array<DropdownElement<Data>>;
  onElementSelected?: (element: DropdownElement<Data>) => void;
}

interface MenuState<Data> {
  isOpen: boolean;
  submenuIds: DropdownElement['id'][];
}

export class Dropdown<Data = never> extends React.Component<
  DropdownProps<Data>
> {
  private menuState = observable<MenuState<Data>>({
    isOpen: false,
    submenuIds: [],
  });

  private buttonTimeline = gsap.timeline();
  private menuTimeline = gsap.timeline();
  private dimEffectTimeline = gsap.timeline();
  private menuItemsTimeline = gsap.timeline();

  private buttonRef = React.createRef<HTMLDivElement>();
  private menuRef = React.createRef<HTMLDivElement>();
  private dimEffectRef = React.createRef<HTMLDivElement>();

  private menuContainer = document.createElement('div');

  private activeTween: gsap.TweenVars = {
    color: Theme.text.hex(),
    borderColor: Theme.background.lighten(0.5).hex(),
    fontSize: (Styles.button.fontSize as number) + 1,
  };
  private inactiveTween: gsap.TweenVars = {
    duration: 0.25,
    height: Styles.button.height,
    color: Styles.button.color,
    borderColor: Styles.button.borderColor,
    fontSize: Styles.button.fontSize,
  };

  private get menuElements() {
    return this.getMenuElements(this.menuState.submenuIds);
  }

  private getMenuElements(submenuIds: MenuState<Data>['submenuIds']) {
    return this.getMenuElement(submenuIds).elements;
  }

  private getMenuElement(submenuIds: MenuState<Data>['submenuIds']) {
    let elements = this.props.elements;
    submenuIds = Array.from(submenuIds);
    const lastId = submenuIds.pop();

    if (!lastId) {
      return { elements } as DropdownElement<Data>;
    }

    for (const id of submenuIds) {
      elements = elements.find((element) => element.id === id).elements;
    }
    return elements.find((element) => element.id === lastId);
  }

  public componentDidMount() {
    document.body.append(this.menuContainer);
    ReactDOM.render(
      <React.StrictMode>
        <this.DimEffect />
        <this.Menu />
      </React.StrictMode>,
      this.menuContainer
    );
  }

  public componentWillUnmount() {
    document.body.removeChild(this.menuContainer);
  }

  public openMenu = action(() => {
    this.menuState.isOpen = true;
    this.menuState.submenuIds = [];
    this.buttonTimeline.to(this.buttonRef.current, this.inactiveTween);
    setTimeout(() => {
      this.menuTimeline
        .set(this.menuRef.current, {
          pointerEvents: 'auto',
        })
        .to(this.menuRef.current, {
          opacity: 1,
        });
      this.dimEffectTimeline.to(this.dimEffectRef.current, {
        opacity: 0.5,
      });
      this.menuItemsTimeline.to('.MenuItem', {
        duration: 0.4,
        left: 0,
        opacity: 1,
        ease: 'power1.out',
        stagger: 0.1,
      });
    });
  });

  public closeMenu = () => {
    this.menuState.isOpen = false;
    this.buttonTimeline.to(this.buttonRef.current, this.inactiveTween);
    this.menuTimeline
      .set(this.menuRef.current, {
        pointerEvents: Styles.menu.pointerEvents,
      })
      .to(this.menuRef.current, {
        opacity: Styles.menu.opacity,
      });
    this.dimEffectTimeline.to(this.dimEffectRef.current, {
      opacity: Styles.dim.opacity,
    });
    this.menuItemsTimeline
      .to('.MenuItem', {
        duration: 0.4,
        left: -Styles.menuItem.left,
        opacity: Styles.menuItem.opacity,
        ease: 'power1.out',
        stagger: 0.1,
      })
      .set('.MenuItem', {
        left: Styles.menuItem.left,
      });
  };

  private mouseOver = () => {
    this.buttonTimeline.to(this.buttonRef.current, this.activeTween);
  };

  private mouseLeave = () => {
    if (this.menuState.isOpen) return;
    this.buttonTimeline.to(this.buttonRef.current, this.inactiveTween);
  };

  private click = () => {
    if (this.menuState.isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };

  public render() {
    return <this.Button />;
  }

  private Button: React.FC = observer(() => (
    <div
      ref={this.buttonRef}
      style={Styles.button}
      onMouseEnter={this.mouseOver}
      onMouseLeave={this.mouseLeave}
      onClick={this.click}
    >
      Menu
    </div>
  ));

  private onBack = () => {
    this.menuItemsTimeline
      .to('.MenuItem', {
        duration: 0.4,
        left: Styles.menuItem.left,
        opacity: Styles.menuItem.opacity,
        ease: 'power1.out',
        stagger: 0.1,
      })
      .eventCallback(
        'onComplete',
        action(() => {
          this.menuState.submenuIds.pop();
          setTimeout(() => {
            this.menuItemsTimeline
              .set('.MenuItem', {
                left: -Styles.menuItem.left,
                top: 50,
              })
              .to('.MenuItem', {
                duration: 0.4,
                left: 0,
                opacity: 1,
                ease: 'power1.out',
                stagger: 0.1,
              })
              .eventCallback('onComplete', null);
          });
        })
      );
  };

  private Menu: React.FC = observer(() => {
    return (
      <div ref={this.menuRef} style={Styles.menu} onClick={this.closeMenu}>
        <div style={Styles.menuInner}>
          {this.menuState.submenuIds.length > 0 && <this.BackButton />}
          {this.menuElements.map(this.Element)}
        </div>
      </div>
    );
  });

  private BackButton: React.FC = observer(() => {
    const element = this.getMenuElement(this.menuState.submenuIds);

    return (
      <this.Element
        {...element}
        text={'< Back'}
        onClick={this.onBack}
      />
    );
  });

  private DimEffect: React.FC = observer(() => {
    return (
      <div
        ref={this.dimEffectRef}
        style={Styles.dim}
        onClick={this.closeMenu}
      />
    );
  });

  private useMenuItemHover = (ref: React.RefObject<HTMLSpanElement>) => {
    const menuItemTimeline = gsap.timeline();
    const hover = () => {
      menuItemTimeline.to(ref.current, {
        duration: 0.2,
        scale: 1.2,
      });
    };
    const leave = () => {
      menuItemTimeline.to(ref.current, {
        duration: 0.2,
        scale: 1,
      });
    };
    return [hover, leave];
  };

  private useMenuItemClick = (
    element: DropdownElement<Data>
  ): React.MouseEventHandler<HTMLSpanElement> => (e) => {
    e.preventDefault();
    e.stopPropagation();

    this.props.onElementSelected?.(element);

    if (element.onClick) return element.onClick(element);

    if (!element.elements) {
      this.closeMenu();
      return;
    }

    this.menuItemsTimeline
      .to('.MenuItem', {
        duration: 0.4,
        left: -Styles.menuItem.left,
        opacity: Styles.menuItem.opacity,
        ease: 'power1.out',
        stagger: 0.1,
      })
      .eventCallback(
        'onComplete',
        action(() => {
          this.menuState.submenuIds.push(element.id);
          setTimeout(() => {
            this.menuItemsTimeline
              .to('.MenuItem', {
                duration: 0.4,
                left: 0,
                opacity: 1,
                ease: 'power1.out',
                stagger: 0.1,
              })
              .eventCallback('onComplete', null);
          });
        })
      );
  };

  private Element: React.FC<DropdownElement<Data>> = (props) => {
    const menuItemRef = React.createRef<HTMLSpanElement>();
    const [hover, leave] = this.useMenuItemHover(menuItemRef);
    const click = this.useMenuItemClick(props);
    return (
      <span
        ref={menuItemRef}
        className={'MenuItem'}
        style={Styles.menuItem}
        key={props.id}
        onMouseEnter={hover}
        onMouseLeave={leave}
        onClick={click}
      >
        {props.text}
        {props.children}
      </span>
    );
  };
}
