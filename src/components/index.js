import Button from './button';
import Header from './header';
import Carousel from './carousel';
import CarouselItem from './carousel/src/item';
import Cube from './cube/src/cube';
import GridLayout from './gridLayout';
import MixGridLayout from './mixGridLayout';
import ClosetView from './closetView';
import FlashSaleView from './flashSaleView';
import SrollPageView from './scrollPageView';
import GalleryView from './galleryView';
import GoodsView from './goodsView';
import GoodsHorizontalView from './goodsHorizontalView';
import Category from './category';
import Search from './search';
import Filter from './filter';
import ShopCart from './shopCart';
// 第三方组件库
import Vue from 'vue';
import VueTouch from 'src/utils/directive/touch';
import vuescroll from 'src/utils/scroll/vuescroll';
import 'src/utils/scroll/vuescroll.css';
Vue.use(VueTouch, { name: 'v-touch' });
Vue.use(vuescroll, {
  ops: {
    vuescroll: {
      zooming: false
    }
  }
});

const components = [
  Button,
  Header,
  Carousel,
  CarouselItem,
  Cube,
  GridLayout,
  MixGridLayout,
  ClosetView,
  FlashSaleView,
  SrollPageView,
  GalleryView,
  GoodsView,
  GoodsHorizontalView,
  Category,
  Search,
  Filter,
  ShopCart
];

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
  Header,
  Carousel,
  CarouselItem,
  Cube,
  GridLayout,
  MixGridLayout,
  ClosetView,
  FlashSaleView,
  SrollPageView,
  GalleryView,
  GoodsView,
  GoodsHorizontalView,
  Category,
  Search,
  Filter,
  ShopCart
};
