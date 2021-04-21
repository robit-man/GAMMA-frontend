<template>
  <nav>
   
  </nav>
</template>


<script>
import { mapState } from 'vuex';
import { shorten } from '@/helpers/utils';

export default {
  data() {
    return {
      modalLoginOpen: false
    };
  },

  computed: mapState({
    name: state => state.settings.name,
    address: state => state.settings.address
  }),
  methods: {
    shorten
  }
};
</script>
