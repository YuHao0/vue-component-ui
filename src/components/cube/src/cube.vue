<template>
  <div class="cz-cube" ref='cube' :style="{height:baseHeight + 'rem' }">
    <div class="cube-wrap"
      :style="{
          left:(paddingList[0] - moduleData.spacing/2)/fontSizeRadio + 'rem',
          top:(paddingList[1] - moduleData.spacing/2)/fontSizeRadio + 'rem',
          width:baseWidth + 'rem',
          height:baseHeight + 'rem'
        }">
      <div class="select-cube" v-for='cube in requestData.magicItems' :key="cube.key" 
        :style="{
          left:cube.startX * baseWidth/requestData.column + 'rem',
          top:cube.startY * baseHeight/requestData.row + 'rem',
          width:(cube.endX - cube.startX) * baseWidth/requestData.column + 'rem',
          height:(cube.endY - cube.startY) * baseHeight/requestData.row + 'rem',
          padding:moduleData.spacing / fontSizeRadio / 2 + 'rem'
        }">
      <img :src="cube.image.url" v-if="cube.image.url" :jump="JSON.stringify(cube.image.jump)" draggable="false">
    </div>
    </div>
  </div>
</template>

<script>
  import util from '../../_common/util.js';
  import publicConfig from '../../_common/publicConfig.js';
  export default {
    name: 'cz-cube',
    props: {
      requestData: Object
    },
    data() {
      return {
        moduleData: {},
        fontSizeRadio: window.fontSize,
        baseWidth: '',
        baseHeight: '',
        paddingList: []
      }
    },
    created() {
      util.extend(this.moduleData, publicConfig.modulePublic, this.requestData);
      let paddingList = this.moduleData.padding.split(',');
      this.paddingList = paddingList;
      this.baseWidth = (375 - paddingList[0] - paddingList[2] + this.moduleData.spacing) / this.fontSizeRadio;
     
      let height = 0
      this.moduleData.magicItems.forEach(item=>{
        if(item.endY > height){
          height = item.endY
        }
      });
      this.baseHeight = (375 - paddingList[1] - paddingList[3] + this.moduleData.spacing) / this.fontSizeRadio / 4 * height;
    },
    mounted() {
      this.$nextTick(() => {
          var style = publicConfig.dealPublicAttr(this.$refs.cube, this.moduleData);
      });
    },
    methods: {
      dealCube() {
        if (!this.requestData.magicItems) {
          return;
        }
      }
    }
  }
</script>

<style lang="scss">
  .cz-cube{
    position: relative;
    .cube-wrap{
      position: absolute;
      z-index: 1;
      height: 100%;
    }
    .select-cube{
      position: absolute;
      z-index: 5;
      display: flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      .name{
        text-align: center;
        display: block;
        width: 100%;
        color:#333;
      }
      img{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
