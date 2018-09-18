import Button from './button'
import Header from './header'
import Carousel from './carousel'
import CarouselItem from './carousel/src/item'
import GridLayout from './gridLayout'
import MixGridLayout from './mixGridLayout'
import ClosetView from './closetView'
import FlashSaleView from './flashSaleView'
import GoodsView from './goodsView'
import GoodsHorizontalView from './goodsHorizontalView'
const components = [
  Button,
  Header,
  Carousel,
  CarouselItem,
  GridLayout,
  MixGridLayout,
  ClosetView,
  FlashSaleView,
  GoodsView,
  GoodsHorizontalView
];

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
  Header,
  Carousel,
  CarouselItem,
  GridLayout,
  MixGridLayout,
  ClosetView,
  GoodsView,
  GoodsHorizontalView
};
