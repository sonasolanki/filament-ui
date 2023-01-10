import { Component, Event, EventEmitter, h, Prop, Element, State, Listen } from '@stencil/core';
import { IIconConfig, IItemModel } from '../../interfaces/filament.interfaces';
import classNames from 'classnames';
import { getUUId } from '../../utils/utils';

@Component({
  tag: 'f-dropdown',
  styleUrl: 'f-dropdown.scss',
  shadow: false
})

export class FDropdown {
  @Element() el: HTMLElement;
  listElement: HTMLDivElement;
  isFiltering = false;
  currentItemSelected: IItemModel;

  /**
   * set the dropdown to disabled
   *
   * @type {boolean}
   * @memberof CDropdown
   */
  @Prop() disabled = false;

  /**
   * error message for textarea (optional)
   *
   * @type {string}
   * @memberof FDropdown
   */
  @Prop() errorMessage?: string;

  /**
   * uuid for input
   *
   * @type {string}
   * @memberof CDropdown
   */
  @Prop() inputId?: string;

  /**
   * array of IItemModels
   *
   * @type {Array<IItemModel>}
   * @memberof CDropdown
   */
  @Prop() items: Array<IItemModel>;

  /**
   * label text for the f-text-input component
   *
   * @type {string}
   * @memberof CDropdown
   */
  @Prop() labelText: string;

  /**
   * direction in which the dropdown list is displayed, up or down
   *
   * @type {string}
   * @memberof CDropdown
   */
  @Prop() listDirection: 'up' | 'down' = 'down';

  /**
   * the number of items to show in the dropdown list
   *
   * @type {number}
   * @memberof CDropdown
   */
  @Prop() listSize = 7;

  /**
   * sets the selection to multi-select
   *
   * @type {boolean}
   * @memberof CDropdown
   */
  @Prop() multiple = false;
  /**
   * place holder text to display when no dropdown selections are made
   *
   * @type {string}
   * @memberof CDropdown
   */
  @Prop() placeholder?: string;

  /**
   * size of the input items in the list options are default or small
   *
   * @type {string}
   * @memberof CDropdown
   */
  @Prop() size: 'default' | 'small' = 'default';

  /**
   * uuid for toggle button
   *
   * @type {string}
   * @memberof CDropdown
   */
  @Prop() toggleId?: string;

  /**
   * emits the selected item from the items array
   *
   * @type {EventEmitter}
   * @memberof CDropdown
   */
  @Event() dropdownItemSelected: EventEmitter;

  @State() isToggled = false;
  @State() selectedText = '';
  @State() selectedIconConfig: IIconConfig;
  @State() selectedIcon: string;
  @State() selectedIconType = 'fal';
  @State() isIconVisible = false;
  @State() selectedIconColor: string;
  @State() filteredItems: Array<IItemModel>;
  @State() noResults = false;
  @State() hasError = false;

  @State() chevronDownIcon: IIconConfig = {
    iconName: 'chevron-down',
    iconType: 'fal'
  }

  @State() errorIcon: IIconConfig =
    {iconName: 'times-circle',
    iconType: 'fas'
  };

  componentWillLoad() {
    this.applyUpdates();
    this.syncFilterArray();
    this.updateIds();
    this.applyError();
  }

  componentWillUpdate() {
    this.applyUpdates();
    if (!this.isFiltering) {
      this.syncFilterArray();
    }
    this.applyError();
  }

  componentDidLoad() {
    this.listElement.style.height = '0px';
  }

