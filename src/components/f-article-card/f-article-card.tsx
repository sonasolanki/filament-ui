import { Component, h, Element, Prop, State } from '@stencil/core';
import { IIconConfig } from '../../interfaces/filament.interfaces';

@Component({
  tag: 'f-article-card',
  styleUrl: 'f-article-card.scss',
  shadow: false
})

export class FArticleCard {
  @Element() el: HTMLElement;

  /**
   * string of full path of background glow image
   *
   * @type {string}
   * @memberof FArticleCard
   */
  @Prop() glowBackground?: string;

  /**
   * text for header of article card
   *
   * @type {string}
   * @memberof FArticleCard
   */
  @Prop() headerText: string;

  /**
   * text and url for the call to action link
   *
   * @type {{
   *     text: string;
   *     url: string;
   *   }}
   * @memberof FArticleCard
   */
  @Prop() callToAction: {
      text: string;
      url: string;
    };

  /**
   * image url for avatar
   *
   * @type {string}
   * @memberof FArticleCard
   */
  @Prop() imageUrl?: string;

  /**
   * altText for avatar image
   *
   * @type {string}
   * @memberof FArticleCard
   */
  @Prop() imageAltText?: string;

  /**
   * text if no avatar is present
   *
   * @type {string}
   * @memberof FArticleCard
   */
  @Prop() imageText?: string;

  /**
   * icon for article if no text or image present
   *
   * @type {IIconConfig}
   * @memberof FArticleCard
   */
  @Prop() articleIcon?: IIconConfig;

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
    if(this.articleIcon !== undefined) {
      this.hasIcon = true;
    }

    if(this.imageUrl !== undefined) {
      this.hasAvatar = true;
    }
  }

  render() {
    return (
      <div class="f-article-card">
        <div>
          <h4>{this.headerText}</h4>
          <a href={this.callToAction.url}>{this.callToAction.text}</a>
        </div>
        <div>
          {this.hasIcon ? <f-icon iconConfig={this.articleIcon}></f-icon> : '' }
          {this.hasAvatar ? <f-avatar imageUrl={this.imageUrl} imageAltText={this.imageAltText}></f-avatar> : <f-avatar imageText={this.imageText}></f-avatar> }
        </div>
      </div>
    );
  }
}
