import { Component, h, Prop, State, Event, EventEmitter, Listen } from '@stencil/core';
import classNames from 'classnames';
import { IIconConfig } from '../../interfaces/filament.interfaces';
import { getUUId } from '../../utils/utils';

//TODO: check icon only button

@Component({
  tag: 'f-alert',
  styleUrl: 'f-alert.scss',
  shadow: false
})

export class FAlert {
  /**
   * uuid of close button
   *
   * @type {string}
   * @memberof FAlert
   */
  @Prop() closeUuid?: string;

  /**
   * is alert in container
   *
   * @type {boolean}
   * @memberof FAlert
   */
  @Prop() inContainer? = false;

  /**
   * is alert dismissable
   *
   * @type {boolean}
   * @memberof FAlert
   */
  @Prop() isDismissable? = false;

  /**
   * variant of alert
   *
   * @type {('error' | 'info' | 'success' | 'warning')}
   * @memberof FAlert
   */
  @Prop() variant: 'error' | 'info' | 'success' | 'warning' | 'naked' = 'info';

  @State() icon: IIconConfig = {
    iconName: 'info-circle',
    iconType: 'fas'
  };

  @State() closeIcon: IIconConfig = {
    iconName: 'times',
    iconType: 'fas'
  }

  /**
   * emits {dismissed: true} object when close button is clicked
   *
   * @type {EventEmitter}
   * @memberof FAlert
   */
  @Event() dismiss: EventEmitter;

  componentWillLoad() {
		if(this.isDismissable && this.closeUuid === undefined) {
			this.closeUuid = getUUId();
		}

    this.setType();
  }

  componentWillUpdate() {
    this.setType();
  }

  @Listen('buttonClicked')
  handleDismissButtonEvent() {
    this.dismiss.emit({ dismissed: true });
  }

  private setType(): void {
    switch (this.variant) {
      case 'warning':
        this.icon.iconName = 'exclamation-triangle';
        break;
      case 'success':
        this.icon.iconName = 'check-circle';
        break;
      case 'error':
        this.icon.iconName = 'exclamation-circle';
        break;
      case 'info':
        this.icon.iconName = 'info-circle';
        break;
      // naked is default
      default:
        this.icon.iconName = '';
        break;
    }
  }

  render() {
    return (
      <div class={classNames('f-alert', {[`n-${this.variant}`] : true}, {'in-container' : this.inContainer})} role="alert">
        {this.icon.iconName.length > 0 ? <f-icon iconConfig={this.icon}></f-icon> : ''}
        <div class="text">
          <slot />
        </div>
        {(this.isDismissable) ? (
          <f-button type="button" class="dismiss-close" variant="naked" iconConfig={this.closeIcon} aria-label="dismiss alert"></f-button>
        ) : (
          ''
        )}
      </div>
    );
  }
}
