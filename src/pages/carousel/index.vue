<template>
    <div>
        <!-- <cz-header :title='data.modulePuclic.title'></cz-header> -->
        <cz-carousel trigger='click' :moduleData='moduleData'>
            <cz-carousel-item v-for='item in moduleData.data.imageList' :key='item.imageUrl'>
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
                        padding: '0,0,0,0',
                        duration: 3000,
                        dividerHeight: 10,
                        dividerColor: '#f5f5f5',
                        indicatorNormalColor: '#0000FF',
                        indicatorSelectedColor: '#FF0000'
                    }
                }
            }
        },
        methods: {
            
        }
    }
</script>
<style lang='scss' scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
