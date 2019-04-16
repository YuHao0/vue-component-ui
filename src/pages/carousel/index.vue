<template>
<div style='width: 500px'>
    <cz-carousel trigger='click' :requestData='moduleData'>
        <cz-carousel-item v-for='item in moduleData.imageList' :key='item.url'>
            <img :src='item.url' draggable="false"/>
        </cz-carousel-item>
    </cz-carousel>
</div>
    
</template>
<script>
    export default {
        data() {
            return {
                moduleData: JSON.parse('{"padding":"10,10,10,10","proportion":1.5,"hideDividers":1,"scaleType":0,"backgroundStyle":{"color":"","imageUrl":""},"imageList":[{"url":"http://timg.apiunion.com/i/b81103b9b501017cf6e19e6abcee6afa_1920X1200_4E","jump":{"jumpType":26,"jumpData":"58"}},{"url":"http://timg.apiunion.com/i/5dc4c931501b8908c351d6c60fd6ef6e_533X300_lW","jump":{"jumpType":0,"jumpData":""}}]}'),
                titleData: {
                    titleText: '标题一定要长长长长长长长长长长长长长',
                    titleGravity: 0,  // 0:居左 1:居中 2:居右
                    titleTextColor: '#999',  // 标题文字颜色
                    titleTextSize: 14,  // 标题文字大小
                    titlePadding: 20,   // 标题边距
                    isBold: true,   // 文字是否加粗	true:加粗 false:不加粗
                    titleProportion: 20.12,   // 标题宽高比
                    titleBackgroundColor: 'blue',   // 标题的背景色
                    titleBackgroundImg: '',   // url链接
                    jump: {

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
