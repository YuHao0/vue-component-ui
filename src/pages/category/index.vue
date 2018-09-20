<template>
  <cz-category :requestData="categoryData"></cz-category>
</template>

<script>
import categoryData from './data.json';

export default {
  data() {
    return {
      categoryData: categoryData
    }
  }
}
</script>

<style lang="scss" scoped>
.category{
  width: 750px;
}
</style>
