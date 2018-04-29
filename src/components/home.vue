
<template>
  <div id="home">

    <ul class="list-group list-group-flush col-md-12">
      <button type="button" class="list-group-item list-group-item-action col-md-12">
        <span class="fa fa-check pull-left"></span> Eli checked his insulin
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        <span class="fa fa-check pull-left"></span> Eli checked his insulin
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        <span class="fa fa-tint pull-left"></span> Eli checked his blood sugar
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        <span class="fa fa-tint pull-left"></span> Eli checked his blood sugar
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        <span class="fa fa-tint pull-left"></span> Eli checked his blood sugar
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        <span class="fa fa-exclamation pull-left"></span> Eli feels low!
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        <span class="fa fa-exclamation pull-left"></span> Eli feels low!
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        <span class="fa fa-exclamation pull-left"></span> Eli feels low!
      </button>
    </ul>



    <nav class="navbar fixed-bottom navbar-light bg-light">

      <div class="btn-group btn-group-justified btn-group-lg"
      role = "group"
      style="width:100%">  <!-- Class bottom bar -->

        <button type="button"
        style="width:25%"
        class="btn btn-delivered-insulin btn-lg active">
        <i class="fa fa-check fa-2x"></i>
      </button>

        <button type="button"
        style="width:25%"
        class="btn btn-default btn-lg active">
        <i class="fa fa-tint fa-2x"></i>
      </button>

        <button type="button"
        style="width:25%"
        class="btn btn-default btn-lg active">
        <i class="fa fa-exclamation fa-2x"></i>
      </button>

        <div class="btn-group btn-lg" data-style="btn-primary btn-block active"
        style="width:25%">
        <!--  <i class="fa fa-calendar fa-2x"></i> -->
          <select class="selectpicker"
            title="Time">
            <option>Past Day</option>
            <option>Past 3 Days</option>
            <option>Past Week</option>
        </select>
      </div>

      </div>

    </nav> <!-- End class bottom bar -->

  </div>  <!-- End div home -->
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      some_key: 'value'
    }
  }
}
</script>

<style scoped>
</style>


<!-- Start btn-delivered-insulin -->
.btn-delivered-insulin {
  color: #ffffff;
  background-color: #99C24D;
  border-color: #FFFFFF;
}

.btn-delivered-insulin:hover,
.btn-delivered-insulin:focus,
.btn-delivered-insulin:active,
.btn-delivered-insulin.active,
.open .dropdown-toggle.btn-delivered-insulin {
  color: #ffffff;
  background-color: #99C24D;
  border-color: #FFFFFF;
}

.btn-delivered-insulin:active,
.btn-delivered-insulin.active,
.open .dropdown-toggle.btn-delivered-insulin {
  background-image: none;
}

.btn-delivered-insulin.disabled,
.btn-delivered-insulin[disabled],
fieldset[disabled] .btn-delivered-insulin,
.btn-delivered-insulin.disabled:hover,
.btn-delivered-insulin[disabled]:hover,
fieldset[disabled] .btn-delivered-insulin:hover,
.btn-delivered-insulin.disabled:focus,
.btn-delivered-insulin[disabled]:focus,
fieldset[disabled] .btn-delivered-insulin:focus,
.btn-delivered-insulin.disabled:active,
.btn-delivered-insulin[disabled]:active,
fieldset[disabled] .btn-delivered-insulin:active,
.btn-delivered-insulin.disabled.active,
.btn-delivered-insulin[disabled].active,
fieldset[disabled] .btn-delivered-insulin.active {
  background-color: #99C24D;
  border-color: #FFFFFF;
}

.btn-delivered-insulin .badge {
  color: #99C24D;
  background-color: #ffffff;
}

<!-- Start btn-checked-blood-sugar -->
.btn-checked-blood-sugar {
  color: #ffffff;
  background-color: #006E90;
  border-color: #FFFFFF;
}

.btn-checked-blood-sugar:hover,
.btn-checked-blood-sugar:focus,
.btn-checked-blood-sugar:active,
.btn-checked-blood-sugar.active,
.open .dropdown-toggle.btn-checked-blood-sugar {
  color: #ffffff;
  background-color: #006e90;
  border-color: #FFFFFF;
}

