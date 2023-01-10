import { Component, h, Prop } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'f-loading',
  styleUrl: 'f-loading.scss',
  shadow: false
})
export class FLoading {

 /**
  * size of loader
  *
  * @type {('small' | 'medium' | 'large')}
  * @memberof FLoading
  */
 @Prop() size: 'small' | 'medium' | 'large' = 'large';

 //TODO: get inverted colours
 /**
  * inverted used for displaying on darker backgrounds
  *
  * @type {boolean}
  * @memberof FLoading
  */
 @Prop() inverted = false;

/**
 * variant of loading 
 *
 * @type {('spinner' | 'vbar')}
 * @memberof FLoading
 */
@Prop() variant: 'spinner' | 'vbar' = 'spinner';

  render() {
    return (
      this.variant === 'vbar' ?
        <div class={classNames('vbar', this.size, {'inverted' : this.inverted})}>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
          <div class="bar4"></div>
          <div class="bar5"></div>          
        </div>
      :
      <div class={classNames('spinner', this.size, {'inverted' : this.inverted})}></div>
    );
  }
}
