<template>
  <div>
    <div id="app" class="" style="">
      <VueLoadingIndicator v-if="settings.loading" class="overlay big" />
      <div v-else>
        <router-view :key="$route.path" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['settings'])
  },
  methods: {
    ...mapActions(['init'])
  },
  async created() {
    this.init();
  }
};
</script>
