import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';
import { getUUId } from '../../utils/utils';
import { IIconConfig } from '../../interfaces/filament.interfaces';
import classNames from 'classnames';

@Component({
  tag: 'f-text-input',
  styleUrl: 'f-text-input.scss',
  shadow: false
})
  export class FTextInput {
  /**
   * is text input disabled (optional)
   *
   * @type {boolean}
   * @memberof FTextInput
   */
  @Prop() disabled? = false;

  /**
   * error message for text input (optional)
   *
   * @type {string}
   * @memberof FTextInput
   */
  @Prop() errorMessage?: string;

  /**
   * helper text for text input (optional)
   *
   * @type {string}
   * @memberof FTextInput
   */
  @Prop() helperText?: string;

  /**
   * label/placeholder text for text input
   *
   * @type {string}
   * @memberof FTextInput
   */
  @Prop() labelText: string;

  /**
   * required state of text input
   *
   * @type {boolean}
   * @memberof FTextInput
   */
  @Prop() required? = false;

  /**
   * type of text input
   *
   * @type {('text' | 'password' | 'number' | 'search' | 'tel' | 'email' | 'date' | 'month' | 'week' | 'datetime' | 'time' | 'datetime-local' | 'url')}
   * @memberof FTextInput
   */
  @Prop() type: 'text' | 'password' | 'number' | 'search' | 'tel' | 'email' | 'date' | 'month' | 'week' | 'datetime' | 'time' | 'datetime-local' | 'url' = 'text';

  /**
   * uuid for text input
   *
   * @type {string}
   * @memberof FTextInput
   */
  @Prop({mutable: true}) uuid: string;

  /**
   * initial value of text input (optional)
   *
   * @type {string}
   * @memberof FTextInput
   */
  @Prop() initialValue?: string;

  @State() hasError? = false;

  @State() errorIcon: IIconConfig = {iconName: 'times-circle', iconType: 'fas'};

  @Event() inputChanged: EventEmitter;
  @Event() inputFocused: EventEmitter;
  @Event() inputBlur: EventEmitter;

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

  private onTextInputChangeHandler(e) {
    const textInputState = {
      uuid: e.target.id,
      value: e.target.value,
      initialValue: this.initialValue
    }
    this.inputChanged.emit(textInputState);
    e.preventDefault();
  }

  private onTextInputFocusHandler(e) {
    const textInputState = {
      uuid: e.target.id,
      value: e.target.value,
      initialValue: this.initialValue
    }
    this.inputFocused.emit(textInputState);
    e.preventDefault();
  }

  private onTextInputBlurHandler(e) {
    const textInputState = {
      uuid: e.target.id,
      value: e.target.value,
      initialValue: this.initialValue
    }
    this.inputBlur.emit(textInputState);
    e.preventDefault();
  }

  render() {
    return (
      <div class="f-text-input">
        <input
          type={this.type}
          class={classNames({'has-error' : this.hasError})}
          id={this.uuid}
          disabled={this.disabled}
          required={this.required}
          placeholder={this.labelText}
          value={this.initialValue}
          aria-required={this.required}
          aria-disabled={this.disabled}
          aria-labeledby={this.uuid}
          aria-label={this.labelText}
          title={this.helperText}
          onBlur={(e) => this.onTextInputBlurHandler(e)}
          onFocus={(e) => this.onTextInputFocusHandler(e)}
          onInput={(e) => this.onTextInputChangeHandler(e)} />
        <label htmlFor={this.uuid}>{this.labelText}</label>
        {!this.hasError ?
          <div class="helper-text">{this.helperText}</div>
          : <div class="error-container"><f-icon iconConfig={this.errorIcon}></f-icon><span>{this.errorMessage}</span></div>}
      </div>
    );
  }
}
