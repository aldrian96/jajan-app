<template>
  <div class="outer">
    <div class="num_notifs">9</div>
  </div>
</template>

<script setup></script>

<style>
.outer {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  background: url(http://us.123rf.com/400wm/400/400/prolific/prolific1206/prolific120600020/14161811-pencil--edit--icon.jpg);
  background-size: 100px 100px;
}

.num_notifs {
  border-radius: 5px;
  width: 50%;
  margin-left: 25%;
  margin-top: 2px;
  background: #00b7ea; /* Old browsers */
  background: -moz-linear-gradient(top, #00b7ea 0%, #0052bf 100%); /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #00b7ea),
    color-stop(100%, #0052bf)
  ); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    top,
    #00b7ea 0%,
    #0052bf 100%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    top,
    #00b7ea 0%,
    #0052bf 100%
  ); /* Opera 11.10+ */
  background: -ms-linear-gradient(top, #00b7ea 0%, #0052bf 100%); /* IE10+ */
  background: linear-gradient(to bottom, #00b7ea 0%, #0052bf 100%); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00b7ea', endColorstr='#0052bf',GradientType=0 ); /* IE6-9 */
  text-align: center;
}
</style>
