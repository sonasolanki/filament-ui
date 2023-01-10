import { Component, h, Prop } from '@stencil/core';
import { IFButtonInterface } from '../f-button/f-button.interface';

@Component({
  tag: 'f-modal-button-bar',
  styleUrl: 'f-modal-button-bar.scss',
  shadow: false
})
export class FModalButtonBar {
  @Prop() modalButtons?: Array<IFButtonInterface> = [];

  private handleClick(callback: Function, e: CustomEvent) {
    if (callback !== undefined) {
      callback();
      e.preventDefault();
    }
  }
  
  render() {
    return (
      <div class="f-modal-button-bar">
      {this.modalButtons.map((button) => (
        <f-button 
          text={button.text}
          variant={button.variant}
          type={button.type}
          uuid={button.uuid}
          disabled={button.disabled}
          onButtonClicked={(e) => this.handleClick(button.callback, e)}></f-button>
      ))}
      </div>
    );
  }
}