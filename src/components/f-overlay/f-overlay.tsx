import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'f-overlay',
  styleUrl: 'f-overlay.scss',
  shadow: false
})

export class FOverlay {
	/**
   *
   *
   * @type {boolean}
   * @memberof FOverlay
   */
  @Prop() blockScrolling = true;

  /**
   *
   *
   * @type {boolean}
   * @memberof FOverlay
   */
  @Prop() escToClose = true;

  /**
   *
   *
   * @type {boolean}
   * @memberof FOverlay
   */
  @Prop() visible = false;

  render() {
    return (
      <div class="f-overlay"></div>
    );
  }
}
