<template>
  <div id="app">
    <div class="page-component__nav">
      <side-nav :data="navsData" base=""></side-nav>
    </div>
    <div class="page-component__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import bus from './bus';
import navsData from './router/nav.config.json';

export default {
  name: 'App',
  data() {
    return {
      navsData,
      hover: false,
      showBackToTop: false,
      scrollTop: 0,
      showHeader: true
    }
  },
  methods: {

  },
  mounted() {
    
  }
}
</script>

<style lang='less'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .page-component__nav {
    width: 240px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 20px;
    transition: padding-top .3s;
    &.is-extended {
      padding-top: 0;
    }
  }
  .side-nav {
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-right: 0;
    background: #fff;
    & > ul {
      padding-bottom: 50px;
    }
  }
  .page-component__content {
    padding-left: 270px;
    padding-right: 100px;
    padding-bottom: 100px;
    box-sizing: border-box;
  }
  .content {
    padding-top: 50px;
    &> {
      h3 {
        margin: 55px 0 20px;
      }
      table {
        border-collapse: collapse;
        width: 100%;
        background-color: #fff;
        font-size: 14px;
        margin-bottom: 45px;
        line-height: 1.5em;
        strong {
          font-weight: normal;
        }
        td, th {
          border-bottom: 1px solid #d8d8d8;
          padding: 15px;
          max-width: 250px;
        }
        th {
          text-align: left;
          white-space: nowrap;
          color: #666;
          font-weight: normal;
        }
        td {
          color: #333;
        }
        th:first-child, td:first-child {
          padding-left: 10px;
        }
      }
      ul:not(.timeline) {
        margin: 10px 0;
        padding: 0 0 0 20px;
        font-size: 14px;
        color: #5e6d82;
        line-height: 2em;
      }
    }
  }
  .page-component-up {
    background-color: #fff;
    position: fixed;
    right: 100px;
    bottom: 150px;
    size: 40px;
    border-radius: 20px;
    cursor: pointer;
    transition: .3s;
    box-shadow: 0 0 6px rgba(0,0,0, .12);
    z-index: 5;
    i {
      color: #409EFF;
      display: block;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
    }
    &.hover {
      opacity: 1;
    }
  }
  .back-top-fade-enter,
  .back-top-fade-leave-active {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
