# f-info-card

A container for content representing a single entity. e.g. a contact, article, or task.

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                  | Type                             | Default     |
| ---------------- | ----------------- | -------------------------------------------- | -------------------------------- | ----------- |
| `callToAction`   | --                | text and url for the call to action link     | `{ text: string; url: string; }` | `undefined` |
| `glowBackground` | `glow-background` | string of full path of background glow image | `string`                         | `undefined` |
| `headerText`     | `header-text`     | text for header of info card                 | `string`                         | `undefined` |
| `imageAltText`   | `image-alt-text`  | altText for avatar image                     | `string`                         | `undefined` |
| `imageText`      | `image-text`      | text if no avatar is present                 | `string`                         | `undefined` |
| `imageUrl`       | `image-url`       | image url for avatar                         | `string`                         | `undefined` |
| `infoIcon`       | --                | icon for info if no text or image present    | `IIconConfig`                    | `undefined` |
| `text`           | `text`            | text for info card                           | `string`                         | `undefined` |


## Dependencies

### Depends on

- [f-icon](../f-icon)
- [f-avatar](../f-avatar)

### Graph
```mermaid
graph TD;
  f-info-card --> f-icon
  f-info-card --> f-avatar
  style f-info-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
