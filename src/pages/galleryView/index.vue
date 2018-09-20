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
                    data: {
                        imageList: [
                            {imageUrl: 'http://img.zhefengle.com/4792c74ee604fd81eccb2e0f670b3e48.jpg?imageView2/2/w/1080/h/700'},
                            {imageUrl: 'http://img.zhefengle.com/6e2ec23b31c98724d256ef5120ee3f75.jpg?imageView2/2/w/1080/h/700'}, 
                            {imageUrl: 'http://img.zhefengle.com/1645a78332498c8d40b7129d91dfb3d9.jpg?imageView2/2/w/1080/h/700'}, 
                            {imageUrl: 'http://img.zhefengle.com/3d01fb4054b8e56ca189dbd0f3575235.jpg?imageView2/2/w/1080/h/700'}
                        ],
                        proportion: 2.2,
                        padding: '10,10,10,10',
                        columnSpacing: 10,
                        maxItemWidthProportion: 0.9,
                        scale: 0.2,
                        duration: 3000000,
                        dividerHeight: 5,
                        dividerColor: 'blue',
                        indicatorNormalColor: '#0000FF',
                        indicatorSelectedColor: '#FF0000',
                        backgroundColor: '#F00',
                        backgroundImg: ''
                    }
                }
            }
        },
        methods: {
            
        }
    }
</script>
<style lang='scss' scoped>
    
</style>
