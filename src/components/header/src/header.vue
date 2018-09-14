<template>
  <h2 class="cz-header" ref="header" @click="handleClick">
    {{titleText}}
  </h2>
</template>

<script>
  export default {
    name: 'cz-header',

    props: {
      requestData: Object
    },

    data() {
      return {
        titleText: '',
        titleData: {}
      }
    },

    mounted() {
      this.titleData = this.requestData;
      this.$nextTick(() => {
        this.$refs.header.style
        this.titleText = this.titleData.titleText;
        this.$refs.header.style.height = (this.$refs.header.offsetWidth / this.titleData.titleProportion) / window.fontSize + 'rem';
        this.$refs.header.style.lineHeight = (this.$refs.header.offsetWidth / this.titleData.titleProportion) / window.fontSize + 'rem';
        if (this.titleData.titleGravity === 2) {
          this.$refs.header.style.textAlign = 'right';
        } else if (this.titleData.titleGravity === 1) {
          this.$refs.header.style.textAlign = 'center';
        } else {
          this.$refs.header.style.textAlign = 'left';
        }
        this.$refs.header.style.color = this.titleData.titleTextColor;
        this.$refs.header.style.fontSize = this.titleData.titleTextSize / window.fontSize + 'rem';
        this.$refs.header.style.paddingLeft = this.titleData.titlePadding / window.fontSize + 'rem';
        this.$refs.header.style.paddingRight = this.titleData.titlePadding / window.fontSize + 'rem';
        this.$refs.header.style.fontWeight = this.titleData.isBold ? 'bold' : 'normal';
        this.$refs.header.style.background = `${this.titleData.titleBackgroundColor} url(${this.titleData.titleBackgroundImg}) no-repeat center top`;
      });
    },

    methods: {
      handleClick(evt) {
        this.$emit('click', evt)
      }
    }
  }
</script>

<style lang="less" scoped>
  .cz-header{
    width: 100%;
    background-size: 100%; 
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>

