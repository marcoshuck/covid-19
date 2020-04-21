<template>
  <div
    class="columns is-multiline"
  >
    <div v-for="(country, i) in input" :key="i" class="column is-one-quarter">
      <card :input="country"></card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapper, Country } from '../../api/country';
import Card from './Card.vue';

export default Vue.extend({
  name: 'List',
  components: {
    card: Card,
  },
  props: {
    input: {
      type: Array,
      required: true,
    },
  },
});
</script>
