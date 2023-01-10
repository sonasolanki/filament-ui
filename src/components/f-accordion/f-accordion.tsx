import { Component, h } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'f-accordion',
  styleUrl: 'f-accordion.scss',
  shadow: false
})
export class FAccordion {
  
  render() {
    return (      
      <div class={classNames('f-accordion')}>
        <slot />
      </div>
    );
  }
}
