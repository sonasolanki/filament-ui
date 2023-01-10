import { Component, h, Listen, Prop, State } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'f-checkbox-group',
  styleUrl: 'f-checkbox-group.scss',
  shadow: false
})

export class FCheckboxGroup {
/**
 * name of checkbox group
 *
 * @type {string}
 * @memberof FCheckboxGroup
 */
@Prop() checkboxGroupName: string;

/**
 * array of checkbox props
 *
 * @type {Array<{checkboxName?: string, uuid: string, checked?: boolean, disabled?: boolean, labelText: string, initialValue: string}>}
 * @memberof FCheckboxGroup
 */
@Prop() checkboxItems: Array<{checkboxName?: string, uuid: string, checked?: boolean, disabled?: boolean, labelText: string, initialValue: string}>;
/**
 * orientation of checkbox group buttons
 *
 * @type {('horizontal' | 'vertical')}
 * @memberof FCheckboxGroup
 */
@Prop() variant: 'horizontal' | 'vertical' = 'horizontal';

/**
 * allow multiple checkboxes to be checked
 *
 * @memberof FCheckboxGroup
 */
@Prop() allowMultiple = false;

@State() checkboxGroupNames: string;

componentWillLoad() {
  this.checkboxGroupNames = this.checkboxGroupName.toLowerCase().replace(/[\s.;,?%0-9]/gi, '');
}

@Listen('checkboxChecked')
handlecheckboxchecked(e: CustomEvent) {
  let checkedCheckbox = e.detail;

  if(this.allowMultiple) {
    this.checkboxItems = this.checkboxItems.map((checkboxItem) => {
      if (checkboxItem.uuid === checkedCheckbox.uuid) {
        return {
          ...checkboxItem,
          checked: true,
        };
      } else {
        return {
          ...checkboxItem
        }
      }
    });
  } else {
    this.checkboxItems = this.checkboxItems.map((checkboxItem) => {
      if (checkboxItem.uuid === checkedCheckbox.uuid) {
        return {
          ...checkboxItem,
          checked: true,
        };
      } else {
        return {
          ...checkboxItem,
          checked: false,
        };
      }
    });
    
  }
}
  
  render() {
    return (
      <div class="f-checkbox-group">
        <fieldset class={classNames('flex', this.variant)}>
          <legend class="mb-s">{this.checkboxGroupName}</legend>
            {this.checkboxItems.map(checkboxItem => (
              <f-checkbox checkboxName={this.checkboxGroupNames} uuid={checkboxItem.uuid} checked={checkboxItem.checked} disabled={checkboxItem.disabled} labelText={checkboxItem.labelText} initialValue={checkboxItem.initialValue}></f-checkbox>
            ))}
        </fieldset>
      </div>
    );
  }
}
