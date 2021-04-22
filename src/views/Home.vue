<template>
  <div class="block">
 
    <div class="logo-center-wrapper" style="">
      <vh-copy class="copy-button"
      :data="'0x1e1eed62f8d82ecfd8230b8d283d5b5c1ba81b55'"
      :label="'Contract'"
      :confirm_dialog="'buefy'"
      @copied="copiedData">
      <img class="copy-icon" src="~/@/assets/favicon.png" width="48px" height="48px" style="" alt="$GAMMA">
      </vh-copy> 
      <jj-parallax-card class="mt-6 para-mobile" lightColor="transparent" style="margin:auto;float:left; width: 300px; height: 500px;" @click="click">
      <div slot="front">
      <img src="~/@/assets/GAMMA.svg" width="512px;" class="mt-4" alt="">
      </div>
</jj-parallax-card>
      <jj-parallax-card class="mt-6 para-desktop" lightColor="transparent" style="margin:auto;float:left; width: 512px; height: 820px;" @click="click">
      <div slot="front">
      <img src="~/@/assets/GAMMA.svg" width="512px;" class="mt-4" alt="">
      </div>
</jj-parallax-card>
      <div class="logo-title"><h1 style="">$GAMMA</h1></div>

    </div>
    <div class="data-wrapper" style="">
      <p></p>
      <div class="data-title" style="">GAMMA tokens correspond to the luminance value of LED pixels. <br><br>Present on the exposed surfaces and livestreamed from a satellite to be placed in LEO in JUNE 2022, These pixel's hue <a href="https://kappa-protocol.netlify.app" target="_blank">(KAPPA)</a>, luminosity <a href="https://gamma-protocol.netlify.app" target="_blank">(GAMMA)</a>, X-Axis <a href="https://beta-protocol.netlify.app" target="_blank">(BETA)</a> and Y-Axis <a href="https://rho-protocol.netlify.app" target="_blank">(RHO)</a> locations are acquired in exchange for the aforementioned tokens.<br><br>ACCESS THE CONTRACT </div>
      <div class="data-cylinders  mb-8"  style="">
      <a class="cylinder-module" target="_blank" href="https://www.dextools.io/app/uniswap/pair-explorer/0xe46456153cf0e767528f4a4cd3b613d5c4101e48">
          <img width="64px" height="64px" src="~/@/assets/dextools.png" alt="">
          </a>
       <a class="cylinder-module" target="_blank" href="https://app.uniswap.org/#/swap?outputCurrency=0x1e1eed62f8d82ecfd8230b8d283d5b5c1ba81b55">
          <img width="64px" height="64px" src="~/@/assets/uniswap.png" alt="">
        </a>
        <a class="cylinder-module" target="_blank" href="https://etherscan.io/address/0x1e1eed62f8d82ecfd8230b8d283d5b5c1ba81b55">
          <img width="64px" height="64px" src="~/@/assets/etherscan.png" alt="">
        </a>
        <a class="cylinder-module" target="_blank" href="https://app.uniswap.org/#/add/0x1e1eed62f8d82ecfd8230b8d283d5b5c1ba81b55/ETH">
          <img width="64px" height="64px" src="~/@/assets/liquidity.png" alt="">
       </a>
        </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import JJParallaxCard from 'jj-parallax-card'

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
  computed: {
    ...mapState(['settings']),
    isValid() {
      return parseFloat(this.form.quantity);
    },
    maxStrike() {
      const exchangeRate = this.settings.exchangeRates[this.form.asset];
      return exchangeRate && exchangeRate.usd ? exchangeRate.usd : 1e9;
    }
  },
  methods: {
    
    ...mapActions(['SendDai']),
    handleSubmit() {
      this.SendDai({
        //address: '0xb72027693a5B717B9e28Ea5E12eC59b67c944Df7',
        value: this.form.quantity
      });
    },
    maxStake() {
      this.form.quantity = this.$store.state.settings.balance;
    }
  },components: {
    'jj-parallax-card':JJParallaxCard,
  },
};
</script>
<style scoped>
.hasEffect {
  cursor: pointer;
}
</style>

