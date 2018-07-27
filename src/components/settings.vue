<template>    

  <div id="settings">
    <div class="container">
        <div class="row">
            <h1 class="col">Settings    </h1>
        </div>
        <div id='top-text' class="row">
        <div class="col">
          Here you can edit the notifications you recieve from Elly.
          We will alert you anytime an incident button press occurs.
        </div>
      </div>

    <div class="form-check">
        <input v-on:click="gray" class="form-check-input" type="checkbox" value="" id="defaultCheck1">
        <label class="form-check-label" for="defaultCheck1">
          Only send notifications between the hours of: </label>
    </div>

    <div class="row">
      <div class="col">
    <div class="card">
      <input type="text" id='timepicker1' class="timepicker" />
    </div>
  </div>
</div>

  <div class="row">
      <div id='and' class="col text-center">
      <p> and </p>
  </div>
</div>

  <div class="row">
<div class="col">
  <div class="card">
    <input type="text" id='timepicker2' class="timepicker" />
  </div>
</div>
  </div>

<div id='checks' class="row">
<div class="col">
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
    </div>
</div>

<div id="timelimit" class="row">
  <div class="col">
      <div class="form-group">
      <label for="exampleInputEmail1">If no button presses have occurred in this many hours, send an alert</label>
    <input type="text-right" class="form-control" id="exampleFormControlInput1" placeholder="Enter a number of hours">
</div>
</div>
</div>

<button type="button" class="btn btn-primary">Apply</button>

</div>
</div>

</template>

<script>
require('../assets/js/wickedpicker.min.js');

export default {
  name: 'settings',
  data () {
    return {
      setting1: 'YES',
      setting2: 'NO'
    }
  },
  mounted: function () {
    $('#timepicker1').wickedpicker({
      now: '09:00',
      minutesInterval: 5,
      title: 'Start Time'
    });
    $('#timepicker2').wickedpicker({
      now: '17:00',
      minutesInterval: 5,
      title: 'End Time',
    });
  },
  methods: {
    gray: function (event){
      console.log('it worked')
    }
  }
}
</script>

<style scoped>
#top-text {
  padding-bottom: 30px;
}

#checks{
  padding-top: 20px;
}
#and{
  padding-top: 20px;
}
#timelimit{
  padding-top: 20px;
}
</style>

<style lang='scss'>
  @import '../assets/css/wickedpicker.min.css';
</style>

