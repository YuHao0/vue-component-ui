<template>
  <div class="gridContainer" ref="gridContainer" :style="[gridStyle]">
    <div 
    class="gridItem" 
    v-for='(item, index) in girdData.imageList' 
    :key="index" :style="[itemStyle]"
    ref="gridItem">
      <img :src="item.imageUrl">
    </div>
  </div>
</template>

<script>
  import util from '../../_common/util.js';
  import publicConfig from '../../_common/publicConfig.js';

  export default {
    name: 'cz-gridContainer',

    props: {
      requestData: Object
    },

    data() {
      return {
        girdData: {},
        itemStyle: {
          flex: '',
          height: 0
        },
        gridStyle: {
          gridTemplateColumns: '',
          gridColumnGap: '',
          gridRowGap: ''
        }
      }
    },

    mounted() {
      this.girdData = util.extend(publicConfig.modulePublic, this.requestData);
      this.gridStyle.gridTemplateColumns = `repeat(${this.girdData.column}, 1fr)`;
      this.gridStyle.gridColumnGap = this.girdData.columnSpacing / 20 + 'rem';
      this.gridStyle.gridRowGap = this.girdData.rowSpacing / 20 + 'rem';
      this.$nextTick(() => {
        var style = publicConfig.dealPublicAttr(this.$refs.gridContainer, this.girdData);
        this.itemStyle.height = (this.$refs.gridItem[0].offsetWidth / this.girdData.proportion) + 'px';
      });
    }
  }
</script>

<style lang="less" scoped>
  .gridContainer{
    display: grid;
    .gridItem{
      display: grid;
      img{
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
