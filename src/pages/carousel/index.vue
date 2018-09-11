<template>
    <div>
        <!-- <cz-header :title="data.modulePuclic.title"></cz-header> -->
        <cz-carousel trigger='click' height='150px'>
            <cz-carousel-item v-for='item in data.carouselData.imageList' :key='item.imageUrl'>
                <!-- <h3>{{ item.imageUrl }}</h3> -->
                <img :src="item.imageUrl" />
            </cz-carousel-item>
        </cz-carousel>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: {
                    modulePuclic: {
                        padding: '10,10,10,10',              // 左、上、右、下边距
                        backgroundImg: '',                   // 背景图url,背景色和背景图都存在的情况下优先取背景图
                        backgroundColor: '#FF9999',          // 背景色
                        title: {
                            titleText: '轮播图的标题',         // 标题文本
                            titleGravity: 0,                 // 标题位置	0:居左 1:居中 2::居右
                            titleTextColor: '#262626',       // 标题文字颜色
                            titleTextSize: 15,               // 标题文字大小
                            titlePadding: 10,  	             // 标题边距
                            isBold: true,                    // true:加粗 false:不加粗
                            titleProportion: 20.12,	         // 标题宽高比
                            titleBackgroundColor: '#FFFFFF', // 标题的背景色
                            titleBackgroundImg: '',	         // 标题背景图,背景色和背景图都存在的情况下优先取背景图
                            jump: {
                                relateType: 3
                            }
                        },
                        dividerHeight: 10,
                        dividerColor: '#DDDDDD'
                    },
                    carouselData: {
                        proportion: 1.875,      // 宽高比
                        duration: 3000,         // 轮播时间间隔(ms)
                        indicatorNormalColor: '#0000FF',    // 指示器未选中颜色
                        indicatorSelectedColor: '#FF0000',  // 指示器选中颜色
                        imageList: [
                            {
                                imageUrl: 'http://img.zhefengle.com/69be5aca1a5ec9eb9c5b5edca09349c6.jpg?imageView2/2/w/1080/h/700',
                                proportion: 1.2,    // 宽高比
                                imageWidth: 1334,   // 图片宽度
                                imageHeight: 560,   // 图片高度
                                labelList: {

                                },
                                jump: {

                                }
                            },
                            {
                                imageUrl: 'http://img.zhefengle.com/1676a67bbdce42e7d0d789b6e05434c5.jpg?imageView2/2/w/1080/h/700',
                                proportion: 1.2,    // 宽高比
                                imageWidth: 1334,   // 图片宽度
                                imageHeight: 560,   // 图片高度
                                labelList: {

                                },
                                jump: {
                                    
                                }
                            },
                            {
                                imageUrl: 'http://img.zhefengle.com/16be5463645eed628af996d3265ed473.jpg?imageView2/2/w/1080/h/700',
                                proportion: 1.2,    // 宽高比
                                imageWidth: 1334,   // 图片宽度
                                imageHeight: 560,   // 图片高度
                                labelList: {

                                },
                                jump: {
                                    
                                }
                            }
                        ]
                    }
                }
            }
        },
        methods: {
            
        }
    }
</script>
<style lang="scss" scoped>
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
