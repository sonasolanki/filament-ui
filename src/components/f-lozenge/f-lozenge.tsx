import { Component, h, Prop } from '@stencil/core';
import { IIconConfig } from '../../interfaces/filament.interfaces';
import classNames from 'classnames';

/**
 * @author Sona Solanki
 * @description
 * @see
 *
 * @export
 * @class FLozenge
 */
@Component({
  tag: 'f-lozenge',
  styleUrl: 'f-lozenge.scss',
  shadow: false
})

export class FLozenge {
/**
   * the content for the lozenge
   *
   * @type {string}
   * @memberof FLozenge
   */
 @Prop() content: string;

 /**
  * config for icon
  *
  * @type {IIconConfig}
  * @memberof FLozenge
  */
 @Prop() iconConfig: IIconConfig;

  render() {
    return (
      <div class={classNames('f-lozenge', {'icon-left' : (this.iconConfig.iconPlacement === 'left')})}>
        {this.content}
        <f-icon iconConfig={this.iconConfig}></f-icon>
      </div>
    );
  }
}
