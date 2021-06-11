<template>
  <div class="full-wrapper">
    
  
<jj-parallax-card class="" lightColor="transparent" style="margin:auto; width: 512px; height: 512px;" @click="click">
      <div slot="front">
         <vh-copy class="para-desktop copy-button"
      :data="'0x1e1eed62f8d82ecfd8230b8d283d5b5c1ba81b55'"
      :confirm_dialog="'buefy'"
      @copied="copiedData">
      Contract Address
</vh-copy><br>
 <h1>GAMMA tokens correspond to the luminance value of LED pixels.</h1>
<br><p>

Present on the exposed surfaces and livestreamed from a satellite to be placed in LEO in JUNE 2022, These pixel's hue (KAPPA), luminosity (GAMMA), X-Axis (BETA) and Y-Axis (RHO) locations are acquired in exchange for the aforementioned tokens.</p>    <br>    <router-link :to="{ name: 'home' }" >
     <img src="~/@/assets/gamma-26.png" style="height:64px;filter:invert(1);" alt="">
    </router-link></div>
</jj-parallax-card>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      form: {
        quantity: ''
      },
      modalLoginOpen: false,
      modalMakepotionOpen: false
    };
  },
 components: {
  },
};
</script>
<style scoped>
.hasEffect {
  cursor: pointer;
}
</style>

