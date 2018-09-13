<template>
  <div class="cz-closetView" ref='closetView'>
    <div class="cz-closetView_headImg" ref="headImg">
      <img :src="moduleData.headerImg.imageUrl" draggable="false"/>
    </div>
    <vue-scroll :ops="scrollOption">
      <div class="cz-closetView_content" ref="content" :style="{width:width+'px'}">
        <div class="content-img-item" :style='{width:moduleData.goodsItemWidth/fontSizeRadio + "rem"}' v-for='(item,index) in moduleData.goodsList' :key='index'>
          <div class="img-wrap">
            <img :src="item.goodsImage.imageUrl" draggable="false">
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
    display: block;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    .content-img-item {
      display: inline-block;
      .img-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          max-width: 100%;
          max-height: 100%;
          user-select: none;
        }
      }
      .good-content {
        color: #262626;
        white-space: normal;
        .good-name {
          word-break: break-all;
          height: 1.2rem;
          font-size: 0.55rem;
          line-height: 0.6rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .good-price{
          margin-top: 0.25rem;
          font-size: 0.7rem;
        }
      }
    }
  }
}
</style>
