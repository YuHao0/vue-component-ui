<template>
  <cz-carousel trigger='click' type="card" :requestData='requestData'>
      <cz-carousel-item v-for='item in requestData.imageList' :key='item.imageUrl'>
          <img :src='item.imageUrl' draggable="false"/>
      </cz-carousel-item>
  </cz-carousel>
</template>
<script>
    export default {
      props: {
        requestData: Object
      },
      data() {
          return {
              moduleData: {}
          }
      },
      methods: {
          
      },
      created() {
      },
      mounted() {
      }
    }
</script>
<style lang='scss' scoped>
    .el-carousel__item {
        text-align: center;
        img {
            display: inline-block;
            height: 100%;
            width: 100%;
        }
    }
</style>
