import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';
import { IIconConfig } from '../../interfaces/filament.interfaces';
import classNames from 'classnames';
import { getUUId } from '../../utils/utils';

@Component({
  tag: 'f-checkbox',
  styleUrl: 'f-checkbox.scss',
  shadow: false
})
export class FCheckbox {
  @Prop() checkboxName?: string;
  /**
     * is checkbox checked
     *
     * @memberof FCheckbox
     */
  @Prop() checked? = false;

  /**
    * is checkbox disabled
    *
    * @memberof FCheckbox
    */
  @Prop() disabled? = false;

  /**
   * error message for checkbox (optional)
   *
   * @type {string}
   * @memberof FCheckbox
   */
   @Prop() errorMessage?: string;

  /**
    * label of checkbox
    *
    * @type {string}
    * @memberof FCheckbox
    */
  @Prop() labelText: string;

  /**
    * uuid for checkbox
    *
    * @type {string}
    * @memberof FCheckbox
    */
  @Prop() uuid?: string;

  /**
    * initial value of checkbox
    *
    * @type {string}
    * @memberof FCheckbox
    */
  @Prop() initialValue: string;

  /**
  * emits checkbox detail when selected
  *
  * @type {EventEmitter}
  * @memberof FCheckbox
  */
  @Event() checkboxChecked: EventEmitter;

  @State() hasError? = false;

  @State() errorIcon: IIconConfig = {iconName: 'times-circle', iconType: 'fas'};

  componentWillLoad() {
    if (this.uuid === undefined) {
      this.uuid = getUUId();
    }
    this.applyError();
  }

  componentWillUpdate() {
    this.applyError();
  }

  applyError() {
    if (this.errorMessage !== undefined) {
      this.hasError = this.errorMessage.length > 0 ? true : false;
    }
  }

  private onCheckboxChange(e) {
    this.checked = !this.checked;
    const checkboxState = {
      uuid: this.uuid,
      value: this.initialValue,
      checked: this.checked
    }
    this.checkboxChecked.emit(checkboxState);
    e.preventDefault();
  }

  render() {
    return (
      <div class={classNames('f-checkbox', {'has-error' : this.hasError})}>
        <input
          type="checkbox"
          name={this.checkboxName}
          id={this.uuid}
          value={this.initialValue}
          checked={this.checked}
          disabled={this.disabled}
          onChange={(e) => this.onCheckboxChange(e)}
          aria-checked={this.checked}
        />
        <label htmlFor={this.uuid}>{this.labelText}</label>
        {this.hasError ? <div class="error-container"><f-icon iconConfig={this.errorIcon}></f-icon><span>{this.errorMessage}</span></div> : ''}
      </div>
    );
  }
}
