<template>
  <div>
    <button @click="changeData">更换数据</button>
    <cz-goodsView :requestData='goodsData.data' :handelClick="handelClick"></cz-goodsView>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
          goodsList: JSON.parse('[{"image":{"url":"http://timg.apiunion.com/i/89a1eab2b3d7a499a0040ff989a1575d_400X400_iW"},"brandName":"我是测试","originalPrice":"¥100","price":"¥50","name":"aape","stock":"库存 17807","jump":{"jumpType":6,"jumpData":"7307"}},{"image":{"url":"http://timg.apiunion.com/i/1ddc797497e7e241c94036271c7999f4_500X500_aW"},"brandName":"我是测试","originalPrice":"¥1,999","price":"¥1,399","name":"红色托特包","stock":"库存 262","jump":{"jumpType":6,"jumpData":"7303"}},{"image":{"url":"http://timg.apiunion.com/i/95f055bd3dfce436fd3fe44ae580be7c_750X500_1qW"},"brandName":"我是测试","originalPrice":"¥8,999","price":"¥7,888","name":"aj1-北卡蓝","stock":"库存 7977","jump":{"jumpType":6,"jumpData":"7310"}},{"image":{"url":"http://timg.apiunion.com/i/7462d03e0bef8ddb923ed5003fa6460a_800X800_3uW"},"brandName":"泸州老窖果酒","originalPrice":"¥318","price":"¥300","name":"泸州老窖2018桃花醉 青瓶500ml顽味香水","stock":"库存 584","jump":{"jumpType":6,"jumpData":"7401"}},{"image":{"url":"http://timg.apiunion.com/i/cd0022775dd994f271a0e7eef61f2656_750X499_kW"},"brandName":"我是测试","originalPrice":"¥3,999","price":"¥2,999","name":"AJ1","stock":"库存 7986","jump":{"jumpType":6,"jumpData":"7309"}},{"image":{"url":"http://timg.apiunion.com/i/b81103b9b501017cf6e19e6abcee6afa_1920X1200_4E"},"brandName":"我是测试","originalPrice":"¥231","price":"¥123","name":"流星雨又来临","stock":"库存 125144","jump":{"jumpType":6,"jumpData":"7305"}},{"image":{"url":"http://timg.apiunion.com/i/5dc4c931501b8908c351d6c60fd6ef6e_533X300_lW"},"brandName":"我是测试","originalPrice":"¥100","price":"¥70","name":"小埋抱枕","stock":"库存 5989","jump":{"jumpType":6,"jumpData":"7311"}},{"image":{"url":"http://timg.apiunion.com/i/6d57622dd71de6f96774d54b1687db8d_500X313_nW"},"brandName":"泸州老窖果酒","originalPrice":"¥1,000","price":"¥800","name":"四川妹子","stock":"库存 1399","jump":{"jumpType":6,"jumpData":"7312"}},{"image":{"url":"http://timg.apiunion.com/i/786cb41baf4a8fd6fc87b9728eae9294_628X626_20W"},"brandName":"我是测试","originalPrice":"¥10","price":"¥5","name":"asdasd","stock":"库存 40","jump":{"jumpType":6,"jumpData":"7314"}}]')
        }
      }
    }
  },
  methods: {
    changeData(item) {
      this.goodsData.data.goodsList = [{"image":{"url":"http://timg.apiunion.com/i/89a1eab2b3d7a499a0040ff989a1575d_400X400_iW"},"brandName":"我是测试","originalPrice":"¥100","price":"¥50","name":"aape","stock":"库存 17807","jump":{"jumpType":6,"jumpData":"7307"}}];
    },
    handelClick(item){
      console.log(item);
    }
  }
}
</script>

<style></style>
