import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'template-component',
  styleUrl: 'template-component.scss',
  shadow: false
})
export class TemplateComponent {

  /**
   * Config for TemplateComponent props
   *
   * @type {string}
   * @memberof TemplateComponent
   */
  @Prop() TemplateComponentProp: string;
  
  render() {
    return (
      <div class="template-component">
        template-component
      </div>
    );
  }
}
