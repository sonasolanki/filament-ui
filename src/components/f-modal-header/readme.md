# f-modal-header



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                 | Description | Type      | Default     |
| ---------------------- | ------------------------- | ----------- | --------- | ----------- |
| `modalHeaderCloseText` | `modal-header-close-text` |             | `string`  | `undefined` |
| `modalHeaderHasClose`  | `modal-header-has-close`  |             | `boolean` | `true`      |
| `modalHeaderText`      | `modal-header-text`       |             | `string`  | `undefined` |


## Events

| Event        | Description | Type               |
| ------------ | ----------- | ------------------ |
| `closeModal` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [f-modal](../f-modal)

### Depends on

- [f-button](../f-button)

### Graph
```mermaid
graph TD;
  f-modal-header --> f-button
  f-button --> f-icon
  f-button --> f-loading
  f-modal --> f-modal-header
  style f-modal-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
