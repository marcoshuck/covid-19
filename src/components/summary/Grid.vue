<template>
  <div class="columns">
    <div class="column">
      <card title="Nuevos casos confirmados">{{summary.newConfirmed}}</card>
    </div>
    <div class="column">
      <card title="Nuevos fallecimientos confirmados">{{summary.newDeaths}}</card>
    </div>
    <div class="column">
      <card title="Nuevos casos recuperados">{{summary.newRecovered}}</card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapper, Summary } from '../../api/summary';
import Card from './Card.vue';

export default Vue.extend({
  name: 'Grid',
  components: {
    card: Card,
  },
  props: {
    input: Object as () => Summary,
  },
  data() {
    return {
      summary: mapper(this.input),
    };
  },
});
</script>
