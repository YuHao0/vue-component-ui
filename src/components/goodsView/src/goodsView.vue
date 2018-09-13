<template>
  <div class='goodsContainer' ref='goodsContainer' :style='[containerStyle]'>
    <div class='goodsItem' ref='goodsItem' v-for='(item, index) in goodsData.goodsList' :key='index'>
      <div class='itemImg'>
        <img :src='item.goodsImage.imageUrl' />
      </div>
      <vue-scroll :ops="scrollOption" class="vueScroll">
        <div class="labelBox">
            <span v-for='label in item.textLabelList' :key='label'>{{label}}</span>
        </div>
      </vue-scroll>
      <h2>{{item.goodsName}}</h2>
      <h4>{{item.goodsSource}}</h4>
      <div class="priceBox">
        <span class="curPrice">{{item.curPrice}}</span>
        <span class="oriPrice">{{item.curPrice}}</span>
        <span class="stock">{{item.stock}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import util from '../../_common/util.js';
import publicConfig from '../../_common/publicConfig.js';

export default {
  name: 'cz-goodsView',

  props: {
    requestData: Object
  },

  data() {
    return {
      goodsData: {},
      containerStyle: {
        gridColumnGap: '',
        gridRowGap: ''
      },
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
    };
  },

  mounted() {
    util.extend(this.goodsData, publicConfig.modulePublic, this.requestData);
    console.log('goodsData:', this.goodsData);
    this.containerStyle.gridColumnGap = this.goodsData.columnSpacing / 20 + 'rem';
    this.containerStyle.gridRowGap = this.goodsData.rowSpacing / 20 + 'rem';
    this.$nextTick(() => {
      var style = publicConfig.dealPublicAttr(this.$refs.goodsContainer, this.goodsData);
    });
  }
};
</script>

<style lang='less' scoped>
.goodsContainer {
  width: 18.75rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .goodsItem {
    background: #eee;
    position: relative;
    .vueScroll{
      position: absolute;
      left: 0;
      top: 8.35rem;
      height: unset!important;
    }
    .itemImg{
      height: 9rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      img{
        max-width: 100%;
        max-height: 100%;
        display: block;
      }
    }
    .labelBox{
      white-space: nowrap;
        span{
          display: inline-block;
          font-size: 0.5rem;
          line-height: 0.65rem;
          padding: 0 0.25rem;
          color: #F47631;
          border: 1px solid #F47631;
          border-radius: 4px;
          margin-right: 0.125rem;
          &:last-child{
            margin-right: 0;
          }
        }
      }
    h2{
      margin-top: 0.5rem;
      font-size: 0.65rem;
      line-height: 0.9rem;
      color: #262626;
      text-align: left;
      padding: 0 0.25rem;
      height: 1.8rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      box-orient: vertical;
      -webkit-box-orient: vertical;
    }
    h4{
      margin-top: 0.25rem;
      text-align: left;
      font-size: 0.6rem;
      padding: 0 0.25rem;
      color: #F47631;
    }
    .priceBox{
      font-size: 0.6rem;
      text-align: left;
      color: #666;
      padding: 0.25rem;
      span{
        display: inline-block;
      }
      .curPrice{
        font-size: 0.8rem;
        color: #333;
        margin-right: 0.25rem;
      }
      .oriPrice{
        color: #999;
      }
      .stock{
        float: right;
        padding-top: 0.2rem;
      }
    }
  }
}
</style>
