<template>
  <div class="cz-scrollPageView" ref='scrollPageView'>
    <div class="scrollPageHeader">
      <p>限时抢购</p>
      <span>{{activeTab}}/{{moduleData.imageList.length}}</span>
    </div>
    <vue-scroll :ops="scrollOption" ref="vs" @handle-scroll="handleScroll">
      <div class="scrollPageBox">
        <div class="scrollPageItem" ref='scrollPageItem' :style='scrollPageItemStyle' v-for='(item,index) in moduleData.imageList' :key='index'>
          <img :src="item.imageUrl" draggable="false" />
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
      fontSizeRadio: window.fontSize,
      scrollPageItemStyle: {
        width: '',
        height: '',
        paddingRight: ''
      },
      activeTab: 1,
      itemWidth: 0,
      scrollOption: {
        vuescroll: {
          mode: 'slide',
          scroller: {
            bouncing: false,
            penetrationDeceleration: 0,
            penetrationAcceleration: 0
          },
          snapping: {
            enable: true,
            width: 100
          }
        },
        scrollPanel: {
            scrollingY: false
        },
        rail: {
          size: 0
        }
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
        this.itemWidth = this.$refs.scrollPageView.offsetWidth * this.moduleData.imgWidthProportion;
        this.scrollPageItemStyle.width = this.itemWidth + 'px';
        this.scrollPageItemStyle.height = this.itemWidth / this.moduleData.proportion + 'px';
        this.scrollPageItemStyle.paddingRight = this.moduleData.columnSpacing / window.fontSize + 'rem';
        this.scrollOption.vuescroll.snapping.width = this.itemWidth;
        this.$refs['vs'].refresh();
    });
  },

  methods: {
    handleScroll(v, horizontal) {
      var tab = Math.round(horizontal.scrollLeft / this.itemWidth) + 1;
      if (tab > this.moduleData.imageList.length) {
        tab = this.moduleData.imageList.length
      }
      if (tab < 1) {
        tab = 1;
      }
      this.activeTab = tab;
    }
  }
}
</script>

<style lang="scss" scoped>
.cz-scrollPageView {
  .scrollPageHeader {
    height: 2.5rem;
    background: #fff;
    text-align: left;
    padding-right: 0.6rem;
    p {
      display: inline-block;
      font-size: 0.7rem;
      line-height: 2.5rem;
      color: #262626;
      padding-left: 0.6rem;
    }
    span {
      font-size: 0.7rem;
      float: right;
      height: 0.95rem;
      line-height: 0.95rem;
      background: #262626;
      color: #fff;
      margin-top: 0.75rem;
      padding: 0 0.25rem;
      border-radius: 0.5rem;
    }
  }
  .scrollPageBox {
    white-space: nowrap;
    .scrollPageItem {
      display: inline-block;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
}
</style>
