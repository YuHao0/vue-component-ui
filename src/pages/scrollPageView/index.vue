<template>
    <div>
        <cz-scrollPageView :requestData='requestData.data'></cz-scrollPageView>
    </div>
</template>

<script>
export default {
  data() {
    return {
      requestData: {
        type: 7,
        data: {
          proportion: 2.0,
          imgWidthProportion: 0.7,
          columnSpacing: 10,
          imageList: [
            {imageUrl: 'http://img.zhefengle.com/4792c74ee604fd81eccb2e0f670b3e48.jpg?imageView2/2/w/1080/h/700'},
            {imageUrl: 'http://img.zhefengle.com/6e2ec23b31c98724d256ef5120ee3f75.jpg?imageView2/2/w/1080/h/700'}, 
            {imageUrl: 'http://img.zhefengle.com/1645a78332498c8d40b7129d91dfb3d9.jpg?imageView2/2/w/1080/h/700'}, 
            {imageUrl: 'http://img.zhefengle.com/3d01fb4054b8e56ca189dbd0f3575235.jpg?imageView2/2/w/1080/h/700'}
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
