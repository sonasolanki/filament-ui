# f-breadcrumb

A list of links showing the location of the current page in the navigational hierarchy.

<!-- Auto Generated Below -->


## Properties

| Property          | Attribute | Description                                                          | Type                     | Default     |
| ----------------- | --------- | -------------------------------------------------------------------- | ------------------------ | ----------- |
| `breadcrumbItems` | --        | array of INavigationModel items that represents the breadcrumb items | `INavigationItemModel[]` | `undefined` |
| `divider`         | `divider` | the visual divider between each breadcrumb item                      | `string`                 | `'/'`       |


## Events

| Event                | Description                                 | Type               |
| -------------------- | ------------------------------------------- | ------------------ |
| `breadcrumbSelected` | emits selected breadcrumb item when clicked | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
