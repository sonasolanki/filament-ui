import { Component, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'f-data-card',
  styleUrl: 'f-data-card.scss',
  shadow: false
})

export class FDataCard {
  @Element() el: HTMLElement;
    /**
   * string of full path of background glow image
   *
   * @type {string}
   * @memberof FDataCard
   */
     @Prop() glowBackground?: string;

     componentWillLoad() {
      this.applyGlowBackground();
    }
  
    componentWillUpdate() {
      this.applyGlowBackground();
    }

    private applyGlowBackground() {
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

  render() {
    return (
      <div class="f-data-card">
        <slot />
      </div>
    );
  }
}
