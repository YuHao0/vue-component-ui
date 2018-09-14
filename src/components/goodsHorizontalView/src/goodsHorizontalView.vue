<template>
  <div class='goodsContainer' ref='goodsContainer' :style='[containerStyle]'>
    <div class='goodsItem'
      v-for='(item, index) in goodsData.goodsList' :key='index'
      :style="[itemStyle]">
      <div class='itemImg' :style="[itemStyle.itemImgStyle]">
        <img :src='item.goodsImage.imageUrl' draggable="false"/>
      </div>
      <h2 :style="[itemStyle.goodsNameStyle]">{{item.goodsName}}</h2>
      <h4 :style="[itemStyle.goodsSourceStyle]">{{item.goodsSource}}</h4>
      <div class="priceBox">
        <span class="curPrice" :style="[itemStyle.curPriceStyle]">{{item.curPrice}}</span>
        <span class="discount" :style="[itemStyle.discountStyle]">{{item.discount}}</span>
        <span class="stock" :style="[itemStyle.stockStyle]">{{item.stock}}</span>
      </div>
      <vue-scroll :ops="scrollOption" class="vueScroll">
        <div class="labelBox">
          <span v-for='label in item.textLabelList' :key='label' :style="[itemStyle.goodsLabelStyle]">{{label}}</span>
        </div>
      </vue-scroll>
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
      itemStyle: {
        border: '',
        backgroundColor: '',
        marginBottom: '',
        padding: '',
        itemImgStyle: {
          width: '',
          height: ''
        },
        goodsNameStyle: {
          color: ''
        },
        goodsSourceStyle: {
          color: ''
        },
        curPriceStyle: {
          color: ''
        },
        discountStyle: {
          color: '',
          textDecoration: 'none'
        },
        stockStyle: {
          color: ''
        },
        goodsLabelStyle: {
          color: '',
          backgroundColor: '',
          border: '',
          borderRadius: 0
        }
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
    console.log('goodsHorizontalData:', this.goodsData);
    this.containerStyle.gridColumnGap = this.goodsData.columnSpacing / window.fontSize + 'rem';
    this.containerStyle.gridRowGap = this.goodsData.rowSpacing / window.fontSize + 'rem';
    this.itemStyle.marginBottom = this.goodsData.rowSpacing / window.fontSize + 'rem';
    this.itemStyle.border = `1px solid ${this.goodsData.itemStrokeColor}`;
    this.itemStyle.backgroundColor = this.goodsData.itemBackgroundColor;
    this.itemStyle.padding = `0.25rem 0.25rem 0.25rem ${(this.goodsData.imgWidth / window.fontSize + 0.5) + 'rem'}`;
    this.itemStyle.itemImgStyle.width = this.goodsData.imgWidth / window.fontSize + 'rem';
    this.itemStyle.itemImgStyle.height = (this.goodsData.imgWidth / this.goodsData.imgProportion) / window.fontSize + 'rem';
    this.itemStyle.goodsNameStyle.color = this.goodsData.goodsNameColor;
    this.itemStyle.goodsSourceStyle.color = this.goodsData.goodsSourceColor;
    this.itemStyle.curPriceStyle.color = this.goodsData.goodsPriceColor;
    this.itemStyle.discountStyle.color = this.goodsData.goodsDiscountColor;
    this.itemStyle.discountStyle.textDecoration = this.goodsData.isShowDiscountStrike ? 'line-through' : 'none';
    this.itemStyle.stockStyle.color = this.goodsData.goodsStockColor;
    this.itemStyle.goodsLabelStyle.color = this.goodsData.labelTextColor;
    this.itemStyle.goodsLabelStyle.backgroundColor = this.goodsData.labelFillColor;
    this.itemStyle.goodsLabelStyle.border = `1px solid ${this.goodsData.labelStrokeColor}`;
    this.itemStyle.goodsLabelStyle.borderRadius = this.goodsData.labelCorner + 'px';
    this.$nextTick(() => {
      var style = publicConfig.dealPublicAttr(this.$refs.goodsContainer, this.goodsData);
    });
  }
};
</script>

<style lang='scss' scoped>
.goodsContainer {
  width: 18.75rem;
  .goodsItem {
    position: relative;
    padding: 0.25rem;
    .vueScroll{
      height: unset!important;
    }
    .itemImg{
      position: absolute;
      left: 0.25rem;
      top: 0.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        max-width: 100%;
        max-height: 100%;
        display: block;
      }
    }
    .labelBox{
      white-space: nowrap;
      text-align: left;
      padding-left: 0.25rem;
      span{
        display: inline-block;
        font-size: 0.5rem;
        line-height: 0.65rem;
        padding: 0 0.25rem;
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
      text-align: left;
      padding: 0 0.25rem;
      height: 1.8rem;
      overflow: hidden;
      word-break: break-all;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    h4{
      margin-top: 0.325rem;
      text-align: left;
      font-size: 0.6rem;
      padding: 0 0.25rem;
    }
    .priceBox{
      font-size: 0.6rem;
      text-align: left;
      padding: 0.5rem 0.25rem;
      span{
        display: inline-block;
      }
      .curPrice{
        font-size: 0.8rem;
        margin-right: 0.25rem;
      }
      .stock{
        float: right;
        padding-top: 0.2rem;
      }
    }
  }
}
</style>
