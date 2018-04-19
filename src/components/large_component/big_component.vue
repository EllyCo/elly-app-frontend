
<template>
  <div id="big_component">
    This is the big component. This Vue file imports the sub_component to divide and conquer the project.
  </div>
</template>

<script>
// import sub_component from './sub_component.vue';

export default {
  data () {
    return {
        some_key: 'value'
    }
  },
  // components: {
  //   sub_component
  // }
}
</script>


<style scoped>

</style>
