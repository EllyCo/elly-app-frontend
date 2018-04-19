
<template>
  <div id="sub_component">
    <div class="alert alert-success" role="alert">
      This is a subcomponent <a href="#" class="alert-link">blah</a>.
    </div>
  </div>
</template>

<script>
export default {
  name: 'sub_component',
  data () {
    return {
        some_key: 'value'
    }
  }
}
</script>


<style scoped>

</style>
