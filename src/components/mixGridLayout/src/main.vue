<template>
  <div class="cz-mixGridLayout" ref='mixGridLayout'>
      <div class="cz-mixGridLayout__aside" ref="aside">
        <img :src="moduleData.imageList[0].imageUrl"/>
      </div>
      <div class="cz-mixGridLayout__content" ref="content">
          <div class="content-img-item" 
          v-for='(item,index) in moduleData.rightimageList' 
          :key='index'
          :style="{marginBottom:(index == moduleData.rightimageList.length-1) ? 0 : (moduleData.rowSpacing + 'px')}">
                <img :src="item.imageUrl">
          </div>
      </div>
  </div>
</template>
<script>
import util from '../../_common/util.js';
import publicConfig from '../../_common/publicConfig.js';
export default {
  name: 'cz-mixGridLayout',
  props: {
    requestData: Object
  },
  data() {
    return {
      height: '',
      moduleData: {}
    }
  },
  computed: {

  },

  methods: {
    
  },

  created() {
      this.moduleData = util.extend(publicConfig.modulePublic, this.requestData);
      this.moduleData.rightimageList =  this.moduleData.imageList.slice(1);
  },
  
  mounted() {
    this.$nextTick(() => {
        var style = publicConfig.dealPublicAttr(this.$refs.mixGridLayout, this.moduleData);
        this.$refs.mixGridLayout.style.height = style.height;
        this.$refs.aside.style.marginRight = this.moduleData.columnSpacing / 20 + 'rem';
        this.$refs.aside.style.flex = this.moduleData.leftProportion;
        this.$refs.content.style.flex = 1 - this.moduleData.leftProportion;
        console.log(this.moduleData);
    });
  }
};
</script>
<style scoped lang="scss">
  @import '../scss/main';
</style>
