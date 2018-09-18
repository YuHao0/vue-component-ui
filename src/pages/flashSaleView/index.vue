<template>
    <div>
        <cz-flashSaleView :requestData='requestData.data'></cz-flashSaleView>
    </div>
</template>

<script>
export default {
  data() {
    return {
      requestData: {
        type: 6,
        data: {
          showShadow: true,
          goodsItemWidth: 210,
          goodsFillColor: '#FFFFFF',
          goodsStrokeColor: '#FFFFFF',
          goodsImgProportion: 1.01,
          goodsImgPadding: '5,5,5,5',
          goodsNameColor: '#262626',
          goodsPriceColor: '#262626',
          dividerHeight: 10,
          dividerColor: '#f5f5f5',
          startTime: 1537239094000,
          endTime: 1537498294000,
          goodsList: [
            {
              goodsImage: {
                imageUrl:
                  'http://img.zhefengle.com/eb0f4f25d462300bc37280416f98d11c.jpg?imageView2/2/w/300/interlace/1/q/93/format/webp'
              },
              goodsName: 'BELLAMY\'S 贝拉米 Bellamy/贝拉米 贝拉米1段 900g',
              curPrice: '594'
            },
            {
              goodsImage: {
                imageUrl:
                  'http://img.zhefengle.com/eb0f4f25d462300bc37280416f98d11c.jpg?imageView2/2/w/300/interlace/1/q/93/format/webp'
              },
              goodsName: 'BELLAMY\'S 贝拉米 Bellamy/贝拉米 贝拉米1段 900g',
              curPrice: '594'
            },
            {
              goodsImage: {
                imageUrl:
                  'http://img.zhefengle.com/eb0f4f25d462300bc37280416f98d11c.jpg?imageView2/2/w/300/interlace/1/q/93/format/webp'
              },
              goodsName: 'BELLAMY\'S 贝拉米 Bellamy/贝拉米 贝拉米1段 900g',
              curPrice: '594'
            },
            {
              goodsImage: {
                imageUrl:
                  'http://img.zhefengle.com/eb0f4f25d462300bc37280416f98d11c.jpg?imageView2/2/w/300/interlace/1/q/93/format/webp'
              },
              goodsName: 'BELLAMY\'S 贝拉米 Bellamy/贝拉米 贝拉米1段 900g',
              curPrice: '594'
            },
            {
              goodsImage: {
                imageUrl:
                  'http://img.zhefengle.com/eb0f4f25d462300bc37280416f98d11c.jpg?imageView2/2/w/300/interlace/1/q/93/format/webp'
              },
              goodsName: 'BELLAMY\'S 贝拉米 Bellamy/贝拉米 贝拉米1段 900g',
              curPrice: '594 '
            },
            {
              goodsImage: {
                imageUrl:
                  'http://img.zhefengle.com/eb0f4f25d462300bc37280416f98d11c.jpg?imageView2/2/w/300/interlace/1/q/93/format/webp'
              },
              goodsName: 'BELLAMY\'S 贝拉米 Bellamy/贝拉米 贝拉米1段 900g',
              curPrice: '594'
            },
            {
              goodsImage: {
                imageUrl:
                  'http://img.zhefengle.com/eb0f4f25d462300bc37280416f98d11c.jpg?imageView2/2/w/300/interlace/1/q/93/format/webp'
              },
              goodsName: 'BELLAMY\'S 贝拉米 Bellamy/贝拉米 贝拉米1段 900g',
              curPrice: '594'
            }
          ]
        }
      }
    };
  },
  methods: {}
};
</script>

<style lang='scss' scoped>

</style>
