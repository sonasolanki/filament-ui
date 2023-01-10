import { Component, h, Listen, Prop, State } from '@stencil/core';
import classNames from 'classnames';
import { IFButtonInterface } from '../f-button/f-button.interface';
@Component({
  tag: 'f-modal',
  styleUrl: 'f-modal.scss',
  shadow: false
})

export class FModal {
  private focusableElements: NodeList;
  private firstFocusableElement;
  private lastFocusableElement;
  private modalElement: HTMLElement;

/**
 * button array for modal button bar
 *
 * @type {Array<FButtonSettings>}
 * @memberof FModal
 */
@Prop() buttons?: Array<IFButtonInterface> = [];

/**
 * close text for close button
 *
 * @type {string}
 * @memberof FModal
 */
@Prop() closeText?: string;

/**
 * is there a close button (default: true)
 *
 * @memberof FModal
 */
@Prop() hasClose = true;

/**
 * header text for modal
 *
 * @type {string}
 * @memberof FModal
 */
@Prop() headerText?: string;

/**
 * position of modal (default: center)
 *
 * @type {('center' | 'left' | 'right' | 'bottom' | 'top' | 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right')}
 * @memberof FModal
 */
@Prop() position: 'center' | 'left' | 'right' | 'bottom' | 'top' | 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right' = 'center';

@Prop() size: 'small' | 'medium' | 'large' | 'custom' = 'custom';
  /**
   * variant for modal (default: dialog)
   *
   * @type {('dialog' | 'drawer')}
   * @memberof FModal
   */
  @Prop() variant: 'dialog' | 'drawer' = 'dialog';
  
/**
 * is modal visible
 *
 * @memberof FModal
 */
@Prop() visible = false;

  @State() blockScrolling = true;
  @State() escToClose = true;
  @State() hasHeader = false;
  @State() hasButtonBar = false;

  componentWillLoad() {
    this.applyScrollBlock();
    this.displayHeader();
    this.displayButtonBar();
  }

  componentWillUpdate() {
    this.applyScrollBlock();
    this.displayHeader();
    this.displayButtonBar();
  }

  componentDidRender() {
    this.setFocusableElements();
  }

  componentDidUpdate() {
    if (this.visible) {
      this.setFocusableElements();
    } 
  }

  private displayHeader() {
    if(this.headerText !== undefined && this.headerText.length > 0) {
      this.hasHeader = true;
    }
  }

  private displayButtonBar() {
    if(this.buttons !== undefined && this.buttons.length > 0) {
      this.hasButtonBar = true;
    }
  }

  private setFocusableElements() {
    this.focusableElements = this.modalElement.querySelectorAll('a[href]:not(:disabled), button:not(:disabled), textarea:not(:disabled), input[type="text"]:not(:disabled), input[type="radio"]:not(:disabled), input[type="checkbox"]:not(:disabled), select:not(:disabled)');
    this.firstFocusableElement = this.focusableElements[0];
    this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1];
    this.firstFocusableElement.focus();
  }

  private applyScrollBlock() {
    if (this.visible && this.blockScrolling) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }

  @Listen('closeModal')
  onCloseModal() {
    this.visible = false;
  }

  @Listen('keydown')
  handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === this.firstFocusableElement) {
          this.lastFocusableElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === this.lastFocusableElement) {
          this.firstFocusableElement.focus();
          e.preventDefault();
        }
      }
    } else if (e.key === 'Escape') {
      this.onCloseModal();
      e.preventDefault();
    }
  }

  render() {
    return (
      <div class={classNames('f-modal', this.position, {'visible' : this.visible})} role="dialog" aria-modal="true" ref={(modal) => (this.modalElement = modal as HTMLElement)}>
        <f-overlay></f-overlay>
        <div class={classNames('f-modal-container', this.size, this.variant)}>
          {this.hasHeader ? <f-modal-header modalHeaderText={this.headerText} modalHeaderCloseText={this.closeText} modalHeaderHasClose={this.hasClose} ></f-modal-header> : ''}
          <slot name='alert'/>
          <div class={classNames('f-modal-content')}>
            <slot />
          </div>
          {this.hasButtonBar ? <f-modal-button-bar modalButtons={this.buttons}></f-modal-button-bar> : ''}
        </div>
      </div>
    );
  }
}