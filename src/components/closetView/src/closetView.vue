<template>
  <div class="cz-closetView" ref='closetView'>
    <div class="cz-closetView_headImg" ref="headImg">
      <img :src="moduleData.headerImage.url" :jump="JSON.stringify(moduleData.headerImage.jump)" draggable="false"/>
    </div>
    <div ref="scrollContent">
      <vue-scroll :ops="scrollOption" :style="{marginTop:-moduleData.offset/fontSizeRadio + 'rem'}" :class="{contentShadow:moduleData.showShadow}">
        <div class="cz-closetView_content" ref="content" :style="{width:width+'px'}">
          <div class="content-img-item" ref="contentItem"
            :style='{
              width:moduleData.goodsItemWidth/fontSizeRadio + "rem",
              background:moduleData.goodsFillColor,
              border:"1px solid " + moduleData.goodsStrokeColor
            }' 
            v-for='(item,index) in moduleData.itemList' :key='index'>
            <div class="img-wrap" ref="itemImg">
              <img :src="item.image.url" draggable="false" :jump="JSON.stringify(item.image.jump)">
            </div>
            <div class="good-content">
              <div class="good-name" :style="{color:moduleData.itemStyle.nameStyle.foreground}">{{item.name}}</div>
              <div class="good-price" :style="{color:moduleData.itemStyle.priceStyle.foreground}">{{item.price}}</div>
            </div>
          </div>
        </div>
      </vue-scroll>
    </div>
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
      moduleData: {
        goodsItemWidth: 210,
        goodsImgProportion: 1
      },
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
          proportion: this.moduleData.headerImage.proportion
        });
        publicConfig.dealHeight(this.$refs.scrollContent, {
          padding: this.moduleData.footerPadding
        });
        this.width = this.$refs.closetView.offsetWidth;
        this.$refs.itemImg.forEach((item)=>{
           publicConfig.dealHeight(item, {
            padding: this.moduleData.goodsImgPadding,
            proportion: this.moduleData.goodsImgProportion
          });
        });
    });
  },
  destroyed() {
    
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
  .contentShadow{
    box-shadow: 0 1px 0 0 #262626;
  }
  .cz-closetView_content {
    display: block;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    .content-img-item {
      display: inline-block;
      vertical-align: top;
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
