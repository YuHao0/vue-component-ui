<template>
    <div class='closet-view-warp'>
        <cz-closetView :requestData='requestData.data'></cz-closetView>
    </div>
</template>
<script>
export default {
  data() {
    return {
      requestData: {
        type: 4,
        data: JSON.parse('{"padding":"10,10,10,10","showShadow":0,"offset":50,"divider":{"color":"#FFC0CB","height":10},"headerImage":{"url":"http://timg.apiunion.com/i/6d57622dd71de6f96774d54b1687db8d_500X313_nW","jump":{"jumpType":26,"jumpData":"57"}},"hideDividers":0,"backgroundStyle":{"color":"#E68989","imageUrl":""},"itemStyle":{"nameStyle":{"foreground":"#FFC0CB"},"priceStyle":{"foreground":"#F80F0F"}},"itemList":[{"image":{"id":7307,"url":"http://timg.apiunion.com/i/89a1eab2b3d7a499a0040ff989a1575d_400X400_iW","jump":{"jumpType":6,"jumpData":"7307"}},"price":"¥ 50.00","name":"aape"},{"image":{"id":7302,"url":"http://timg.apiunion.com/i/469d74c9feb84109ee4baa4969ae878c_500X333_gW","jump":{"jumpType":6,"jumpData":"7302"}},"price":"¥ 299.00","name":"2018新品桃花醉网红低度数果酒"},{"image":{"id":7303,"url":"http://timg.apiunion.com/i/1ddc797497e7e241c94036271c7999f4_500X500_aW","jump":{"jumpType":6,"jumpData":"7303"}},"price":"¥ 1399.00","name":"红色托特包"},{"image":{"id":7304,"url":"http://timg.apiunion.com/i/b81103b9b501017cf6e19e6abcee6afa_1920X1200_4E","jump":{"jumpType":6,"jumpData":"7304"}},"price":"¥ 10.00","name":"流星雨"},{"image":{"id":7309,"url":"http://timg.apiunion.com/i/cd0022775dd994f271a0e7eef61f2656_750X499_kW","jump":{"jumpType":6,"jumpData":"7309"}},"price":"¥ 2999.00","name":"AJ1"},{"image":{"id":7310,"url":"http://timg.apiunion.com/i/95f055bd3dfce436fd3fe44ae580be7c_750X500_1qW","jump":{"jumpType":6,"jumpData":"7310"}},"price":"¥ 7888.00","name":"aj1-北卡蓝"},{"image":{"id":7401,"url":"http://timg.apiunion.com/i/7462d03e0bef8ddb923ed5003fa6460a_800X800_3uW","jump":{"jumpType":6,"jumpData":"7401"}},"price":"¥ 300.00","name":"泸州老窖2018桃花醉 青瓶500ml顽味香水"}],"footerPadding":"30"}')
      }
    };
  },
  methods: {}
};
</script>
<style lang='scss'>
.closet-view-warp {
    width: 750px;
}
</style>