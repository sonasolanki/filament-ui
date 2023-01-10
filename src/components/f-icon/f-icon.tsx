import { Component, h, Element, Prop, State } from '@stencil/core';
import { IIconConfig } from '../../interfaces/filament.interfaces';

@Component({
  tag: 'f-icon',
  styleUrl: 'f-icon.scss',
  shadow: false
})
export class FIcon {
  @Element() el: HTMLElement;

  /**
   * config for icon component
   *
   * @type {IIconConfig}
   * @memberof FIcon
   */
  @Prop({mutable: true}) iconConfig: IIconConfig;

  @State() isValid = false;

  componentWillLoad() {
    this.applyIconUpdates();
  }

  componentWillUpdate() {
    this.applyIconUpdates();
  }

  private applyIconUpdates() {
    if (this.iconConfig !== undefined && this.iconConfig.iconColor !== undefined) {
      this.el.setAttribute('style', `--icon-color: ${this.iconConfig.iconColor}`);
    }

    this.isValid = (this.iconConfig && (this.iconConfig.iconName && this.iconConfig.iconType)) ? true : false;
  }

  render() {
    return (
      <span class={this.iconConfig.iconName}>
        {this.isValid
          ? <i class={`${this.iconConfig.iconType} fa-${this.iconConfig.iconName}`} aria-hidden="true"></i>
          : '?'}
      </span>);
  }
}
