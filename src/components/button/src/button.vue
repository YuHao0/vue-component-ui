<template>
  <button
    class="cz-button"
    @click="handleClick"
    :disabled="buttonDisabled"
    :type="nativeType"
    :class="[
      type ? 'el-button-' + type : '',
      buttonSize ? 'el-button-' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
  >
  <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: 'cz-button',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },

  computed: {
    buttonSize() {
      return this.size;
    },
    buttonDisabled() {
      return this.disabled;
    }
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>
<style scoped lang="less">
  .cz-button{
    color: #fff;
    border: 1px solid #E1376C;
    border-radius: 4px;
    font-size: 18px;
    padding: 12px 35px;
    outline: medium;
    cursor: pointer;
    font-weight: bold;
    background: -webkit-linear-gradient(left, #FF8D46 , #E34077);
    background: -o-linear-gradient(right, #FF8D46, #E34077);
    background: -moz-linear-gradient(right, #FF8D46, #E34077);
    background: linear-gradient(to right, #FF8D46 , #E34077);
    &:hover{
      background: -webkit-linear-gradient(left, #F6A573 , #DE5D89);
      background: -o-linear-gradient(right, #F6A573, #DE5D89);
      background: -moz-linear-gradient(right, #F6A573, #DE5D89);
      background: linear-gradient(to right, #F6A573 , #DE5D89);
    }
    &:active{
      background: -webkit-linear-gradient(left, #FF8D46 , #E34077);
      background: -o-linear-gradient(right, #FF8D46, #E34077);
      background: -moz-linear-gradient(right, #FF8D46, #E34077);
      background: linear-gradient(to right, #FF8D46 , #E34077);
    }
  }
  .is-disabled,.is-disabled:active{
    cursor: default;
    background: -webkit-linear-gradient(left, #F6A573 , #DE5D89);
    background: -o-linear-gradient(right, #F6A573, #DE5D89);
    background: -moz-linear-gradient(right, #F6A573, #DE5D89);
    background: linear-gradient(to right, #F6A573 , #DE5D89);
  }
</style>
