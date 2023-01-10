import { Component, h, Listen, Prop, State } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'f-radio-group',
  styleUrl: 'f-radio-group.scss',
  shadow: false
})

export class FRadioGroup {
/**
 * name of radio group
 *
 * @type {string}
 * @memberof FRadioGroup
 */
@Prop() radioGroupName: string;

/**
 * array of radio props
 *
 * @type {Array<{radioName?: string, uuid: string, selected?: boolean, disabled?: boolean, labelText: string, initialValue: string}>}
 * @memberof FRadioGroup
 */
@Prop() radioItems: Array<{radioName?: string, uuid: string, selected?: boolean, disabled?: boolean, labelText: string, initialValue: string}>;
/**
 * orientation of radio group buttons
 *
 * @type {('horizontal' | 'vertical')}
 * @memberof FRadioGroup
 */
@Prop() variant: 'horizontal' | 'vertical' = 'horizontal';

@State() radioGroupNames: string;

componentWillLoad() {
  this.radioGroupNames = this.radioGroupName.toLowerCase().replace(/[\s.;,?%0-9]/gi, '');
}

@Listen('radioSelected')
handleRadioSelected(e: CustomEvent) {
  const selectedRadio = e.detail;
  
  this.radioItems = this.radioItems.map((radioItem) => {
    if (radioItem.uuid === selectedRadio.uuid) {
      return {
        ...radioItem,
        selected: true,
      };
    } else {
      return {
        ...radioItem,
        selected: false,
      };
    }
  });
}
  
  render() {
    return (
      <div class="f-radio-group">
        <fieldset class={classNames('flex', this.variant)}>
          <legend class="mb-s">{this.radioGroupName}</legend>
            {this.radioItems.map(radioItem => (
              <f-radio radioName={this.radioGroupNames} uuid={radioItem.uuid} selected={radioItem.selected} disabled={radioItem.disabled} labelText={radioItem.labelText} initialValue={radioItem.initialValue}></f-radio>
            ))}
        </fieldset>
      </div>
    );
  }
}
