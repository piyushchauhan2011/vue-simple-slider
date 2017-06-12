# Vue Simple Slider

> vue-simple-slider

Vue slider component with touch and mouse support.

Modern browsers and IE10+ (IE9 should work, but as flex is not supported you'll need to change CSS).

## Features

* Lightweight, no dependencies
* Navigation, pager and arrows
* Swipe and Mouse support, with velocity detection
* Works only with JSX syntax currently

## Usage

```jsx
import 'node_modules/vue-simple-slider/dist/Slider.css'
import Slider from 'vue-simple-slider'

const style = {
  height: '250px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fafafa'
}

export default {
  components: {
    Slider
  },
  render(h) {
    return (
      <Slider>
        <div style={{ background: '#21BB9A', ...style }}>
          <h1>A</h1>
        </div>
        <div style={{ background: '#329ADD', ...style }}>
          <h1>B</h1>
        </div>
        <div style={{ background: '#9A5CB9', ...style }}>
          <h1>C</h1>
        </div>
        <div style={{ background: '#E64C3C', ...style }}>
          <h1>D</h1>
        </div>
        <div style={{ background: '#2D3F52', ...style }}>
          <h1>E</h1>
        </div>
      </Slider>
    )
  }
}
```

## Screenshot
![screen shot 2017-06-13 at 2 43 31 am](https://user-images.githubusercontent.com/693487/27049909-5bc66f02-4fe3-11e7-8342-8d3da37a3915.png)

## Build Setup

``` bash
# install dependencies
npm i -g vue-cli
npm install

# serve with hot reload at localhost:4000
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-build](https://github.com/vuejs/vue-cli/blob/master/docs/build.md).


## License
vue-simple-slider is open source and released under the [MIT License](LICENSE).

Copyright (c) 2017 [Piyush Chauhan](https://twitter.com/piyushpsycho).

> *PS: I would love to know if you're using vue-simple-slider. Tweet to me at [@piyushpsycho](https://twitter.com/piyushpsycho)*.

## Credits
Shamelessy copied from react community [React Simple Slider](https://github.com/Stanko/react-slider)