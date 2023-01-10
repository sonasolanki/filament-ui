import { Component, h, Prop, State } from '@stencil/core';
import classNames from 'classnames';
import { IIconConfig } from '../../interfaces/filament.interfaces';
import { getUUId } from '../../utils/utils';

@Component({
  tag: 'f-accordion-item',
  styleUrl: 'f-accordion-item.scss',
  shadow: false
})
export class FAccordionItem {
  /**
   * is the item expanded
   *
   * @type {boolean}
   * @memberof FAccordionItem
   */
   @Prop() isExpanded = false;

   /**
    * the title of the accordion item
    *
    * @type {string}
    * @memberof FAccordionItem
    */
   @Prop() text: string;

   /**
    * UUID for the accordion toggle button
    *
    * @type {string}
    * @memberof FAccordionItem
    */
   @Prop() uuid: string;

   /**
    * UUID for the accordion content
    *
    * @type {string}
    * @memberof FAccordionItem
    */
    @Prop() contentUuid: string;

   @State() isToggled = false;
   @State() chevronDownIcon: IIconConfig = {
    iconName: 'chevron-down',
    iconType: 'fal'
   }

  componentWillLoad() {
    if (this.uuid === undefined) {
      this.uuid = getUUId();
    }

    if (this.contentUuid === undefined) {
      this.contentUuid = getUUId();
    }

    if (this.isExpanded === true) {
      this.isToggled = true;
    }
  }

  private handleToggleContent() {
     this.isToggled = !this.isToggled;
   }

   render() {
     return (
       <div class="f-accordion-item">
         <button id={this.uuid} aria-controls={this.contentUuid} type="button" aria-expanded={this.isToggled ? 'true' : 'false'} class={classNames({'open': this.isToggled})} onClick={() => this.handleToggleContent()}>
          {this.text}
          <f-icon class={classNames({'open': this.isToggled})} iconConfig={this.chevronDownIcon}></f-icon>
         </button>
         <div id={this.contentUuid} class={classNames('accordion-content', {'open': this.isToggled})} aria-labelledby={this.uuid}>
           <slot />
         </div>
       </div>
     );
   }
}
