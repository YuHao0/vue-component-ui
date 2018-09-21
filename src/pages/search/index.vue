<template>
  <div class="searchNav">
    <cz-search :requestData="searchData"></cz-search>
    <cz-goodsView :requestData='goodsData.data'></cz-goodsView>
  </div>
</template>

<script>
import searchData from './data.json';

export default {
  data() {
    return {
      searchData: searchData,
      goodsData: {
        type: 5,
        data: {
          itemStrokeColor: '#666666',
          itemBackgroundColor: '#EEEEEE',
          itemCorner: 2,
          imgProportion: 1.0,
          goodsNameColor: '#262626',
          goodsSourceColor: '#F47631',
          goodsPriceColor: '#262626',
          goodsDiscountColor: '#F47631',
          isShowDiscountStrike: true,
          goodsStockColor: '#666666',
          backgroundColor: '#FFFFFF',
          rowSpacing: 15,
          columnSpacing: 10,
          padding: '10,0,10,10',
          labelTextColor: '#FF0000',
          labelFillColor: '#FFFFFF',
          labelStrokeColor: '#0000FF',
          labelCorner: 2,
          dividerHeight: 10,
          dividerColor: '#f5f5f5',
          goodsList: [{
              goodsImage: {
                imageUrl: 'http://img.zhefengle.com/eb0f4f25d462300bc37280416f98d11c.jpg?imageView2/2/w/300/interlace/1/q/93/format/webp'
              },
              goodsName: '商品名称商品名称',
              curPrice: '¥ 594',
              discount: '4.5折',
              goodsSource: '海外直邮',
              stock: '库存：20',
              textLabelList: ['M', 'L', 'X', 'XL', 'XXL', 'XXXL', 'XXXXL', 'XXXXXL']
            },
            {
              goodsImage: {
                imageUrl: 'http://img.zhefengle.com/d7899b0074bc9a0f0aa4bc108d359907.jpg'
              },
              goodsName: '商品名称商品名称商品名称商品',
              curPrice: '¥ 594',
              discount: '4.5折',
              goodsSource: '海外直邮',
              stock: '库存：20',
              textLabelList: ['四色可选']
            },
            {
              goodsImage: {
                imageUrl: 'http://img.zhefengle.com/43f0605ed6ba22a2f170a087260c3c63.jpg'
              },
              goodsName: '商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称',
              curPrice: '¥ 594',
              discount: '4.5折',
              goodsSource: '海外直邮',
              stock: '库存：20',
              textLabelList: ['小号', '中号', '大号']
            },
            {
              goodsImage: {
                imageUrl: 'http://img.zhefengle.com/4162ed4df1e0ef8c830cf072bb11c530.jpg'
              },
              goodsName: '商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称',
              curPrice: '¥ 594',
              discount: '4.5折',
              goodsSource: '海外直邮',
              stock: '库存：20',
              textLabelList: ['small', 'middle', 'large']
            },
            {
              goodsImage: {
                imageUrl: 'http://img.zhefengle.com/b0801e96ab916f9e9a99a949c6b874f9.png'
              },
              goodsName: '商品名称商品名称商品名称商品',
              curPrice: '¥ 594',
              discount: '4.5折',
              goodsSource: '海外直邮',
              stock: '库存：20',
              textLabelList: ['型号1', '型号2', '型号3']
            }
          ]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search{
  width: 750px;
}
</style>
