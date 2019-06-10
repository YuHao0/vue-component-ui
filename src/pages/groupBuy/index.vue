<template>
    <div>
        <cz-groupBuyView :requestData='requestData.data' :handelClick="handelClick"></cz-groupBuyView>
    </div>
</template>

<script>
export default {
  data() {
    return {
      requestData: {
        type: 6,
        data: {
          // showShadow: true,
          // goodsItemWidth: 210,
          // goodsFillColor: '#FFFFFF',
          // goodsStrokeColor: '#FFFFFF',
          // goodsImgProportion: 1.01,
          // goodsImgPadding: '5,5,5,5',
          // goodsNameColor: '#262626',
          // goodsPriceColor: '#262626',
          // dividerHeight: 10,
          // dividerColor: '#f5f5f5',
          // startTime: 1537239094000,
          // endTime: 1537498294000,
          itemInfoList: [
            {
              hideButton: 1,
              image: {id: 7307, url: "https://timg.apiunion.com/i/9a289358b20337d72a650fb2a334142c_600X420_2rW",jump: {jumpType: 6, jumpData: "7307"}},
              itemId: 7307,
              itemName: "aape吾问无为谓无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无吾问无为谓无无无无无无无无无无无无无无无无无无无无无无无无无无无",
              price: 1,
              skuIds: "4012,4013",
              stock: 2
            },
            {
              hideButton: 1,
              image: {id: 7307, url: "https://timg.apiunion.com/i/9a289358b20337d72a650fb2a334142c_600X420_2rW",jump: {jumpType: 6, jumpData: "7307"}},
              itemId: 7307,
              itemName: "aape吾问无为谓无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无吾问无为谓无无无无无无无无无无无无无无无无无无无无无无无无无无无",
              price: 1,
              skuIds: "4012,4013",
              stock: 2
            },
            {
              hideButton: 1,
              image: {id: 7307, url: "https://timg.apiunion.com/i/9a289358b20337d72a650fb2a334142c_600X420_2rW",jump: {jumpType: 6, jumpData: "7307"}},
              itemId: 7307,
              itemName: "aape吾问无为谓无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无吾问无为谓无无无无无无无无无无无无无无无无无无无无无无无无无无无",
              price: 1,
              skuIds: "4012,4013",
              stock: 2
            },
            {
              hideButton: 1,
              image: {id: 7307, url: "https://timg.apiunion.com/i/9a289358b20337d72a650fb2a334142c_600X420_2rW",jump: {jumpType: 6, jumpData: "7307"}},
              itemId: 7307,
              itemName: "aape吾问无为谓无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无吾问无为谓无无无无无无无无无无无无无无无无无无无无无无无无无无无",
              price: 1,
              skuIds: "4012,4013",
              stock: 2
            },
            {
              hideButton: 1,
              image: {id: 7307, url: "https://timg.apiunion.com/i/9a289358b20337d72a650fb2a334142c_600X420_2rW",jump: {jumpType: 6, jumpData: "7307"}},
              itemId: 7307,
              itemName: "aape吾问无为谓无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无无吾问无为谓无无无无无无无无无无无无无无无无无无无无无无无无无无无",
              price: 1,
              skuIds: "4012,4013",
              stock: 2
            },
            {
              hideButton: 1,
              image: {id: 7307, url: "https://timg.apiunion.com/i/9a289358b20337d72a650fb2a334142c_600X420_2rW",jump: {jumpType: 6, jumpData: "7307"}},
              itemId: 7307,
              itemName: "aape",
              price: 1,
              skuIds: "4012,4013",
              stock: 2
            },
            {
              hideButton: 1,
              image: {id: 7307, url: "https://timg.apiunion.com/i/9a289358b20337d72a650fb2a334142c_600X420_2rW",jump: {jumpType: 6, jumpData: "7307"}},
              itemId: 7307,
              itemName: "aape",
              price: 1,
              skuIds: "4012,4013",
              stock: 2
            },
            
          ]
        }
      }
    };
  },
  methods: {
    handelClick(item){
      console.log(item)
    }
  }
};
</script>

<style lang='scss' scoped>

</style>
