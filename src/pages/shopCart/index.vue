<template>
  <cz-shopCart :requestData='shopCartData'></cz-shopCart>
</template>

<script>
import shopCartData from './data.json';

export default {
  data() {
    return {
      shopCartData: shopCartData
    }
  }
}
</script>

<style lang="scss" scoped>
.shopCart{
  width: 750px;
  max-height: 1334px;
}
</style>
