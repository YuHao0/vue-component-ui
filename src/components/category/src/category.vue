<template>
  <div class="category">
    <div class="categoryNav">
      <ul>
        <li v-for='(item, index) in requestData' :key='index' :class="{'active':item.name==activeNav.name}"><a href="javascript:;" @click="clickNav(item)">{{item.name}}</a></li>
      </ul>
    </div>
    <div class="categoryContent">
      <div class="categoryItem" v-for="(item, index) in activeNav.categories" :key="index">
        <div class="itemTitle" v-if="item.name">
          <h2>{{item.name}}</h2>
        </div>
        <div class="itemContent">
          <div class="goodsItem" v-for="(goods, goodsIndex) in item.childCategories" :key="goodsIndex">
            <div class="goodsImg">
              <img :src="goods.img" draggable="false" />
            </div>
            <h4 class="goodsName">{{goods.name}}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cz-category',

  props: {
    requestData: Array
  },

  data() {
    return {
      activeNav: {}
    }
  },

  created() {
    console.log('categoryData:', this.requestData);
    this.activeNav = this.requestData[1];
  },

  mounted() {
    this.$nextTick(() => {
        
    });
  },

  methods: {
    clickNav(item) {
      this.activeNav = item;
    }
  }
}
</script>

<style lang="scss" scoped>
.category{
  text-align: left;
  font-size: 0; 
  .categoryNav{
    display: inline-block;
    vertical-align: top;
    width: 4rem;
    ul{
      li{
        height: 2.5rem;
        padding-left: 0.6rem;
        background: #F5F5F5;
        border-right: 1px solid #DDDDDD;
        a{
          display: inline-block;
          color: #333;
          font-size: 0.6rem;
          line-height: 2.5rem;
          width: 100%;
          height: 100%;
        }
      }
      .active{
        background: #fff;
        border-top: 1px solid #DDDDDD;
        border-bottom: 1px solid #DDDDDD;
        border-right: none;
        a{
          font-size: 0.7rem;
          color: #262626;
          font-weight: bold;
        }
      }
    }
  }
  .categoryContent{
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 4rem);
    .categoryItem{
      padding-bottom: 0.75rem;
      .itemTitle{
        text-align: center;
        h2{
          display: inline-block;
          color: #333333;
          font-size: 0.7rem;
          line-height: 0.7rem;
          font-weight: normal;
          position: relative;
          padding-top: 0.75rem;
          &::before{
            content: '';
            width: 1.5rem;
            height: 1px;
            background: #DDDDDD;
            position: absolute;
            left: -2rem;
            top: 1.1rem;
          }
          &::after{
            content: '';
            width: 1.5rem;
            height: 1px;
            background: #DDDDDD;
            position: absolute;
            right: -2rem;
            top: 1.1rem;
          }
        }
      }
      .itemContent{
        .goodsItem{
          display: inline-block;
          vertical-align: top;
          width: 3.5rem;
          margin-left: 1rem;
          margin-top: 0.5rem;
          .goodsImg{
            width: 3.5rem;
            height: 3.5rem;
            img{
              display: block;
              max-width: 100%;
              max-height: 100%;
            }
          }
          .goodsName{
            color: #262626;
            text-align: center;
            font-size: 0.6rem;
            font-weight: normal;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            padding-top: 0.5rem;
          }
        }
      }
    }
  }
}
</style>
