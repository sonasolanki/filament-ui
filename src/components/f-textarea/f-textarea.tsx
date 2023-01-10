import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
import { getUUId } from '../../utils/utils';
import { IIconConfig } from '../../interfaces/filament.interfaces';

@Component({
  tag: 'f-textarea',
  styleUrl: 'f-textarea.scss',
  shadow: false
})
export class FTextarea {
    /**
   * is textarea disabled (optional)
   *
   * @type {boolean}
   * @memberof FTextarea
   */
  @Prop() disabled? = false;

    /**
   * error message for textarea (optional)
   *
   * @type {string}
   * @memberof FTextarea
   */
  @Prop() errorMessage?: string;

    /**
   * helper text for textarea (optional)
   *
   * @type {string}
   * @memberof FTextarea
   */
  @Prop() helperText?: string;

    /**
   * label/placeholder text for textarea
   *
   * @type {string}
   * @memberof FTextarea
   */
  @Prop() labelText: string;

    /**
   * required state of textarea
   *
   * @type {boolean}
   * @memberof FTextarea
   */
     @Prop() required? = false;


    /**
   * uuid for textarea
   *
   * @type {string}
   * @memberof FTextarea
   */
  @Prop({mutable: true}) uuid?: string;

    /**
   * initial value of textarea (optional)
   *
   * @type {string}
   * @memberof FTextarea
   */
  @Prop() initialValue?: string;

  @State() hasError? = false;

  @State() errorIcon: IIconConfig = {
    iconName: 'times-circle',
    iconType: 'fas'
  };

  @Event() textareaChanged: EventEmitter;
  @Event() textareaFocused: EventEmitter;
  @Event() textareaBlur: EventEmitter;

  componentWillLoad() {
    if (this.uuid === undefined) {
      this.uuid = getUUId();
    }
    this.checkForError();
  }

  componentWillUpdate() {
    this.checkForError();
  }

  checkForError() {
    if (this.errorMessage !== undefined && this.errorMessage.length > 0) {
      this.hasError = true;
    }
  }

  private onTextareaChangeHandler(e) {
    const textareaState = {
      uuid: e.target.id,
      value: e.target.value,
      initialValue: this.initialValue
    }
    this.textareaChanged.emit(textareaState);
    e.preventDefault();
  }

  private onTextareaFocusHandler(e) {
    const textareaState = {
      uuid: e.target.id,
      value: e.target.value,
      initialValue: this.initialValue
    }
    this.textareaFocused.emit(textareaState);
    e.preventDefault();
  }

  private onTextareaBlurHandler(e) {
    const textareaState = {
      uuid: e.target.id,
      value: e.target.value,
      initialValue: this.initialValue
    }
    this.textareaBlur.emit(textareaState);
    e.preventDefault();
  }

  render() {
    return (
      <div class={classNames('f-textarea', {'has-error' : this.hasError})}>
        <label htmlFor={this.uuid}>{this.labelText}</label>
        <textarea
          id={this.uuid}
          disabled={this.disabled}
          aria-required={this.required}
          aria-disabled={this.disabled}
          aria-labeledby={this.uuid}
          aria-label={this.labelText}
          onBlur={(e) => this.onTextareaBlurHandler(e)}
          onFocus={(e) => this.onTextareaFocusHandler(e)}
          onInput={(e) => this.onTextareaChangeHandler(e)}
        >
          {this.initialValue}
        </textarea>
        {!this.hasError ? <div class="helper-text">{this.helperText}</div> : <div class="error-container"><f-icon iconConfig={this.errorIcon}></f-icon><span>{this.errorMessage}</span></div>}
      </div>
    );
  }
}
