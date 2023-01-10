import { Component, h, Element, Prop, Event, EventEmitter, Listen } from '@stencil/core';
import classNames from 'classnames';
import { IItemModel } from '../../interfaces/filament.interfaces';
import { setDisabledState } from '../../utils/utils';

@Component({
  tag: 'f-button-group',
  styleUrl: 'f-button-group.scss',
  shadow: false
})
export class FButtonGroup {
  @Element() el: HTMLElement;

  /**
   * Array of items
   *
   * @type {IItemModel[]}
   * @memberof FButtonGroup
   */
  @Prop() items: IItemModel[];

  /**
   * size of button group
   *
   * @type {('default' | 'small')}
   * @memberof FButtonGroup
   */
  @Prop() size: 'default' | 'small' = 'default';

  /**
   * are all buttons in group disabled
   *
   * @memberof FButtonGroup
   */
  @Prop() disabled? = false;

  /**
   * emits button in group being selected
   *
   * @type {EventEmitter}
   * @memberof FButtonGroup
   */
  @Event() buttonGroupItemSelected: EventEmitter;

  componentWillLoad() {
    this.setButtonGroupDisabledState();
  }

  componentDidLoad() {
    this.setButtonGroupSize();
  }

  componentWillUpdate() {
    this.setButtonGroupDisabledState();
  }

  @Listen('buttonGroupItemSelect')
  onItemSelected(e: CustomEvent) {
    this.buttonGroupItemSelected.emit(e.detail);
    e.preventDefault();
  }

  private setButtonGroupDisabledState() {
    if(this.disabled) {
      this.items = this.disabled === true ? (this.items = setDisabledState(this.items, true)) : (this.items = setDisabledState(this.items, false))
    }
  }

  private setButtonGroupSize() {
    if(this.size !== 'default') {
      const nodes = this.el.getElementsByTagName('button');
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].classList.add(this.size);
      }
    }
  }

  render() {
    return (
      <div class={classNames('f-button-group')}>
        {this.items.map(item => (
          <f-item class={classNames({ selected: item.selected === true})} item={item} parentComponent="buttonGroup"></f-item>
        ))}
      </div>
    );
  }
}
