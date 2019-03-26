<template>
  <div class="filter">
    <div class="filterNav">
      <div class="filterItem activeItem">新品</div>
      <div class="filterItem">销量</div>
      <div class="filterItem">价格</div>
      <div class="filterItem" @click="doFilter">筛选</div>
    </div>
    <transition name="slide-fade">
      <div class="filterContent" v-show="showFilter">
        <div class="title">
          <img src="../../../assets/img/back.png" @click="removeFilter" />
          筛选
          <span>重置</span>
        </div>
        <div class="filterCell">
          <h2>类目</h2>
          <div class="cellInner">
            <span class="cell" v-for="(item, index) in requestData.hotCategoryList" :key="index">{{item.secondCateName}}</span>
          </div>
          <h2>品牌</h2>
          <div class="cellInner">
            <span class="cell" v-for="(item, index) in requestData.hotCategoryList" :key="index">{{item.secondCateName}}</span>
          </div>
        </div>
      </div>
    </transition>
    <div class="filterMask" @click="removeFilter" v-if="showFilter"></div>
  </div>
</template>

<script>
export default {
  name: 'cz-filter',
  props: {
    initShow: Boolean,
    requestData: Object
  },
  data() {
    return {
      showFilter: false
    }
  },
  created() {
    this.showFilter = this.initShow;
    console.log('waterfallData:', this.requestData);
  },

  mounted() {
    this.$nextTick(() => {
        
    });
  },

  methods: {
    doFilter() {
      this.showFilter = true;
    },
    removeFilter() {
      this.showFilter = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.filter{
  height: 2.2rem;
  background: #F5F5F5;
  margin-bottom: 0.5rem;
  .filterNav{
    display: flex;
    .filterItem{
      flex: 1;
      text-align: center;
      line-height: 2.2rem;
      font-size: 0.8rem;
      color: #666666;
    }
    .activeItem{
      color: #262626;
      font-weight: bold;
    }
  }
  .filterContent{
    position: absolute;
    top: 0;
    right: 0;
    background: #fff;
    height: 100%;
    width: calc(100% - 3.25rem);
    z-index: 20;
    .title{
      position: relative;
      padding: 0 0.75rem;
      line-height: 2.2rem;
      color: #262626;
      font-size: 0.8rem;
      text-align: center;
      img{
        width: 0.45rem;
        height: 0.8rem;
        position: absolute;
        left: 0.75rem;
        top: 0.7rem;
      }
      span{
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
        font-size: 0.8rem;
        line-height: 0.8rem;
      }
    }
    .filterCell{
      height: calc(100% - 2.2rem);
      overflow: auto;
      h2{
        color: #262626;
        font-size: 0.7rem;
        text-align: left;
        padding: 0.5rem 0.75rem;
        font-weight: bold;
      }
      .cellInner{
        text-align: left;
        padding: 0 0.75rem;
        .cell{
          color: #262626;
          font-size: 0.6rem;
          padding: 0.3rem 0.5rem;
          border-radius: 6px;
          border: 1px solid #DDDDDD;
          display: inline-block;
          margin-right: 0.5rem;
          margin-bottom: 0.5rem;
        }
      }
    }
  }
  .filterMask{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 15;
    background: #000;
    opacity: 0.4;
  }

  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
}
</style>
