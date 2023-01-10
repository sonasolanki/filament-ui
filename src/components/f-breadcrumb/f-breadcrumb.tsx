import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core';
import { INavigationItemModel } from '../../interfaces/filament.interfaces';
import { getUUId } from '../../utils/utils';

@Component({
  tag: 'f-breadcrumb',
  styleUrl: 'f-breadcrumb.scss',
  shadow: false
})

export class FBreadcrumb {
/**
   * array of INavigationModel items that represents the breadcrumb items
   *
   * @type {Array<INavigationItemModel>}
   * @memberof FBreadcrumb
   */
 @Prop() breadcrumbItems: Array<INavigationItemModel>;

 /**
  * the visual divider between each breadcrumb item
  *
  * @type {string}
  * @memberof FBreadcrumb
  */
 @Prop() divider: string = '/';

 /**
  * emits selected breadcrumb item when clicked
  *
  * @type {EventEmitter}
  * @memberof FBreadcrumb
  */
 @Event() breadcrumbSelected: EventEmitter;

 @State() currentPageAria: string;

 private getID(item: INavigationItemModel): string {
   let id: string = item.uuid;

   if (id === undefined) {
     id = getUUId();
   }

   return id;
 }

 private onBreadcrumbClick(item: INavigationItemModel) {
   this.breadcrumbSelected.emit(item);
 }

 private checkForLastCrumb(i: number): string {
  return (i === (this.breadcrumbItems.length - 1) ? 'page' : 'none');
 }

  render() {
    return (
      <nav class="f-breadcrumb" aria-label="Breadcrumb">
        {this.breadcrumbItems.map((breadcrumb, index) => (
          <div>
            <a href="javaScript:void(0)"
              id={this.getID(breadcrumb)}
              aria-current={this.checkForLastCrumb(index)}
              onClick={() => this.onBreadcrumbClick(breadcrumb)}>
                {breadcrumb.name}
            </a>
            <span>{this.divider}</span>
          </div>
        ))}
      </nav>
    );
  }
}
