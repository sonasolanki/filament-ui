import { Component, h, Prop, State } from '@stencil/core';
import { IIconConfig } from '../../interfaces/filament.interfaces';
import tippy, {roundArrow} from 'tippy.js';

@Component({
  tag: 'f-tooltip',
  styleUrl: 'f-tooltip.scss',
  shadow: false
})

export class FTooltip {
  /**
   * is the tooltip just an icon (default: true)
   *
   * @memberof FTooltip
   */
  @Prop() isIconOnly = true;

  /**
   * content of tooltip
   *
   * @type {string}
   * @memberof FTooltip
   */
  @Prop() content: string;

  /**
   * position of tooltip content (default: right)
   *
   * @type {('top' | 'right' | 'bottom' | 'left')}
   * @memberof FTooltip
   */
  @Prop() position: 'top' | 'right' | 'bottom' | 'left' = 'right';

  /**
   * variant of tooltip trigger (default: info)
   *
   * @type {('info' | 'question')}
   * @memberof FTooltip
   */
  @Prop() variant: 'info' | 'question' = 'info';

  @State() tooltipIconConfig: IIconConfig = {
    iconName: 'circle-info',
    iconType: 'fas',
  }

  private setIconVariant() {
    if (this.variant === 'question') {
      this.tooltipIconConfig.iconName = 'circle-question';
    }
  }

  componentWillLoad() {
    this.setIconVariant();
  }

  componentDidLoad() {
    tippy('#tooltipButton', {
      content: this.content,
      placement: this.position,
      arrow: roundArrow,
      theme: 'filament-tooltip',
      trigger: 'click',
    });
  }

  render() {
    return (
      <div class="f-tooltip">
        <f-button id="tooltipButton" variant='naked' size='small' isIconOnly iconConfig={this.tooltipIconConfig}></f-button>
      </div>
    );
  }
}


