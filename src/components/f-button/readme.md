# f-button

Buttons trigger an action such as submitting a form or showing/hiding an interface component.

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute      | Description                             | Type                                                                               | Default         |
| ------------ | -------------- | --------------------------------------- | ---------------------------------------------------------------------------------- | --------------- |
| `disabled`   | `disabled`     | disabled state of button                | `boolean`                                                                          | `false`         |
| `hasLoader`  | `has-loader`   | does the button have a loader displayed | `boolean`                                                                          | `false`         |
| `iconConfig` | --             | config for icon on button               | `IIconConfig`                                                                      | `undefined`     |
| `isIconOnly` | `is-icon-only` | is the button an icon only button       | `boolean`                                                                          | `false`         |
| `size`       | `size`         | size of button                          | `"large" \| "medium" \| "small"`                                                   | `'medium'`      |
| `text`       | `text`         | text for button                         | `string`                                                                           | `undefined`     |
| `type`       | `type`         | type of button                          | `"button" \| "reset" \| "submit"`                                                  | `'button'`      |
| `uuid`       | `uuid`         | uuid for button                         | `string`                                                                           | `undefined`     |
| `variant`    | `variant`      | variant of button                       | `"action" \| "destructive" \| "ghost" \| "naked" \| "progressive" \| "regressive"` | `'progressive'` |


## Events

| Event           | Description | Type               |
| --------------- | ----------- | ------------------ |
| `buttonClicked` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [f-alert](../f-alert)
 - [f-modal-button-bar](../f-modal-button-bar)
 - [f-modal-header](../f-modal-header)
 - [f-overflow-menu](../f-overflow-menu)
 - [f-tooltip](../f-tooltip)

### Depends on

- [f-icon](../f-icon)
- [f-loading](../f-loading)

### Graph
```mermaid
graph TD;
  f-button --> f-icon
  f-button --> f-loading
  f-alert --> f-button
  f-modal-button-bar --> f-button
  f-modal-header --> f-button
  f-overflow-menu --> f-button
  f-tooltip --> f-button
  style f-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
