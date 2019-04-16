<template>
<div style='width: 800px'>
     
    <cz-galleryView trigger='click' :requestData='moduleData.data'></cz-galleryView>
    
</div>
    
</template>
<script>
    export default {
        data() {
            return {
                moduleData: {
                    type: 9,
                    data: JSON.parse('{"padding":"10,10,10,10","divider":{"color":"#FFC0FB","height":10},"hideDividers":0,"scaleType":0,"backgroundStyle":{"color":"","imageUrl":"http://timg.apiunion.com/i/b81103b9b501017cf6e19e6abcee6afa_1920X1200_4E"},"imageList":[{"url":"http://timg.apiunion.com/i/5dc4c931501b8908c351d6c60fd6ef6e_533X300_lW","jump":{"jumpType":26,"jumpData":"57"}},{"url":"http://timg.apiunion.com/i/5628b6337e2f1fd00f49833cbec46b0f_533X300_kW","jump":{"jumpType":26,"jumpData":"58"}},{"url":"http://timg.apiunion.com/i/6d57622dd71de6f96774d54b1687db8d_500X313_nW","jump":{"jumpType":26,"jumpData":"57"}}]}')
                    // {
                    //     imageList: [
                    //         {url: 'http://img.zhefengle.com/4792c74ee604fd81eccb2e0f670b3e48.jpg?imageView2/2/w/1080/h/700'},
                    //         {url: 'http://img.zhefengle.com/6e2ec23b31c98724d256ef5120ee3f75.jpg?imageView2/2/w/1080/h/700'}, 
                    //         {url: 'http://img.zhefengle.com/1645a78332498c8d40b7129d91dfb3d9.jpg?imageView2/2/w/1080/h/700'}, 
                    //         {url: 'http://img.zhefengle.com/3d01fb4054b8e56ca189dbd0f3575235.jpg?imageView2/2/w/1080/h/700'}
                    //     ],
                    //     proportion: 2.2,
                    //     padding: '10,10,10,10',
                    //     columnSpacing: 10,
                    //     maxItemWidthProportion: 0.9,
                    //     scale: 0.6,
                    //     duration: 3000000,
                    //     dividerHeight: 5,
                    //     dividerColor: 'blue',
                    //     indicatorNormalColor: '#0000FF',
                    //     indicatorSelectedColor: '#FF0000',
                    //     backgroundColor: '#F00',
                    //     backgroundImg: ''
                    // }
                }
            }
        },
        methods: {
            
        }
    }
</script>
<style lang='scss' scoped>
    
</style>
