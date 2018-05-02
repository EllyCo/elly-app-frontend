<style scoped>
@import '../css/button_templates.css';
</style>

<template>
<!-- Begin div home -->
<div id="home">

  <!-- Begin list-group button presses -->
  <div class="list-group">
    <ul class="list-group list-group-flush col-md-12">
      <button v-for="click in clicks" v-bind:class="click.cssClass"
      type="button" class="list-group-item list-group-item-action">
                <span v-bind:class="click.buttonCSS"
                      class="fa pull-left"></span>
                <small>{{ click.text }} at {{ click.date.getHours() % 12 }}:
                  {{ click.date.getMinutes() }} </small>
            </button>
    </ul>
  </div>
  <!-- End list-group button presses -->

  <!-- Begin class bottom bar -->
  <nav class="navbar fixed-bottom navbar-light bg-light col-lg-12" style="width:100%">

    <!-- Begin btn-delivered-insulin-->
    <button type="button" class="btn btn-delivered-insulin btn-lg active col-lg-3">
    <a onclick="ToggleDeliveredInsulin()"> </a>
                <i class="fa fa-check fa-2x"></i>
            </button>
    <!-- End btn-delivered-insulin-->

    <!-- Begin btn-checked-blood-sugar -->
    <button type="button" class="btn btn-checked-blood-sugar btn-lg active col-lg-3"
    onclick="ToggleCheckedBloodSugar()">
                <i class="fa fa-tint fa-2x"></i>
            </button>
    <!-- End btn-checked-blood-sugar -->

    <!-- Begin btn-feeling-low -->
    <button type="button" class="btn btn-feeling-low btn-lg active col-lg-3"
    onclick="ToggleFeelingLow()">
      <i class="fa fa-exclamation fa-2x"></i>
    </button>
    <!-- End btn-feeling-low -->

    <!-- Begin class time menu -->
    <button type="button" class="btn btn-light btn-lg active col-lg-3"
    onclick="ToggleCalendar()">
      <i class="fa fa-calendar-alt fa-2x"></i>
    </button>
    <!-- End class time menu -->

  </nav>
  <!-- End class bottom bar -->

</div>
<!-- End div home -->
</template>



<script>
//import bDropdown from '../../node_modules/bootstrap-vue/es/components/dropdown/dropdown';
//Vue.component('b-dropdown', bDropdown);

const axios = require('axios');
const xml = require('xml2js');

function createClickObject(click, datetime) {
  var clickDetails = {
    'SINGLE': {
      css: 'btn-delivered-insulin',
      buttonCSS: 'fa-tint',
      text: 'Jason delivered insulin'
    },
    'DOUBLE': {
      css: 'btn-checked-blood-sugar',
      buttonCSS: 'fa-check',
      text: 'Jason checked his blood sugar'
    },
    'LONG': {
      css: 'btn-feeling-low',
      buttonCSS: 'fa-exclamation',
      text: 'Jason is feeling low'
    }
  }
  var cleanedClick = click.split(/[ ,]+/)[0];

  return {
    click: cleanedClick, // remove whitespace
    date: new Date(datetime),
    cssClass: clickDetails[cleanedClick].css,
    text: clickDetails[cleanedClick].text,
    buttonCSS: clickDetails[cleanedClick].buttonCSS
  }
};

function cleanClickData(rawData) {
  return rawData
    .map(x => x.Key[0]) // parses the string
    .map(x => x.split('@')) // split clickType and datetime
    .map(x => createClickObject(x[0], x[1]))  // click, datetime --> JSON
    .sort(function(a,b){
      return b.date - a.date
    })
};
function ToggleDeliveredInsulin() {isToggleDeliveredInsulin = !isToggleDeliveredInsulin;};
function ToggleCheckedBloodSugar() { isToggleCheckedBloodSugar = !isToggleCheckedBloodSugar;};
function ToggleFeelingLow() { isToggleFeelingLow = !isToggleFeelingLow; };
function ToggleCalendar() { calendarToggleCounter++; };



export default {
  name: 'home',
  data() {
    return {
      clicks: null,
      isToggleDeliveredInsulin: true,
      isToggleCheckedBloodSugar: true,
      isToggleFeelingLow: true,
      calendarToggleCounter: 0,
    }
  },

  mounted() {
    this.getClicks();
    setInterval(function() {
      this.getClicks();
    }.bind(this), 500); // 500 milliseconds = 0.5 seconds
  },

  methods: {
    getClicks: function() {
      var vm = this;
      axios.get('https://elly-button-bucket.s3.amazonaws.com/')
      .then(response => xml.parseString(response.data, function(err, result)
      {vm.clicks = cleanClickData(result.ListBucketResult.Contents);
      }));

      var option = calendarToggleCounter%3;
      var listLength = vm.clicks.length;
      var today = new Date();
      if (!isToggleCheckedBloodSugar) {
        vm.clicks = vm.clicks.filter(click =>
          (click.text == 'Jason delivered insulin') ||
          (click.text == 'Jason is feeling low'));
      }
      if (!isToggleDeliveredInsulin) {
        vm.clicks = vm.clicks.filter(click =>
          (click.text == 'Jason checked his blood sugar') ||
          (click.text == 'Jason is feeling low'));
      }
      if (!isToggleFeelingLow) {
        vm.clicks = vm.clicks.filter(click =>
          (click.text == 'Jason delivered insulin') ||
          (click.text == 'Jason checked his blood sugar'));
      }
      if (option == 1) { // Show past 2 hours
        vm.clicks = vm.clicks.filter(click => (
          (click.date.getHours() + click.date.getMinutes()/100) >=
          ((today.getHours() - 2) + today.getMinutes()/100))
        );
      } else if (option == 2) { // Show past 30 mins
        vm.clicks = vm.clicks.filter(click => (
          ((click.date.getHours() == today.getHours()) && // Within the hour
          (click.date.getMinutes() > today.getMinutes())) ||
          ( ((click.date.getHours() - 1) == today.getHours()) &&  // In the last hour
          ( (60 - click.date.getMinutes() + today.getMinutes) > 30)))
        );
      }

    },
  }
}
</script>
