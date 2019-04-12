<template>
  <cz-category :requestData="categoryData" :handelClick="handelClick"></cz-category>
</template>

<script>
import categoryData from './data.json';

export default {
  data() {
    return {
      categoryData: categoryData
    }
  },
  methods: {
    handelClick(item) {
      console.log(item);
    }
  }
}
</script>

<style lang="scss" scoped>
.category{
  width: 750px;
}
</style>
+