  componentDidUpdate() {
    if (this.isToggled) {
      this.setListSize();
      (async () => {
        await customElements.whenDefined('f-text-input');
        const fTextInputElement = document.querySelector('input');
        await fTextInputElement.focus();
      })();
    }
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.onDocumentClick, true);
  }

  private updateIds() {
    if (this.toggleId === undefined) {
      this.toggleId = getUUId();
    }
    if (this.inputId === undefined) {
      this.inputId = getUUId();
    }
  }

  private syncFilterArray() {
    this.filteredItems = [...this.items];
  }

  private onDocumentClick(e: UIEvent) {
    if (this.el.contains(e.target as HTMLElement)) {
      return;
    }
    this.handleClickOutside();
  }

  private handleClickOutside() {
    if (this.isFiltering) {
      this.syncFilterArray();
    }
    this.toggleDropdown();
  }

  private applyUpdates(): void {
    if (this.getSelectedLength() > 0) {
      if (this.multiple) {
        this.selectedText = `${this.getSelectedLength().toString()} items selected`;
        this.selectedIcon = undefined;
      } else {
        this.selectedText = this.items.find((item) => item.selected === true).name;
        const selectedIcon = this.items.find((item) => item.selected === true).icon;

        if (selectedIcon !== undefined) {
          this.selectedIcon = selectedIcon.iconName;
          this.selectedIconColor = selectedIcon.iconColor;
          const iconType = selectedIcon.iconType;

          if (iconType !== undefined) {
            this.selectedIconType = iconType;
          }

          if (this.selectedIcon !== 'none' && this.selectedIcon !== undefined && this.selectedIcon !== null) {
            this.isIconVisible = true;
            this.selectedIconConfig = {
              iconName: this.selectedIcon,
              iconType: this.selectedIconType,
              iconColor: this.selectedIconColor
            };
          } else {
            this.isIconVisible = false;
          }
        }

      }
    } else {
      this.selectedText = this.placeholder;
    }
  }

  private getSelectedLength(): number {
    const tempArray = this.items.filter((item) => item.selected === true);
    return tempArray.length;
  }

  private setListSize(): void {
    let totalHeight = 0;
    if (this.noResults) {
      totalHeight = 50;
    } else {
      const listElements = this.listElement.querySelectorAll('f-item');
      const len: number = listElements.length;
      const limit: number = this.listSize > len ? len : this.listSize;

      for (let i = 0; i < limit; i++) {
        totalHeight += 34;
      }
    }

    totalHeight += 4;
    this.listElement.style.height = `${totalHeight}px`;

    if (this.listDirection === 'up') {
      this.listElement.style.top = `-${totalHeight + 4}px`;
    }
  }

  private toggleDropdown(): void {
    this.isToggled = !this.isToggled;
    if (!this.isToggled) {
      document.removeEventListener('click', this.onDocumentClick, true);
    } else {
      this.onDocumentClick = this.onDocumentClick.bind(this);
      document.addEventListener('click', this.onDocumentClick, true);
    }
  }

  private onToggleDropdownClick = () => {
    if (!this.disabled) {
      this.toggleDropdown();
    }
  };

  private applyError() {
    if (this.errorMessage !== undefined) {
      this.hasError = this.errorMessage.length > 0 ? true : false;
    }
  }

  @Listen("inputChanged")
  private onSearchChange(event): void {
    const curValue = event.detail.value.toLowerCase();
    if (curValue !== '') {
      this.isFiltering = true;
      this.filteredItems = this.items.filter((item) => item.name.toLowerCase().includes(curValue));
      if (this.filteredItems.length === 0) {
        this.noResults = true;
      }
    } else {
      this.noResults = false;
      this.isFiltering = false;
      this.syncFilterArray();
    }
  }

  @Listen('dropdownItemSelect')
  onItemSelected(event: CustomEvent) {
    this.dropdownItemSelected.emit(event.detail);
    this.currentItemSelected = event.detail;
    if (!this.multiple && this.isToggled) {
      /* Single select - toggle list and let itemSelect bubble up to parent */
      this.isFiltering = false;
      this.toggleDropdown();
      document.removeEventListener('click', this.onDocumentClick, true);
    } else if (this.multiple && this.isFiltering) {
      /* Setup multiselect */
      const selectedItem = event.detail;
      if (event.detail.selected === false) {
        this.filteredItems = this.filteredItems.map((item) => {
          if (item.name === selectedItem.name) {
            return {
              ...item,
              selected: true,
            };
          } else {
            return {
              ...item,
            };
          }
        });
      } else {
        this.filteredItems = this.filteredItems.map((item) => {
          if (item.name === selectedItem.name) {
            return {
              ...item,
              selected: false,
            };
          } else {
            return {
              ...item,
            };
          }
        });
      }
    }
  }

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'Escape' && this.isToggled) {
      this.isToggled = false;
      document.removeEventListener('click', this.onDocumentClick, true);
      ev.stopPropagation();
    }
  }

  render() {
    return (
      <div class="f-dropdown">
        <label htmlFor={this.inputId}>{this.labelText}</label>
        {this.isToggled ? (
          <f-text-input type="search" uuid={this.inputId} class={classNames({ 'small': this.size === 'small' })} aria-label="Filter Options" onInput={(ev) => this.onSearchChange(ev)}></f-text-input>
        ) : (
          <button id={this.toggleId} class={classNames('toggle', {'has-error' : this.hasError})} type="button" disabled={this.disabled} onClick={this.onToggleDropdownClick}>
            <span class="f-dropdown-content">{this.selectedText}</span>
            <f-icon class="justify-end" iconConfig={this.chevronDownIcon}></f-icon>
          </button>
        )}
        <div class={classNames('options', { 'open': this.isToggled })} ref={(el) => (this.listElement = el as HTMLDivElement)}>
          <div class="options-list">
            {this.noResults ? <div class="inline-flex justify-center items-center p-l">No Results</div> : ''}
            {this.filteredItems.map((item) => (
              <f-item item={item} parentComponent="dropdown"></f-item>
            ))}
          </div>
        </div>
        {this.hasError ? <div class="error-container mt-s"><f-icon iconConfig={this.errorIcon}></f-icon><span>{this.errorMessage}</span></div> : ''}
      </div>
    );
  }
}
