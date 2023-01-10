import { Component, h, Prop, State } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'f-badge',
  styleUrl: 'f-badge.scss',
  shadow: false
})

export class FBadge {
  /**
   * the content for the badge
   * 
   * @type {string}
   * @memberof FBadge
   */
  @Prop() content: string;

  @State() isValid: boolean;

  componentWillLoad() {
    this.applyBadgeUpdates();
  }

  componentWillUpdate() {
    this.applyBadgeUpdates();
  }

  private applyBadgeUpdates() {
    this.isValid = this.content.length <= 3 ? true : false;
  }
  
  render() {
    return (
      <div class={classNames('f-badge')} aria-label={this.content+' alert(s)'}>
        {this.isValid ? this.content : '!'}
      </div>
    );
  }
}
