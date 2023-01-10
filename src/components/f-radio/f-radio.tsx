import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
import { getUUId } from '../../utils/utils';

@Component({
  tag: 'f-radio',
  styleUrl: 'f-radio.scss',
  shadow: false
})
export class FRadio {


  @Prop() radioName?: string;

  /**
   * is radio selected
   *
   * @memberof FRadio
   */
  @Prop() selected? = false;

  /**
   * is radio disabled
   *
   * @memberof FRadio
   */
  @Prop() disabled? = false;

  /**
   * label of radio
   *
   * @type {string}
   * @memberof FRadio
   */
  @Prop() labelText: string;
    
  /**
   * uuid for radio
   *
   * @type {string}
   * @memberof FRadio
   */
  @Prop() uuid?: string;
    
  /**
   * initial value of radio
   *
   * @type {string}
   * @memberof FRadio
   */
  @Prop() initialValue: string;

  /**
   * emits radio detail when selected
   *
   * @type {EventEmitter}
   * @memberof FRadio
   */
  @Event() radioSelected: EventEmitter;

  componentWillLoad() {
    if (this.uuid === undefined) {
      this.uuid = getUUId();
    }
  }

  private onRadioSelectHandler(e) {
    this.selected = !this.selected;
    const radioState = {
      uuid: this.uuid,
      value: this.initialValue,
      selected: this.selected
    }
    this.radioSelected.emit(radioState);
    e.preventDefault();
  }
  
  render() {
    return (
      <div class={classNames('f-radio')}>
        <input 
          type="radio"
          name={this.radioName}
          id={this.uuid}
          value={this.initialValue}
          checked={this.selected}
          disabled={this.disabled}
          onChange={(e) => this.onRadioSelectHandler(e)}
          aria-checked={this.selected}
        />
        <label htmlFor={this.uuid}>{this.labelText}</label>
      </div>
    );
  }
}
