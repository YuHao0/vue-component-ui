<template>
    <!-- <cz-carousel :interval="4000" type="card" height="200px">
        <cz-carousel-item v-for="item in 6" :key="item">
            <h3>{{ item }}</h3>
        </cz-carousel-item>
    </cz-carousel> -->

    <cz-carousel trigger="click" height="150px">
        <cz-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
        </cz-carousel-item>
    </cz-carousel>
</template>

<script>
    export default {
        methods: {
            
        }
    }
</script>
<style>
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
