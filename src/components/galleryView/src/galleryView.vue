<template>
  <cz-carousel trigger='click' type="card" :requestData='moduleData'>
      <cz-carousel-item v-for='item in requestData.imageList' :key='item.url'>
          <img :src='item.url' draggable="false" :jump="JSON.stringify(item.jump)"/>
      </cz-carousel-item>
  </cz-carousel>
</template>
<script>
    import util from '../../_common/util.js';
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
        util.extend(this.moduleData, {
        proportion: 2.2,
        padding: '10,10,10,10',
        columnSpacing: 10,
        maxItemWidthProportion: 0.7,
        scale: 0.6,
        }, this.requestData);
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
