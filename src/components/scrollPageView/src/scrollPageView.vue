<template>
  <div class="cz-scrollPageView" ref='scrollPageView'>
    <vue-scroll :ops="scrollOption">
      <div class="cz-scrollPageView_content" ref="content" :style="{width:width+'px'}">
        <div class="content-img-item" ref="contentItem"
          v-for='(item,index) in moduleData.imageList' :key='index'>
          <img :src="item.imageUrl" />
        </div>
      </div>
    </vue-scroll>
  </div>
</template>

<script>
import util from '../../_common/util.js';
import publicConfig from '../../_common/publicConfig.js';

export default {
  name: 'cz-scrollPageView',

  props: {
    requestData: Object
  },
  
  data() {
    return {
      moduleData: {},
      width: '',
      fontSizeRadio: window.fontSize,
      scrollOption: {
        vuescroll: {
            mode: 'slide'
        },
        scrollPanel: {
            scrollingY: false
        },
        rail: {
          size: 0
        },
        bar: {}
      }
    }
  },

  created() {
    util.extend(this.moduleData, publicConfig.modulePublic, this.requestData);
  },

  mounted() {
    this.$nextTick(() => {
        console.log('scrollPageView:', this.moduleData);
        var style = publicConfig.dealPublicAttr(this.$refs.scrollPageView, this.moduleData);
        this.width = this.$refs.scrollPageView.offsetWidth;
    });
  },

  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.cz-scrollPageView{
  .cz-scrollPageView_content{
    display: block;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
