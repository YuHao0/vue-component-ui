<template>
    <div style="width: 500px">
        <!-- <cz-header :title='data.modulePuclic.title'></cz-header> -->
        <cz-carousel trigger='click' :requestData='moduleData.data'>
            <cz-carousel-item v-for='item in moduleData.data.imageList' :key='item.imageUrl' :moduleData='moduleData'>
                <img :src='item.imageUrl' />
            </cz-carousel-item>
        </cz-carousel>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                moduleData: {
                    type: 1,
                    data: {
                        imageList: [
                            {imageUrl: 'http://img.zhefengle.com/4792c74ee604fd81eccb2e0f670b3e48.jpg?imageView2/2/w/1080/h/700'},
                            {imageUrl: 'http://img.zhefengle.com/6e2ec23b31c98724d256ef5120ee3f75.jpg?imageView2/2/w/1080/h/700'}, 
                            {imageUrl: 'http://img.zhefengle.com/1645a78332498c8d40b7129d91dfb3d9.jpg?imageView2/2/w/1080/h/700'}, 
                            {imageUrl: 'http://img.zhefengle.com/3d01fb4054b8e56ca189dbd0f3575235.jpg?imageView2/2/w/1080/h/700'}
                        ],
                        proportion: 1.35,
                        padding: '10,10,10,10',
                        duration: 3000,
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
    .el-carousel__item {
        text-align: center;
        img {
            display: inline-block;
            height: 100%;
        }
    }
</style>
