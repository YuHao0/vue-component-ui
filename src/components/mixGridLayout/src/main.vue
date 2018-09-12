<template>
  <div class="cz-mixGridLayout" ref='mixGridLayout'>
      <div class="aside">

      </div>
      <div class="content">

      </div>
  </div>
</template>
<script>
export default {
  name: 'cz-mixGridLayout',
  props: {
    requestData: Object
  },
  data() {
    return {
      height: '',
      moduleData: {}
    }
  },
  computed: {

  },

  methods: {
    
  },

  created() {
  },
  
  mounted() {
    this.$nextTick(() => {
      
    });
  }
};
</script>
<style scoped lang="scss">
  @import '../scss/main';
</style>
