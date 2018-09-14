<template>
  <div class="inedx-demo">
    <vue-scroll :ops="scrollOption" class="inedx-demo-scroll">
      <div class="inedx-demo-content">
        <component v-for="(item,index) in componentList" :key='index' :is="getComponentName(item.name)" :requestData="item.data">
          <cz-carousel-item v-for='img in item.data.imageList' :key='img.imageUrl' v-if="item.name == 'carousel'">
            <img :src='img.imageUrl' draggable="false" />
          </cz-carousel-item>
        </component>
      </div>
    </vue-scroll>
  </div>
</template>
<script>
import indexData from './demo.json'
import Vue from 'vue';
const componentNameConfig = ['header', 'carousel', 'girdLayout', 'mixGridLayout', 'closetView', 'goodsView', '', '', 'goodsHorizontalView'];
export default {
    data() {
        return {
            componentList: [],
            scrollOption: {
              vuescroll: {
                  mode: 'slide'
              },
              scrollPanel: {
                  scrollingX: false
              },
              rail: {
                size: 0
              },
              bar: {}
            }
        }
    },
    methods: {
       getComponentName(name) {
         return `cz-${name}`
       }
    },
    created() {
      indexData.forEach((item, index) => {
        if (componentNameConfig[item.type]) {
          if (item.data.title) {
            this.componentList.push({
              name: componentNameConfig[0],
              data: item.data.title
            })
          }
          var componentObj = {
            name: componentNameConfig[item.type],
            data: item.data
          };
          this.componentList.push(componentObj);
        }
      });
    },
    mounted() {
      this.$nextTick(() => {
        var img = document.getElementsByTagName('img');
        for (var i = 0; i < img.length; i++) { 
          img[i].setAttribute('draggable', 'false');
        }
      });
    }
}
</script>
<style lang='scss'>
.inedx-demo {
  width: 380px;
  height: 761px;
  background: url('~src/assets/img/xs.jpg') top center no-repeat;
  background-size: 100%;
  border-radius: 20px;
  position: relative;
}
.inedx-demo-scroll {
  width: 18.75rem !important;
  height: 38rem !important;
  margin: 0 auto;
  transform: scale(0.45, 0.45);
  position: absolute;
  top: -9rem;
  left: 50%;
  margin-left: -9.375rem;
  .inedx-demo-content {
    width: 18.75rem !important;
    .el-carousel__item {
      text-align: center;
      img {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }
    .goodsContainer {
      width: 100%;
    }
     .cz-closetView_content{
       .content-img-item{
         width: 5.25rem !important;
       }
     }
  }
}
</style>