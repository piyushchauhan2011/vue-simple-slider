# Vue Simple Slider

> vue-simple-slider

Vue slider component with touch and mouse support.

Modern browsers and IE10+ (IE9 should work, but as flex is not supported you'll need to change CSS).

## Features

* Lightweight, no dependencies
* Navigation, pager and arrows
* Swipe and Mouse support, with velocity detection

## Usage

```html
<template>
  <Slider
    :loop="false"
    :selected="0"
    :showArrows="true"
    :showNav="true">

      <div>A</div>
      <div>B</div>
      <div>C</div>
      <div>D</div>
      <div>E</div>

  </Slider>
</template>

<script>
import Slider from 'vue-simple-slider'

export default {
  components: {
    Slider
  }
}
</script>
```

## Screenshot
![screen shot 2017-06-13 at 2 43 31 am](https://user-images.githubusercontent.com/693487/27049909-5bc66f02-4fe3-11e7-8342-8d3da37a3915.png)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:4000
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-build](https://github.com/vuejs/vue-cli/blob/master/docs/build.md).
