import { Component, h, Prop, State, Listen, Element, Event, EventEmitter } from '@stencil/core';
import { IIconConfig, INavigationItemModel } from '../../interfaces/filament.interfaces';

@Component({
  tag: 'f-overflow-menu',
  styleUrl: 'f-overflow-menu.scss',
  shadow: false
})
export class FOverflowMenu {
  @Element() el: HTMLElement;
  menuElement: HTMLElement;

  /**
   * iconConfig for overflow menu
   *
   * @type {IIconConfig}
   * @memberof FOverflowMenu
   */
  @Prop() overflowIconConfig?: IIconConfig;

  /**
   * Items for overflow menu
   *
   * @type {Array<INavigationItemModel>}
   * @memberof FOverflowMenu
   */
  @Prop() overflowItems?: Array<INavigationItemModel>;

  /**
   * text for overflow menu
   *
   * @type {string}
   * @memberof FOverflowMenu
   */
  @Prop() overflowText: string;

  /**
   * is overflow menu in a container
   *
   * @memberof FOverflowMenu
   */
  @Prop() inContainer? = false;

/**
 * type of button for overflow button
 *
 * @type {('progressive' | 'action')}
 * @memberof FOverflowMenu
 */
@Prop() variant: 'progressive' | 'action' = 'action';

/**
 * is overflow menu icon only?
 *
 * @memberof FOverflowMenu
 */
@Prop() isIconOnly? = false;

  @State() direction: string = 'right';
  @State() directionY: string = 'bottom';
  @State() isToggled: boolean = false;
  @State() menuClass: string;
  @State() buttonClass: string;
  @State() ariaToggleText: string;
/**
 * emits detail of overflow menu item selected
 *
 * @type {EventEmitter}
 * @memberof FOverflowMenu
 */
@Event() overflowItemSelected: EventEmitter

  componentWillLoad() {
    this.applyOverflowUpdates();
  }

  componentWillUpdate() {
    this.applyOverflowUpdates();
  }

  componentDidUpdate() {
    this.setOverflowMenuPosition();
  }

  onDocumentClick(e:UIEvent) {
    if (this.el.contains((e.target) as HTMLElement)) {
      return;
    }
    this.handleClickOutside();
  }

  handleClickOutside() {
    this.onToggleOverflowItems();
  }

  applyOverflowUpdates() {
    this.menuClass = `overflow-items ${this.isToggled ? 'open' : ''} ${this.direction}`;
    this.buttonClass = `${this.isToggled ? 'open' : ''} ${this.directionY} ${this.inContainer ? 'in-container' : ''}`;
  }

  @Listen('buttonClicked')
  private onToggleOverflowItems() {
    this.isToggled = !this.isToggled;
    this.ariaToggleText = 'toggle button is closed';

    if(this.isToggled) {
      this.ariaToggleText = 'toggle button is open';
    }

    if(!this.isToggled) {
      document.removeEventListener('click', this.onDocumentClick, true);
    } else {
      this.onDocumentClick = this.onDocumentClick.bind(this);
      document.addEventListener('click', this.onDocumentClick, true);
    }
  }

  setOverflowMenuPosition() {
    let top: number = this.menuElement.offsetHeight;

    if (this.directionY === 'top') {
      this.menuElement.setAttribute('style', `top: ${(top * -1)+2}px`);
    } else {
      let top: string ='40px';

      if (this.inContainer) {
        top = '54px';
      }
      this.menuElement.setAttribute('style', `top: ${top}`);
    }
  }

  @Listen('overflowMenuItemSelect')
  onItemSelected(e: CustomEvent) {
    this.onToggleOverflowItems();
    this.overflowItemSelected.emit(e.detail);
    e.preventDefault();
  }

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Escape' && this.isToggled) {
      this.onToggleOverflowItems();
    }
  }

  render() {
    return (
      <div class="f-overflow-menu">
        <f-button variant={this.variant} text={this.overflowText} iconConfig={this.overflowIconConfig} isIconOnly={this.isIconOnly} aria-label={this.ariaToggleText}></f-button>
        <div class={this.menuClass} ref={(el) => this.menuElement = el as HTMLElement}>
          {this.overflowItems.map((item) =>
            <f-item item={item} parentComponent="overflowMenu"></f-item>
          )}
        </div>
      </div>
    );
  }
}
