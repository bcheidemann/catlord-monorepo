import { observer } from 'mobx-react';
import React from 'react';
import { Styles } from './note.styles';
import gsap from 'gsap';

export interface INoteProps {
  style?: React.CSSProperties;
}

export class Note extends React.Component<INoteProps> {
  private noteRef = React.createRef<HTMLDivElement>();
  private popupTimeline = gsap.timeline();
  private backgroundTimeline = gsap.timeline();
  private popupNote: HTMLDivElement;
  private get noteRect() {
    return this.noteRef.current.getBoundingClientRect();
  }

  public render() {
    return <this.Note />;
  }

  private Note = observer(() => (
    <div
      ref={this.noteRef}
      onMouseOver={this.hover}
      style={{
        ...Styles.outerDiv,
        ...this.props.style,
      }}
    >
      {this.props.children}
    </div>
  ));

  private hover = () => {
    this.backgroundTimeline.to(document.getElementById('root'), {
      duration: 0.2,
      filter: 'blur(4px)',
    });

    this.popupNote = this.noteRef.current.cloneNode(true) as HTMLDivElement;
    document.body.appendChild(this.popupNote);

    if (
      this.noteRect.width + 400 > window.innerWidth ||
      this.noteRect.height + 400 > window.innerHeight
    ) {
      this.openPopupFullscreen();
    } else {
      this.openPopup();
    }
  };

  private openPopupFullscreen = () => {
    setTimeout(() => {
      this.popupNote.focus();
      this.popupNote.onclick = this.closePopup;
    }, 1000);
    this.popupTimeline
      .set(this.popupNote, {
        position: 'absolute',
        left: this.noteRect.left,
        top: this.noteRect.top,
        width: this.noteRect.width,
        maxWidth: '100vw',
      })
      .to(this.popupNote, {
        duration: 0.2,
        left: 0,
        top: 0,
        height: '100vh',
        width: '100vw',
        borderRadius: 0,
        whiteSpace: 'normal',
      });
  };

  private openPopup = () => {
    this.popupNote.onmouseleave = this.closePopup;
    this.popupTimeline
      .set(this.popupNote, {
        position: 'absolute',
        left: this.noteRect.left,
        top: this.noteRect.top,
        width: this.noteRect.width,
        maxWidth: '100vw',
      })
      .to(this.popupNote, {
        duration: 0.2,
        left: this.noteRect.left - 200,
        top: this.noteRect.top - 200,
        height: this.noteRect.height + 400,
        width: this.noteRect.width + 400,
        whiteSpace: 'normal',
      });
  };

  private closePopup = () => {
    this.backgroundTimeline.to(document.getElementById('root'), {
      duration: 0.2,
      filter: 'blur(0px)',
    });
    const boundingRect = this.noteRef.current.getBoundingClientRect();
    this.popupNote.onmouseleave = null;
    this.popupTimeline
      .to(this.popupNote, {
        duration: 0.2,
        left: boundingRect.left,
        top: boundingRect.top,
        width: boundingRect.width,
        height: boundingRect.height - 20,
        whiteSpace: Styles.outerDiv.whiteSpace,
      })
      .eventCallback('onComplete', () => {
        this.popupNote.remove();
        this.popupTimeline.eventCallback('onComplete', null);
      });
  };
}
