# vue-zdog
Vue wrapper for [zDog](https://github.com/metafizzy/zdog)

# Demo
[See here](https://alexandrebonaventure.github.io/vue-zdog)
-
[source](https://github.com/AlexandreBonaventure/vue-zdog/blob/master/examples/index.html)

# Installation
`yarn add vue-zdog`
This plugin requires Vue and zDog as a peer dependencie. If you are using a bundler please make sure to add them to your package.json / if you are using it directly in the browser make sure those two are loaded before `vue-zdog` (see example source [here](https://github.com/AlexandreBonaventure/vue-zdog/blob/master/examples/index.html))

# Usage

## with Vue-CLI

Import components and use them in the template
```js
<script>
import { ZIllustration, ZRect} from 'vue-zdog'

export default {
  components: {
    ZIllustration, 
    ZRect
  },
}
</script>

<template>

  <ZIllustration>
    <ZRect :stroke="20" color="red" :translate="{ x: 20, y: 40 }"/>
  </ZIllustration>

</template>
```

# API

## ZIllustration
This is the root component under which all the shapes will be created

### props
- svg
- resize
- dragRotate
- zoom
- centered

### Auto-rendering
WIP

## Shapes (`Z{shape}`)

`vue-zdog` is meant to expose as vue components all the shapes provided by zdog:
- Anchor
- Rect
- RoundedRect
- Ellipse
- Polygon
- Path
- Hemisphere
- Cone
- Cylinder
- Box

_NB: it will be provided be vue-zdog as `Z{shape}` (prefixed by Z) ie: Box -> `ZBox`_

In order to use them you'll have to nest them under a root `ZIllustration`

### props
see [zdog API doc](https://zzz.dog/shapes)
