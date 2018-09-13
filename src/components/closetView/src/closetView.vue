<template>
  <div class="cz-closetView" ref='closetView'>
    <div class="cz-closetView_headImg" ref="headImg">
      <img :src="moduleData.headerImg.imageUrl" />
    </div>
    <vue-scroll :ops="scrollOption"> 
      <div class="cz-closetView_content" ref="content" :style="{width:width+'px'}">
        <div class="content-img-item" :style='{width:moduleData.goodsItemWidth/20 + "rem"}' v-for='(item,index) in moduleData.goodsList' :key='index'>
          <div class="img-wrap">
            <img :src="item.goodsImage.imageUrl">
          </div>
          <div class="good-content">
            <div class="good-name">{{item.goodsName}}</div>
            <div class="good-price">￥{{item.curPrice}}</div>
          </div>
        </div>
      </div>
    </vue-scroll>
  </div>
</template>
<script>
import util from '../../_common/util.js';
import publicConfig from '../../_common/publicConfig.js';
export default {
  name: 'cz-closetView',
  props: {
    requestData: Object
  },
  data() {
    return {
      width: '',
      height: '',
      moduleData: {},
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
  computed: {

  },

  methods: {
    
  },

  created() {
      util.extend(this.moduleData, publicConfig.modulePublic, this.requestData);
  },
  
  mounted() {
    this.$nextTick(() => {
        var style = publicConfig.dealPublicAttr(this.$refs.closetView, this.moduleData);
        publicConfig.dealHeight(this.$refs.headImg, {
          padding: this.moduleData.headerPadding,
          proportion: this.moduleData.headerImg.proportion
        });
        publicConfig.dealHeight(this.$refs.content, {
          padding: this.moduleData.footerPadding
        });
        this.width = this.$refs.closetView.offsetWidth;
        // this.$refs.mixGridLayout.style.height = style.height;
        // this.$refs.aside.style.marginRight = this.moduleData.columnSpacing / 20 + 'rem';
        // this.$refs.aside.style.flex = this.moduleData.leftProportion;
        // this.$refs.content.style.flex = 1 - this.moduleData.leftProportion;
        console.log(this.moduleData);
    });
  }
};
</script>
<style scoped lang="scss">
.cz-closetView {
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: #fff;
  }
  .cz-closetView_headImg {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .cz-closetView_content {
    display: flex;
    // overflow-x: auto;
    // overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    .content-img-item {
      .img-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
  }
}
</style>
