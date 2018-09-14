<template>
    <cz-header @click="handleClick" :requestData="titleData"></cz-header>
</template>

<script>
export default {
    data() {
        return {
            titleData: {
                titleText: '标题一定要长长长长长长长长长长长长长',
                titleGravity: 0,  // 0:居左 1:居中 2:居右
                titleTextColor: '#999',  // 标题文字颜色
                titleTextSize: 22,  // 标题文字大小
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
        handleClick: function() {
            console.log('click header');
        }
    }
}
</script>
<style></style>