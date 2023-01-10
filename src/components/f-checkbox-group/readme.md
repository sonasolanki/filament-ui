# f-checkbox-group

An input that when in a group allows the user to select multiple values from a list of options

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute             | Description                             | Type                                                                                                                         | Default        |
| ------------------- | --------------------- | --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `allowMultiple`     | `allow-multiple`      | allow multiple checkboxes to be checked | `boolean`                                                                                                                    | `false`        |
| `checkboxGroupName` | `checkbox-group-name` | name of checkbox group                  | `string`                                                                                                                     | `undefined`    |
| `checkboxItems`     | --                    | array of checkbox props                 | `{ checkboxName?: string; uuid: string; checked?: boolean; disabled?: boolean; labelText: string; initialValue: string; }[]` | `undefined`    |
| `variant`           | `variant`             | orientation of checkbox group buttons   | `"horizontal" \| "vertical"`                                                                                                 | `'horizontal'` |


## Dependencies

### Depends on

- [f-checkbox](../f-checkbox)

### Graph
```mermaid
graph TD;
  f-checkbox-group --> f-checkbox
  f-checkbox --> f-icon
  style f-checkbox-group fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