.btn-checked-blood-sugar:active,
.btn-checked-blood-sugar.active,
.open .dropdown-toggle.btn-checked-blood-sugar {
  background-image: none;
}

.btn-checked-blood-sugar.disabled,
.btn-checked-blood-sugar[disabled],
fieldset[disabled] .btn-checked-blood-sugar,
.btn-checked-blood-sugar.disabled:hover,
.btn-checked-blood-sugar[disabled]:hover,
fieldset[disabled] .btn-checked-blood-sugar:hover,
.btn-checked-blood-sugar.disabled:focus,
.btn-checked-blood-sugar[disabled]:focus,
fieldset[disabled] .btn-checked-blood-sugar:focus,
.btn-checked-blood-sugar.disabled:active,
.btn-checked-blood-sugar[disabled]:active,
fieldset[disabled] .btn-checked-blood-sugar:active,
.btn-checked-blood-sugar.disabled.active,
.btn-checked-blood-sugar[disabled].active,
fieldset[disabled] .btn-checked-blood-sugar.active {
  background-color: #006E90;
  border-color: #FFFFFF;
}

.btn-checked-blood-sugar .badge {
  color: #006E90;
  background-color: #ffffff;
}
.btn-checked-blood-sugar {
  color: #ffffff;
  background-color: #f18f01;
  border-color: #FFFFFF;
}

.btn-checked-blood-sugar:hover,
.btn-checked-blood-sugar:focus,
.btn-checked-blood-sugar:active,
.btn-checked-blood-sugar.active,
.open .dropdown-toggle.btn-checked-blood-sugar {
  color: #ffffff;
  background-color: #F18F01;
  border-color: #FFFFFF;
}

.btn-checked-blood-sugar:active,
.btn-checked-blood-sugar.active,
.open .dropdown-toggle.btn-checked-blood-sugar {
  background-image: none;
}

.btn-checked-blood-sugar.disabled,
.btn-checked-blood-sugar[disabled],
fieldset[disabled] .btn-checked-blood-sugar,
.btn-checked-blood-sugar.disabled:hover,
.btn-checked-blood-sugar[disabled]:hover,
fieldset[disabled] .btn-checked-blood-sugar:hover,
.btn-checked-blood-sugar.disabled:focus,
.btn-checked-blood-sugar[disabled]:focus,
fieldset[disabled] .btn-checked-blood-sugar:focus,
.btn-checked-blood-sugar.disabled:active,
.btn-checked-blood-sugar[disabled]:active,
fieldset[disabled] .btn-checked-blood-sugar:active,
.btn-checked-blood-sugar.disabled.active,
.btn-checked-blood-sugar[disabled].active,
fieldset[disabled] .btn-checked-blood-sugar.active {
  background-color: #f18f01;
  border-color: #FFFFFF;
}

.btn-checked-blood-sugar .badge {
  color: #f18f01;
  background-color: #ffffff;
}

<!-- Start btn-low -->
.btn-low {
  color: #ffffff;
  background-color: #F18F01;
  border-color: #FFFFFF;
}

.btn-low:hover,
.btn-low:focus,
.btn-low:active,
.btn-low.active,
.open .dropdown-toggle.btn-low {
  color: #ffffff;
  background-color: #F18F01;
  border-color: #FFFFFF;
}

.btn-low:active,
.btn-low.active,
.open .dropdown-toggle.btn-low {
  background-image: none;
}

.btn-low.disabled,
.btn-low[disabled],
fieldset[disabled] .btn-low,
.btn-low.disabled:hover,
.btn-low[disabled]:hover,
fieldset[disabled] .btn-low:hover,
.btn-low.disabled:focus,
.btn-low[disabled]:focus,
fieldset[disabled] .btn-low:focus,
.btn-low.disabled:active,
.btn-low[disabled]:active,
fieldset[disabled] .btn-low:active,
.btn-low.disabled.active,
.btn-low[disabled].active,
fieldset[disabled] .btn-low.active {
  background-color: #F18F01;
  border-color: #FFFFFF;
}

.btn-low .badge {
  color: #F18F01;
  background-color: #ffffff;
}
