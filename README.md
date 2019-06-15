# vue-zdog
Vue wrapper for [zDog](https://github.com/metafizzy/zdog)

# Installation
`yarn add vue-zdog`

# Usage

## with a Vue-cli

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
  <ZRect/>
</ZIllustration>

</template>
```
