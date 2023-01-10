import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
import { IIconConfig } from '../../interfaces/filament.interfaces';
import { getUUId } from '../../utils/utils';

@Component({
  tag: 'f-button',
  styleUrl: 'f-button.scss',
  shadow: false
})
export class FButton {
  /**
   * text for button
   *
   * @type {string}
   * @memberof FButton
   */
  @Prop() text: string;

  /**
   * disabled state of button
   *
   * @memberof FButton
   */
  @Prop() disabled = false;

  /**
   * variant of button
   *
   * @type {('action' | 'destructive' | 'ghost' | 'progressive' | 'regressive')}
   * @memberof FButton
   */
  @Prop() variant: 'action' | 'destructive' | 'ghost' | 'progressive' | 'regressive' | 'naked' = 'progressive';

  /**
   * type of button
   *
   * @type {('button' | 'reset' | 'submit')}
   * @memberof FButton
   */
  @Prop() type: 'button' | 'reset' | 'submit' = 'button';

  /**
   * size of button
   *
   * @type {('small' | 'medium' | 'large')}
   * @memberof FButton
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * config for icon on button
   *
   * @type {IIconConfig}
   * @memberof FButton
   */
  @Prop() iconConfig: IIconConfig;

  /**
   * is the button an icon only button
   *
   *
   * @memberof FButton
   */
  @Prop() isIconOnly = false;

  /**
   * does the button have a loader displayed
   *
   * @memberof FButton
   */
  @Prop() hasLoader = false;

  /**
   * uuid for button
   *
   * @type {string}
   * @memberof FButton
   */
  @Prop() uuid: string;

  @Event() buttonClicked: EventEmitter;

  componentWillLoad() {
    if (this.uuid === undefined) {
      this.uuid = getUUId();
    }
  }

  private handleButtonEvent(e: MouseEvent) {
    this.buttonClicked.emit(e);
  }

  render() {
    return (
      <button
        type={this.type}
        class={classNames('f-button', this.variant, this.size)}
        disabled={this.disabled}
        id={this.uuid}
        aria-disabled={this.disabled}
        title={this.text}
        onClick={(e) => this.handleButtonEvent(e)}
      >
        <span class={classNames({'screen-reader-text': this.isIconOnly})}>{this.text}</span>
        {this.iconConfig && (this.iconConfig.iconName !== undefined && this.iconConfig.iconType !== undefined) ? <f-icon class={classNames({'icon-only' : this.isIconOnly})} iconConfig={this.iconConfig}></f-icon> : ''}
        {this.hasLoader ? <f-loading size='small' inverted></f-loading> : ''}
      </button>
    );
  }
}
