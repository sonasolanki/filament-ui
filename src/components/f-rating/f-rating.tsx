import { Component, h, Prop, State } from '@stencil/core';
import { IIconConfig } from '../../interfaces/filament.interfaces';
@Component({
  tag: 'f-rating',
  styleUrl: 'f-rating.scss',
  shadow: false
})

//TODO: if rating is > ratingMax then fill all the stars
//TODO: do we need a hover and click event?

export class FRating {
  /**
   * number of rating items to be filled
   *
   * @type {number}
   * @memberof FRating
   */
  @Prop() rating: number;

  @State() ratingMax: number = 4; //using arrays so 0 based

  @State() starHalf: IIconConfig = {
    iconName: 'star-half-alt',
    iconType: 'fas'
  };

  @State() starFilled: IIconConfig = {
    iconName: 'star',
    iconType: 'fas'
  };

  @State() starEmpty: IIconConfig = {
    iconName: 'star',
    iconType: 'far'
  };

  @State() ratingArray: Array<IIconConfig> = [];

  initRating() {
    for(let i = 0; i <= this.ratingMax; i++) {
      this.ratingArray[i] = this.starEmpty;
    }
  }

  setRating() {
    let wholeRating = Math.floor(this.rating);
    let hasHalf = this.rating%1 > 0 ? true : false;

    for(let r = 0; r < wholeRating; r++) {
      this.ratingArray[r] = this.starFilled;
    }

    if (hasHalf) {
      this.ratingArray[wholeRating] = this.starHalf;
    }
  }

  componentWillLoad() {
    this.initRating();

    if (this.rating !== undefined) {
      this.setRating();
    }
  }

  componentWillUpdate() {
    this.setRating();
  }

  render() {
    return (
      <div class="f-rating">
        {this.ratingArray.map(star =>
          <f-icon iconConfig={star}></f-icon>
        )}
        <span class="screen-reader-text">
          {this.rating} out of {this.ratingMax} rating
        </span>
      </div>
    );
  }
}
