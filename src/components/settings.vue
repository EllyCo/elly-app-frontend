<template>
  <div id="settings">
    As a test, the following is from the settings component:
    <ol>
        <li>Setting #1 value: {{ setting1 }}</li>
        <li>Setting #2 value: {{ setting2 }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'settings',
  data () {
    return {
      setting1: 'YES',
      setting2: 'NO'
    }
  }
}
</script>

<style scoped>

</style>
