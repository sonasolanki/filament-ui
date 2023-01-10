# f-loading

A visual indicator that a process is happening in the background but the interface is not yet ready for interaction.

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                        | Type                             | Default     |
| ---------- | ---------- | -------------------------------------------------- | -------------------------------- | ----------- |
| `inverted` | `inverted` | inverted used for displaying on darker backgrounds | `boolean`                        | `false`     |
| `size`     | `size`     | size of loader                                     | `"large" \| "medium" \| "small"` | `'large'`   |
| `variant`  | `variant`  | variant of loading                                 | `"spinner" \| "vbar"`            | `'spinner'` |


## Dependencies

### Used by

 - [f-button](../f-button)

### Graph
```mermaid
graph TD;
  f-button --> f-loading
  style f-loading fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
