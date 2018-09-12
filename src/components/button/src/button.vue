<template>
  <button
    class="cz-button"
    @click="handleClick"
    :disabled="buttonDisabled"
    :type="nativeType"
    :publicData="publicData"
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
    ref="a"
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
    publicData: {},
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

  created() {
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
    }
  }
};
</script>
<style scoped lang="scss">
.cz-button {
  color: #fff;
  border: 1px solid #e1376c;
  border-radius: 4px;
  font-size: 18px;
  padding: 12px 35px;
  outline: medium;
  cursor: pointer;
  font-weight: bold;
  background: -webkit-linear-gradient(left, #ff8d46, #e34077);
  background: -o-linear-gradient(right, #ff8d46, #e34077);
  background: -moz-linear-gradient(right, #ff8d46, #e34077);
  background: linear-gradient(to right, #ff8d46, #e34077);
  &:hover {
    background: -webkit-linear-gradient(left, #f6a573, #de5d89);
    background: -o-linear-gradient(right, #f6a573, #de5d89);
    background: -moz-linear-gradient(right, #f6a573, #de5d89);
    background: linear-gradient(to right, #f6a573, #de5d89);
  }
  &:active {
    background: -webkit-linear-gradient(left, #ff8d46, #e34077);
    background: -o-linear-gradient(right, #ff8d46, #e34077);
    background: -moz-linear-gradient(right, #ff8d46, #e34077);
    background: linear-gradient(to right, #ff8d46, #e34077);
  }
}
.is-disabled,
.is-disabled:active {
  cursor: default;
  background: -webkit-linear-gradient(left, #f6a573, #de5d89);
  background: -o-linear-gradient(right, #f6a573, #de5d89);
  background: -moz-linear-gradient(right, #f6a573, #de5d89);
  background: linear-gradient(to right, #f6a573, #de5d89);
}
</style>
