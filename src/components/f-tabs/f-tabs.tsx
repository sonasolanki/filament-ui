import { Component, h, Listen, Event, EventEmitter, Prop } from '@stencil/core';
import { IItemModel } from '../../interfaces/filament.interfaces';
import classNames from 'classnames';
@Component({
  tag: 'f-tabs',
  styleUrl: 'f-tabs.scss',
  shadow: false
})
export class FTabs {
  /**
   * array of itemModels
   *
   * @type {Array<IItemModel>}
   * @memberof FTabs
   */
  @Prop() items: Array<IItemModel>;

  /**
   * variant of tabs
   *
   * @type {('horizontal' | 'vertical')}
   * @memberof FTabs
   */
  @Prop() variant: 'horizontal' | 'vertical' = 'horizontal';

  /**
   * emits tab item being selected
   *
   * @type {EventEmitter}
   * @memberof FTabs
   */
  @Event() tabItemSelected: EventEmitter

  componentWillLoad() {
    this.applyTabItemUpdates();
  }

  componentWillUpdate() {
    this.applyTabItemUpdates();
  }

  private applyTabItemUpdates() {
    this.items = this.items.map(item => {
      return {
        ...item,
        justification: this.variant === 'vertical' ? 'left' : 'center'
      };
    });
  }

  @Listen('tabItemSelect')
  onItemSelected(e: CustomEvent) {
    this.tabItemSelected.emit(e.detail);
    e.preventDefault();
  }

  render() {
    return (
      <div class={classNames('f-tabs', this.variant)}>
        {this.items.map(item => (
          <f-item item={item} parentComponent="tab" role="tab" aria-selected={item.selected}></f-item>
        ))}
      </div>
    );
  }
}
