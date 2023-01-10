import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';
import classNames from 'classnames';
import { IItemModel } from '../../interfaces/filament.interfaces';
import { getUUId } from '../../utils/utils';

//TODO: add tag size to be passed in.

@Component({
  tag: 'f-item',
  styleUrl: 'f-item.scss',
  shadow: false
})
export class FItem {
  /**
   * model for item
   *
   * @type {IItemModel}
   * @memberof FItem
   */
  @Prop({mutable: true}) item: IItemModel;

  /**
   * preant component of item
   *
   * @type {string}
   * @memberof FItem
   */
  @Prop() parentComponent: string;

  /**
   * emits item being selected
   *
   * @type {EventEmitter}
   * @memberof FItem
   */
  @Event() itemSelect: EventEmitter;

  /**
   * emits tab item being selected
   *
   * @type {EventEmitter}
   * @memberof FItem
   */
   @Event() tabItemSelect: EventEmitter;

  /**
   * emits dropdown item being selected
   *
   * @type {EventEmitter}
   * @memberof FItem
   */
  @Event() dropdownItemSelect: EventEmitter;
/**
 * emits overflow menu item being selected
 *
 * @type {EventEmitter}
 * @memberof FItem
 */
@Event() overflowMenuItemSelect: EventEmitter

/**
 * emits button group item being selected
 *
 * @type {EventEmitter}
 * @memberof FItem
 */
 @Event() buttonGroupItemSelect: EventEmitter

   @State() hasIcon = false;

  componentWillLoad() {
    if (this.item.uuid === undefined) {
      this.item.uuid = getUUId();
    }
    this.applyIconAttributes();
  }

  componentWillUpdate() {
    this.applyIconAttributes();
  }

  applyIconAttributes() {
    if (this.item.icon !== undefined) {
      this.hasIcon = true;
    }
  }

  private itemSelectHandler() {
    if(this.parentComponent === 'tab') {
      this.tabItemSelect.emit(this.item);
    } else if (this.parentComponent === 'dropdown') {
      this.dropdownItemSelect.emit(this.item);
    } else if (this.parentComponent === 'overflowMenu') {
      this.overflowMenuItemSelect.emit(this.item);
    } else if (this.parentComponent === 'buttonGroup') {
      this.buttonGroupItemSelect.emit(this.item);
    } else {
      this.itemSelect.emit(this.item);
    }
  }

  render() {
    return (
      <button type="button"
        class={classNames('f-item', {'selected' : this.item.selected}, {[`${this.item.justification}`] : this.item.justification !== undefined}, {'icon-left' : (this.item.icon !== undefined && this.item.icon.iconPlacement === 'left')}, {'flex-column' : (this.item.subText !== undefined && this.item.subText.length > 0)})}
        disabled={this.item.disabled}
        id={this.item.uuid}
        aria-disabled={this.item.disabled}
        title={this.item.name}
        onClick={() => this.itemSelectHandler()}
      >
        <span class="flex">
          <span>{this.item.name}</span>
          {this.hasIcon ? <f-icon iconConfig={this.item.icon}></f-icon> : ''}
        </span>
        {this.item.subText !== undefined ? <span class="sub-text">{this.item.subText}</span> : ''}
      </button>
    );
  }
}
