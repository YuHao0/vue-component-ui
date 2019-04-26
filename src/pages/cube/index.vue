<template>
  <cz-cube :requestData="requestData" :handelClick="handelClick"></cz-cube>
</template>

<script>
import requestData from './data.json';

export default {
  data() {
    return {
      requestData: requestData
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
.cz-cube{
    width: 375px;
    height: 375px;
}
</style>
