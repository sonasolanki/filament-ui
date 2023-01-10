import { Component, h, Element, Prop, State } from '@stencil/core';
import { IIconConfig } from '../../interfaces/filament.interfaces';

@Component({
  tag: 'f-info-card',
  styleUrl: 'f-info-card.scss',
  shadow: false
})

export class FInfoCard {
  @Element() el: HTMLElement;

  /**
   * string of full path of background glow image
   *
   * @type {string}
   * @memberof FInfoCard
   */
  @Prop() glowBackground?: string;

  /**
   * text for header of info card
   *
   * @type {string}
   * @memberof FInfoCard
   */
  @Prop() headerText: string;

    /**
   * text for info card
   *
   * @type {string}
   * @memberof FInfoCard
   */
     @Prop() text: string;

  /**
   * text and url for the call to action link
   *
   * @type {{
   *     text: string;
   *     url: string;
   *   }}
   * @memberof FInfoCard
   */
  @Prop() callToAction: {
      text: string;
      url: string;
    };

  /**
   * image url for avatar
   *
   * @type {string}
   * @memberof FInfoCard
   */
  @Prop() imageUrl?: string;

  /**
   * altText for avatar image
   *
   * @type {string}
   * @memberof FInfoCard
   */
  @Prop() imageAltText?: string;

  /**
   * text if no avatar is present
   *
   * @type {string}
   * @memberof FInfoCard
   */
  @Prop() imageText?: string;

  /**
   * icon for info if no text or image present
   *
   * @type {IIconConfig}
   * @memberof FInfoCard
   */
  @Prop() infoIcon?: IIconConfig;

  @State() hasIcon: boolean = false;
  @State() hasAvatar: boolean = false;

  componentWillLoad() {
    this.applyIconUpdates();
    this.applyGlowBackground();
  }

  componentWillUpdate() {
    this.applyIconUpdates();
    this.applyGlowBackground();
  }

  applyGlowBackground() {
    if (this.glowBackground !== undefined) {
      let urlArray = this.glowBackground.split('/');
      let svgFileName = urlArray[urlArray.length-1];
      let glowPosition = svgFileName.substring(0, 2);
      let backgroundImagePosition = 'right';
      if ( glowPosition === 'C1') {
        backgroundImagePosition = 'left';
      }
      this.el.setAttribute('style', `background: url('${this.glowBackground}') top ${backgroundImagePosition} no-repeat`);
    }
  }

  applyIconUpdates() {
    if(this.infoIcon !== undefined) {
      this.hasIcon = true;
    }

    if(this.imageUrl !== undefined) {
      this.hasAvatar = true;
    }
  }

  render() {
    return (
      <div class="f-info-card">
        <div>
          <h3><strong>{this.headerText}</strong></h3>
          <span>{this.text}</span>
          <a href={this.callToAction.url}>{this.callToAction.text}</a>
        </div>
        <div>
          {this.hasIcon ? <f-icon iconConfig={this.infoIcon}></f-icon> : '' }
          {this.hasAvatar ? <f-avatar imageUrl={this.imageUrl} imageAltText={this.imageAltText}></f-avatar> : <f-avatar imageText={this.imageText}></f-avatar> }
        </div>
      </div>
    );
  }
}
