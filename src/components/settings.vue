<template>
  <div id="settings">
    <div class="container">
  <div class="row">
    <h1 class="col">
Settings    </h1>
</div>
<div class="row">
<p class="col">
  Here you can edit the notifications you recieve from Elly.
  We will alert you anytime an incident button press occurs.</p>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
Recieve a notification anytime a signle button press occurs  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
  <label class="form-check-label" for="defaultCheck1">
Recieve a notification anytime a double button press occurs  </label>
</div>
<div class="row">
<p class="col">
    sex</p>
</div>
</div>
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
