import { Component, h, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'f-results-card',
  styleUrl: 'f-results-card.scss',
  shadow: false
})

export class FResultsCard {
  @Element() el: HTMLElement;

  /**
   * text for header of results card
   *
   * @type {string}
   * @memberof FResultsCard
   */
  @Prop() headerText: string;

  /**
   * subheader text for results card
   *
   * @type {string}
   * @memberof FResultsCard
   */
  @Prop() subheaderText?: string;

  /**
   * formatted date for results card
   *
   * @type {string}
   * @memberof FResultsCard
   */
  @Prop() date: string;

  /**
   * text and url for the call to action link
   *
   * @type {{
   *     text: string;
   *     url: string;
   *   }}
   * @memberof FResultsCard
   */
  @Prop() callToAction: {
    text: string;
    url: string;
  };

  @State() hasDate: boolean = false;
  @State() hasSubheader: boolean = false;

  componentWillLoad() {
    this.applyResultCardUpdates();
  }

  componentWillUpdate() {
    this.applyResultCardUpdates();
  }

  applyResultCardUpdates() {
    if(this.date !== undefined) {
      this.hasDate = true;
    }

    if(this.subheaderText !== undefined && this.subheaderText.length > 0) {
      this.hasSubheader = true;
    }
  }
  
  render() {
    return (
      <div class="f-results-card">
        <div class="header-container">
          <h5>{this.headerText}</h5>
          {this.hasDate ? <span>{this.date}</span> : ''}
        </div>
        {this.hasSubheader ? <span class="subheader">{this.subheaderText}</span> : ''}
        <a href={this.callToAction.url}>{this.callToAction.text}</a>
      </div>
    );
  }
}
