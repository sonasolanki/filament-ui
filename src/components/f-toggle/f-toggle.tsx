import { Component, h } from '@stencil/core';

@Component({
  tag: 'f-toggle',
  styleUrl: 'f-toggle.scss',
  shadow: false
})


// export interface IToggleConfig {
//   disabled?: boolean;
//   isOn?: boolean;
//   labelText: string;
//   uuid?: string;
// }

export class FToggle {  
  render() {
    return (
      <div class="f-toggle">
        <label class="switch">
          <span class="label">Reduced motion</span>
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
      </div>
    );
  } 
}
