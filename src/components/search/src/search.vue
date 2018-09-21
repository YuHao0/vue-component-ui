<template>
  <div class="search">
    <div class="searchBar">
      <div class="searchInput">
        <input type="text" placeholder="耐克板鞋" />
      </div>
      <div class="cancelBtn">
        <a href="javascript:;">取消</a>
      </div>
    </div>
    <div class="record">
      <h2 class="recordTitle">最近搜索</h2>
      <div class="recordContent">
        <a href="javascript:;" v-for="(item, index) in requestData" :key="index">{{item}}</a>
      </div>
    </div>
    <div class="record">
      <h2 class="recordTitle">热门搜索</h2>
      <div class="recordContent">
        <a href="javascript:;" v-for="(item, index) in requestData" :key="index">{{item}}</a>
      </div>
    </div>
    <div class="record guessLike">
      <h2 class="recordTitle">猜你喜欢</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cz-search',

  props: {
    requestData: Array
  },

  data() {
    return {
      
    }
  },

  created() {
    console.log('searchData:', this.requestData);
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
.search{
  .searchBar{
    height: 2.2rem;
    padding: 0 0.6rem;
    font-size: 0;
    .searchInput{
      display: inline-block;
      vertical-align: top;
      width: calc(100% - 1.85rem);
      background: #F5F5F5 url('../../../assets/img/search_icon.png') no-repeat 0.5rem center;
      border-radius: 4px;
      height: 1.5rem;
      margin-top: 0.35rem;
      input{
        width: 100%;
        height: 100%;
        background: transparent;
        padding-left: 1.825rem;
        outline: medium;
        font-size: 0.8rem;
        color: #535353;
        &::-webkit-input-placeholder{
          color: #878787;
        }
      }
    }
    .cancelBtn{
      display: inline-block;
      vertical-align: top;
      width: 1.85rem;
      text-align: right;
      a{
        display: inline-block;
        color: #262626;
        font-size: 0.8rem; 
        line-height: 2.2rem;
      }
    }
  }
  .record{
    padding: 0 0.6rem 0.5rem;
    border-bottom: 0.5rem solid #F5F5F5;
    .recordTitle{
      line-height: 2.5rem;
      color: #262626;
      text-align: left;
      font-size: 0.8rem;
    }
    .recordContent{
      text-align: left;
      a{
        display: inline-block;
        color: #262626;
        font-size: 0.6rem;
        padding: 0.4rem 0.55rem;
        background: #F5F5F5;
        border-radius: 4px;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
      }
    }
  }
  .guessLike{
    padding: 0 0.6rem;
    border-bottom: none;
  }
}
</style>
