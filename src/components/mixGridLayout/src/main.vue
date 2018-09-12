<template>
  <div class="cz-mixGridLayout">
    123
  </div>
</template>
<script>
export default {
  name: 'cz-mixGridLayout',
  props: {

  },

  computed: {
   
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
  @import '../scss/main';
</style>
