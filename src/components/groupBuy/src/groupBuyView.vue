<template>
  <div class="cz-groupBuyView" ref='groupBuyView'>
    <div class="groupBuyHeader">团购专场</div>
    <div class="itemBox" v-for='(item, index) in moduleData.itemInfoList' :key='index'>
      <div class="item">
        <div class="left">
          <img :src="item.image.url">
        </div>
        <div class="right">
          <h2 class="title">{{item.itemName}}</h2>
          <div class="groupBuyPrice">团购价 ￥<span>{{item.price}}</span></div>
          <div class="originPrice">原价 ￥<span>{{item.price}}</span></div>
          <button class="buyBtn" @click="clickItem(item)">去抢购</button>
        </div>
      </div>
    </div>  
    
  </div>
</template>

<script>
  import util from '../../_common/util.js';
  import publicConfig from '../../_common/publicConfig.js';

  export default {
    name: 'cz-groupBuyView',
    props: {
      requestData: Object,
      handelClick: Function
    },
    data() {
      return {
        moduleData: {},
        width: '',
        fontSizeRadio: window.fontSize,
      }
    },
    created() {
      util.extend(this.moduleData, publicConfig.modulePublic, this.requestData);
    },

    mounted() {
      this.$nextTick(() => {
          console.log('groupBuyView', this.moduleData);
          var style = publicConfig.dealPublicAttr(this.$refs.groupBuyView, this.moduleData);
          // this.width = this.$refs.groupBuyView.offsetWidth;
      });
    },

    methods: {
      clickItem(item) {
        this.handelClick(item);
      },
    }
  }
</script>

<style lang="scss" scoped>
  .cz-groupBuyView{
    width:100vh;
    height: 21rem;
    overflow-y: auto;
    .groupBuyHeader{
      width:100%;
      height:2rem;
      padding-top:0.75rem;
      padding-bottom: 0.25rem;
      text-align: left;
      font-size: 0.7rem;
      font-weight: 400;
    }
    .itemBox{
      width: 100%;
      .item{
        width:100%;
        height: 5.75rem;
        margin-top:0.45rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #ddd;
        display: flex;
        position: relative;
        .left{
          width: 5.52rem;
          height: 5.22rem;
          border: 1px solid #dddddd;
          display: flex;
          align-items: center;
          justify-content: center;
          img{
            width:100%;
            height: auto;
          }
        }
        .right{
          width: calc(100% - 6.02rem);
          height:5.22rem;
          margin-left:0.5rem;
          .title{
            width:100%;
            font-size: 0.7rem;
            line-height: 0.8rem;
            height: 2.4rem;
            text-align: left;
            color: #333;
            font-weight: 400;
            overflow: hidden;
            word-break: break-all;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
          .groupBuyPrice{
            width:100%;
            color: #fa3a3e;
            font-size: 0.7rem;
            text-align: left;
            margin-top: 0.6rem;
            span{
              font-size: 1rem;
              color: #fa3a3e;
            }
          }
          .originPrice{
            width:100%;
            margin-top:0.42rem;
            color:#999;
            font-size:0.6rem;
            text-align: left;
            text-decoration:line-through
          }
          .buyBtn{
            position: absolute;
            bottom: 0.5rem;
            right: 0.175rem;
            width:4rem;
            height: 1.5rem;
            background: #fa393f;
            color: #fff;
            font-size: 0.8rem;
            text-align: center;
            line-height: 1.5rem;
            border: 0;
          }
        }
        
      }
    }
    .itemBox:last-of-type .item{
      border-bottom: 0
    }
  }
</style>
