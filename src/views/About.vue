<template>
  <div class="block">
  
  <a-scene>
      <a-assets>
        <img id="ground" src="~/@/assets/noise.gif">
      </a-assets>

      <a-videosphere src="#antarctica"></a-videosphere>      
      <a-sphere position="0 1.25 -5" radius="1.25" color="#111111"></a-sphere>
      <a-plane src="#ground"  position="0 0 -4" rotation="-90 0 0" width="100" height="100" color="transparent" ></a-plane>
      <a-sky color="#ffffff"></a-sky>
    </a-scene>
  </div>
</template>

<script>
export default {};
</script>
