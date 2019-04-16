<template>
  <div v-show="ready" class="el-carousel__item" ref="carouselItem" :class="{
      'is-active': active,
      'el-carousel__item--card': $parent.type === 'card',
      'is-in-stage': inStage,
      'is-hover': hover,
      'is-animating': animating
    }" :style="{
      msTransform: `translateX(${ translate }px) scale(${ scale })`,
      webkitTransform: `translateX(${ translate }px) scale(${ scale })`,
      transform: `translateX(${ translate }px) scale(${ scale })`,
      width: $parent.type === 'card' ? cardData.maxItemWidthProportion*100 + '%' : ''
    }">
    <div v-if="$parent.type === 'card'" v-show="!active" class="el-carousel__mask">
    </div>
    <v-touch class="touch" v-on:swipeleft="swipeLeft" v-on:swiperight="swipeRight">
      <slot></slot>
    </v-touch>
  </div>
</template>

<script>
  export default {
    name: 'CzCarouselItem',
    props: {
      name: String,
      label: {
        type: [String, Number],
        default: ''
      }
    },

    data() {
      return {
        hover: false,
        translate: 0,
        scale: 1,
        active: false,
        ready: false,
        inStage: false,
        animating: false,
        cardData: {}
      };
    },

    methods: {
      swipeLeft() {
        const parent = this.$parent;
        var index = parent.items.indexOf(this);
        parent.setActiveItem(index + 1);
      },
      swipeRight() {
        const parent = this.$parent;
        const index = parent.items.indexOf(this);
        parent.setActiveItem(index - 1);
      },
      processIndex(index, activeIndex, length) {
        if (activeIndex === 0 && index === length - 1) {
          return -1;
        } else if (activeIndex === length - 1 && index === 0) {
          return length;
        } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
          return length + 1;
        } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
          return -2;
        }
        return index;
      },
      calculateTranslate(index, activeIndex, parentWidth) {
        // if (this.inStage) {
        //   return parentWidth * ((2 - this.cardData.scale) * (index - activeIndex) + 1) / 4;
        // } else if (index < activeIndex) {
        //   return -(1 + this.cardData.scale) * parentWidth / 4;
        // } else {
        //   return (3 + this.cardData.scale) * parentWidth / 4;
        // }
        // console.log(this.inStage, arguments);
        if (this.inStage) {
          var activeTranslateX = parentWidth * (1 - this.cardData.maxItemWidthProportion) / 2;
          if (index === activeIndex) {
            return activeTranslateX;
          } 
          var paddingList = this.cardData.padding.split(',');
          var itemWidth = (parentWidth - paddingList[0] - paddingList[2]) * this.cardData.maxItemWidthProportion;
          var baseTransform = itemWidth * (1 + this.cardData.scale) / 2;
          return activeTranslateX + (baseTransform + this.cardData.columnSpacing) * (index - activeIndex);
        } else if (index < activeIndex) {
          return parentWidth * -2;
          // return -(1 + this.cardData.scale) * parentWidth / 4;
        } else {
          return parentWidth * 2;
          // return (3 + this.cardData.scale) * parentWidth / 4;
        }
      },

      translateItem(index, activeIndex, oldIndex) {
        const parentWidth = this.$parent.$el.offsetWidth;
        const length = this.$parent.items.length;
        if (this.$parent.type !== 'card' && oldIndex !== undefined) {
          this.animating = index === activeIndex || index === oldIndex;
        }
        if (index !== activeIndex && length > 2) {
          index = this.processIndex(index, activeIndex, length);
        }
        if (this.$parent.type === 'card') {
          this.inStage = Math.round(Math.abs(index - activeIndex)) <= 1;
          this.active = index === activeIndex;
          this.translate = this.calculateTranslate(index, activeIndex, parentWidth);
          this.scale = this.active ? 1 : this.cardData.scale;
        } else {
          this.active = index === activeIndex;
          this.translate = parentWidth * (index - activeIndex);
        }
        this.ready = true;
      },

      handleItemClick() {
        const parent = this.$parent;
        if (parent && parent.type === 'card') {
          const index = parent.items.indexOf(this);
          parent.setActiveItem(index);
        }
      }
    },

    created() {
      if (this.$parent) {
        this.cardData = this.$parent.$props.requestData;
        this.$parent.updateItems();
      }
    },

    mounted() {
      this.$nextTick(() => {

      });
  },

    destroyed() {
      this.$parent && this.$parent.updateItems();
    }
  };
</script>

<style lang="scss" scoped>
@import '../scss/item.scss';
.touch {
  width: 100%;
  height: 100%;
}
</style>
