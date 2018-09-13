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
        data: {
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
          ],
          headerImg: {
            proportion: 1.87,
            imageUrl:
              'http://img.zhefengle.com/264055a31a245de5e62e1de97211f2aa.jpg?imageView2/2/w/800/interlace/1/q/93',
            labelList: [
              {
                imageUrl:
                  'http://img.zhefengle.com/d029291539d7a79178fb33557efef2b8.jpg',
                labelWidth: 60,
                labelHeight: 60,
                gravity: 0
              }
            ]
          },
          offset: 33,
          showShadow: true,
          goodsFillColor: '#FFFFFF',
          goodsStrokeColor: '#DDDDDD',
          goodsNameColor: '#262626',
          goodsPriceColor: '#262626',
          goodsImgProportion: 1.0,
          padding: '0,0,0,10',
          headerPadding: '12,0,0,0',
          footerPadding: '22,0,0,0',
          goodsImgPadding: '5,5,5,5',
          backgroundColor: '#FFFFFF',
          goodsItemWidth: 210,
          dividerHeight: 10,
          dividerColor: '#f5f5f5',
          title: {
            titleText: '橱柜组件',
            titleGravity: 2,
            titleTextColor: '#0000',
            titleTextSize: 16,
            titlePadding: 12,
            titleProportion: 7.5,
            titleBackgroundColor: '#FFFFFF',
            titleBackgroundImg: '',
            isBold: true
          }
        }
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