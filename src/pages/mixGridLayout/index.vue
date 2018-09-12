<template>
    <div class="mix-wrap">
        <cz-mixGridLayout :requestData='requestData.data'></cz-mixGridLayout>
    </div>
</template>

<script>
export default {
  data() {
    return {
      requestData: {
        type: 3,
        data: {
          imageList: [
            {
              imageUrl: 'http://img.zhefengle.com/4792c74ee604fd81eccb2e0f670b3e48.jpg?imageView2/2/w/1080/h/700'
            },
            {
              imageUrl: 'http://img.zhefengle.com/6e2ec23b31c98724d256ef5120ee3f75.jpg?imageView2/2/w/1080/h/700'
            },
            {
              imageUrl: 'http://img.zhefengle.com/1645a78332498c8d40b7129d91dfb3d9.jpg?imageView2/2/w/1080/h/700'
            },
            {
              imageUrl: 'http://img.zhefengle.com/1645a78332498c8d40b7129d91dfb3d9.jpg?imageView2/2/w/1080/h/700'
            },
            {
              imageUrl: 'http://img.zhefengle.com/1645a78332498c8d40b7129d91dfb3d9.jpg?imageView2/2/w/1080/h/700'
            },
            {
              imageUrl: 'http://img.zhefengle.com/1645a78332498c8d40b7129d91dfb3d9.jpg?imageView2/2/w/1080/h/700'
            }
          ],
          proportion: 1.35,
          rowSpacing: 10,
          columnSpacing: 10,
          leftProportion: 0.6,
          padding: '10,10,10,10',
          backgroundImg: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2544843599,385850737&fm=27&gp=0.jpg',
          dividerHeight: 10,
          dividerColor: '#f5f5f5',
          title: {
            titleText: '混合网格',
            titleGravity: 1,
            titleTextColor: '#E61128',
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
  methods: {},
  created() {}
};
</script>
<style lang='scss'>
    .mix-wrap{
        width: 500px;
    }
</style>
