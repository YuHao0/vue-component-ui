<template>
  <div class="cz-flashSaleView" ref='flashSaleView'>
    <div class="flashSaleHeader">
      <p>限时抢购</p>
      <span class="timeBox">
        <span v-if="stage == 1">距离开场</span>
        <span v-if="stage == 2">本场仅剩</span>
        <span v-if="stage == 3">已结束</span>
        <span class="time">{{hours}}</span>
        <span>:</span>
        <span class="time">{{minutes}}</span>
        <span>:</span>
        <span class="time">{{seconds}}</span>
      </span>
    </div>
    <vue-scroll :ops="scrollOption" :style="{marginTop:-moduleData.offset/fontSizeRadio + 'rem'}" :class="{contentShadow:moduleData.showShadow}">
      <div class="cz-flashSaleView_content" ref="content" :style="{width:width+'px'}">
        <div class="content-img-item" ref="contentItem"
          :style='{
            width:moduleData.goodsItemWidth/fontSizeRadio + "rem",
            background:moduleData.goodsFillColor,
            border:"1px solid " + moduleData.goodsStrokeColor
          }' 
          v-for='(item,index) in moduleData.goodsList' :key='index'>
          <div class="img-wrap" ref="itemImg">
            <img :src="item.goodsImage.imageUrl" draggable="false">
          </div>
          <div class="good-content">
            <div class="good-name" :style="{color:moduleData.goodsNameColor}">{{item.goodsName}}</div>
            <div class="good-price" :style="{color:moduleData.goodsPriceColor}">￥{{item.curPrice}}</div>
          </div>
        </div>
      </div>
    </vue-scroll>
  </div>
</template>

<script>
  import util from '../../_common/util.js';
  import publicConfig from '../../_common/publicConfig.js';

  export default {
    name: 'cz-flashSaleView',

    props: {
      requestData: Object
    },
    
    data() {
      return {
        moduleData: {},
        width: '',
        stage: 1, // 阶段: 1活动未开始,2活动进行中,3活动已结束
        hours: '00',
        minutes: '00',
        seconds: '00',
        fontSizeRadio: window.fontSize,
        scrollOption: {
          vuescroll: {
              mode: 'slide'
          },
          scrollPanel: {
              scrollingY: false
          },
          rail: {
            size: 0
          },
          bar: {}
        }
      }
    },

    created() {
      util.extend(this.moduleData, publicConfig.modulePublic, this.requestData);
    },

    mounted() {
      this.$nextTick(() => {
          console.log('falshSaleView:', this.moduleData);
          var style = publicConfig.dealPublicAttr(this.$refs.flashSaleView, this.moduleData);
          this.width = this.$refs.flashSaleView.offsetWidth;

          var timer = window.setInterval(() => {
            var nowTime = (new Date()).getTime();
            if (nowTime > this.moduleData.endTime) {
              this.hours = '00';
              this.minutes = '00';
              this.seconds = '00';
              this.stage = 3;
              window.clearInterval(timer);
            } else if (nowTime < this.moduleData.startTime) {
              var boforeTime = this.leftTimer(nowTime, this.moduleData.startTime);
              this.hours = boforeTime.hours;
              this.minutes = boforeTime.minutes;
              this.seconds = boforeTime.seconds;
              this.stage = 1;
            } else {
              var onTime = this.leftTimer(nowTime, this.moduleData.endTime);
              this.hours = onTime.hours;
              this.minutes = onTime.minutes;
              this.seconds = onTime.seconds;
              this.stage = 2;
            }
          }, 1000);
      });
    },

    methods: {
      leftTimer: function(startTime, endTime) { 
        var leftTime = endTime - startTime; // 计算剩余的毫秒数
        var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); // 计算剩余的小时 
        var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);// 计算剩余的分钟 
        var seconds = parseInt(leftTime / 1000 % 60, 10);// 计算剩余的秒数 
        hours = this.checkTime(hours); 
        minutes = this.checkTime(minutes); 
        seconds = this.checkTime(seconds); 
        return {
          hours: hours,
          minutes: minutes,
          seconds: seconds
        }
      },
      checkTime: function(i) { // 将0-9的数字前面加上0，例1变为01 
        if (i < 10) { 
          i = '0' + i; 
        } 
        return i; 
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cz-flashSaleView{
    .flashSaleHeader{
      height: 2.5rem;
      background: #fff;
      text-align: left;
      p{
        display: inline-block;
        font-size: 0.7rem;
        line-height: 2.5rem;
        color: #262626;
        padding-left: 0.6rem;
      }
      .timeBox{
        display: inline-block;
        float: right;
        padding-top: 0.75rem;
        padding-right: 0.6rem;
        span{
          color: #666;
          font-size: 0.7rem;
        }
        .time{
          display: inline-block;
          width: 0.95rem;
          height: 0.95rem;
          background: #262626;
          color: #fff;
          border-radius: 0.95rem;
          text-align: center;
          line-height: 0.95rem;
        }
      }
    }
    .cz-flashSaleView_content {
      display: block;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      .content-img-item {
        display: inline-block;
        vertical-align: top;
        .img-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            max-width: 100%;
            max-height: 100%;
            user-select: none;
          }
        }
        .good-content {
          color: #262626;
          white-space: normal;
          .good-name {
            word-break: break-all;
            height: 1.2rem;
            font-size: 0.55rem;
            line-height: 0.6rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .good-price{
            margin-top: 0.25rem;
            font-size: 0.7rem;
          }
        }
      }
    }
  }
</style>
