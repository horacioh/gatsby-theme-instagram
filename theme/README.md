# Gatsby Theme Instagram Source code

- [Online demo](https://gatsby-theme-instagram.netlify.com/)

## What you get from this theme

- Add Instagram posts to your Gatsby site
- A set of UI Components to layout posts on every section.
- A set of custom hooks to customize the data you render on your components

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1. Install the theme

```sh
npm install --save @horacioh/gatsby-theme-instagram
```

or

```sh
yarn add @horacioh/gatsby-theme-instagram
```

2. Add the theme to your `gatsby-config.js`:

```js
module.exports = {
  plugins: ["@horacioh/gatsby-theme-instagram"],
}
```

3. Start your site

```sh
gatsby develop
```

## Usage

### Theme options

| Key        | Default value  | Description                                                                                                                           |
| ---------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `type`     | `account`      | the type of data that will be queried. Possible values are `account`, `hashtag` & `user-profile` (`user-profile` is not supported yet). |
| `username` | `doraforscale` | instagram username you want to pull data from                                                                                         |
| `hashtag`  | `undefined`    | instagram hashtag you want to pull data from                                                                                          |

#### Example usage

All the options are pretty much similar to how you setup [`gatsby-source-instagram`](https://github.com/oorestisime/gatsby-source-instagram). This theme uses `gatsby-source-instagram` at its core to pull data from Instagram.

##### Public Scrapping for posts

If you intend to use the public scraping method then you need to pass the concerning username

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "@horacioh/gatsby-theme-instagram",
      options: {
        type: `account` // optional. `account` is the default `type` value
        username: "doraforscale",
      },
    },
  ],
}
```

##### Hashtag scraping

If you want to source nodes from hashtags then you need the following:

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-source-instagram`,
    options: {
      type: `hashtag`,
      hashtag: `snowing`,
    },
  },
]
```

### Exported components

#### `Grid`

This component let you render a grid of Instagrams posts. This component is useful when you want to render the recents posts for a specific account or hashtag.

This component uses internally the `Container` components from `theme-ui`, so the with of the component will depend on the Container size you have defined.

##### Example usage in MDX

In any MDX file:

```mdx
import { Grid } from "@horacioh/gatsby-theme-instagram"

# Look at my photos!

<Grid />
```

##### Example usage in React components

In any React component:

```jsx
import React from "react"
import { Grid } from "@horacioh/gatsby-theme-instagram"

export default () => (
  <div>
    <Grid />
  </div>
)
```

##### How to shadow this component

If you want to use [component shadowing](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/) with this component, create a file at the following path in your site:

```sh
src/@horacioh/gatsby-theme-instagram/components/Grid.js
```

[checkout the Grid Implementation](./src/components/Grid.js) for more about how to shadow it.

##### How to override the Grid Component Query

If you want to override the Grid query, you can shadow the custom hook used to fetch data to Instagram:

```sh
src/@horacioh/gatsby-theme-instagram/hooks/useGridQuery.js
```

[checkout the useGridQuery Implementation](./src/hooks/useGridQuery.js) for more about how to shadow it.
