<template>
  <div class="shopCart">
    <div class="cartItem" v-for='(item, index) in requestData' :key='index'>
      <div class="itemTitle">
        <div class="checkIcon"><img src="../../../assets/img/checked.png" /></div>
        <span class="shopName">{{item.shopName}}</span>
        <span class="shopTax">{{item.shopDesc}}</span>
        <span class="freight">
          预计运费
          <span class="freightNum">¥0.00</span>
        </span>
      </div>
      <div class="itemGoods" v-for='(goods, goodsIndex) in item.shoppingCartListPOJOs' :key='goodsIndex'>
        <div class="goodsInfo">
          <div class="goodsImg"><img :src="goods.itemImgUrl" alt=""></div>
          <div class="cancelBtn"><img src="../../../assets/img/shopCartDelete.png" alt=""></div>
          <h2>{{goods.itemTitle}}</h2>
          <h4>商品UPC<span>16889966444</span></h4>
          <div class="numberCtrl">
            <div class="ctrl reduce"><img src="../../../assets/img/reduce.png" alt=""></div>
            <div class="ctrl">{{goods.buyNum}}</div>
            <div class="ctrl add"><img src="../../../assets/img/add.png" alt=""></div>
          </div>
          <p class="price">¥{{goods.itemCurPrice}}</p>
        </div>
        <div class="goodsPrice">
          <span class="priceText">售价</span>
          <span class="priceNum">¥100.48</span>
          <span class="priceText">运费</span>
          <span class="priceNum">¥18</span>
          <span class="priceInfo">(价格已包含关税)</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cz-shopCart',

  props: {
    requestData: Array
  },

  data() {
    return {
      
    }
  },

  created() {
    console.log('shopCartData:', this.requestData);
  },

  mounted() {
    this.$nextTick(() => {
        
    });
  },

  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.shopCart{
  background: #F5F5F5;
  .cartItem{
    font-size: 0;
    .itemTitle{
      height: 2.2rem;
      border-bottom: 1px solid #DDDDDD;
      padding: 0 0.6rem;
      text-align: left;
      .checkIcon{
        display: inline-block;
        vertical-align: top;
        width: 0.7rem;
        height: 0.7rem;
        margin-top: 0.75rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      span{
        display: inline-block;
        vertical-align: top;
        line-height: 2.2rem;
      }
      .shopName{
        font-size: 0.8rem;
        color: #333333;
        padding-left: 0.4rem;
      }
      .shopTax{
        font-size: 0.6rem;
        line-height: 0.6rem;
        padding-top: 0.85rem;
        color: #999999;
        padding-left: 0.25rem;
      }
      .freight{
        float: right;
        font-size: 0.6rem;
        color: #666666;
        .freightNum{
          color: #333333;
          padding-left: 0.125rem;
        }
      }
    }
    .itemGoods{
      border-bottom: 1px solid #DDDDDD;
      background: #fff;
      .goodsInfo{
        height: 8rem;
        padding: 0.6rem 0.6rem 0.8rem 7.125rem;
        position: relative;
        font-size: 0;
        .goodsImg{
          position: absolute;
          top: 0.6rem;
          left: 0.6rem;
          width: 5.6rem;
          height: 7rem;
          display: flex;
          align-items: center;
          justify-content: center;
          img{
            max-width: 100%;
            max-height: 100%;
            display: block;
          }
        }
        .cancelBtn{
          height: 0.8rem;
          text-align: right;
          img{
            display: inline-block;
            width: 0.8rem;
            height: 0.8rem;
          }
        }
        h2{
          font-size: 0.65rem;
          line-height: 0.8rem;
          height: 1.6rem;
          color: #262626;
          text-align: left;
          margin-top: 0.25rem;
          font-weight: bold;
          overflow: hidden;
          word-break: break-all;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        h4{
          font-size: 0.55rem;
          color: #999999;
          text-align: left;
          padding-top: 0.25rem;
          span{
            padding-left: 0.35rem;
          }
        }
        .numberCtrl{
          height: 1.45rem;
          width: 5.1rem;
          border: 1px solid #DDDDDD;
          border-radius: 4px;
          margin-top: 0.5rem;
          display: flex;
          .ctrl{
            flex: 1;
            border-right: 1px solid #DDDDDD;
            color: #333333;
            font-size: 0.8rem;
            line-height: 1.45rem;
            text-align: center;
            &:last-child{
              border-right: none;
            }
            img{
              display: inline-block;
              width: 0.75rem;
              vertical-align: top;
            }
          }
          .reduce{
            img{
              height: 2px;
              margin-top: 0.65rem;
            }
          }
          .add{
            img{
              height: 0.75rem;
              margin-top: 0.3rem;
            }
          }
        }
        .price{
          font-size: 0.8rem;
          text-align: right;
          padding-top: 0.6rem;
          font-weight: bold;
        }
      }
      .goodsPrice{
        text-align: left;
        padding: 0 0.6rem 0.75rem;
        span{
          font-size: 0.6rem;
          color: #999999;
        }
        .priceText{
          padding-right: 0.35rem;
        }
        .priceNum{
          color: #262626;
          padding-right: 0.5rem;
        }
        .priceInfo{
          float: right;
        }
      }
    }
  }
}
</style>
