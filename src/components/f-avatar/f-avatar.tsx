import { Component, h, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'f-avatar',
  styleUrl: 'f-avatar.scss',
  shadow: false
})

export class FAvatar {
  @Element() el: HTMLElement;
  
  /**
   * image url for avatar
   *
   * @type {string}
   * @memberof FAvatar
   */
   @Prop() imageUrl?: string;

   /**
    * altText for avatar image
    *
    * @type {string}
    * @memberof FAvatar
    */
   @Prop() imageAltText?: string;
 
   /**
    * text if no avatar is present
    *
    * @type {string}
    * @memberof FAvatar
    */
   @Prop() imageText?: string;

  @State() hasImage = false;

  componentWillLoad() {
    if(this.imageUrl !== undefined) {
      this.hasImage = true;
    }
  }

  componentWillUpdate() {
    if(this.imageUrl !== undefined) {
      this.hasImage = true;
    }
  }
  
  render() {
    return (
      <div class="f-avatar">
        {this.hasImage ? <img src={this.imageUrl} alt={this.imageAltText} class="avatar-image"/> 
          : <h5>{ this.imageText }</h5> }
      </div>
    );
  }
}
