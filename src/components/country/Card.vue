<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{country.name}} {{flag}}
      </p>
    </header>
    <div class="card-content">
      <ul>
        <li>Casos confirmados: {{country.newConfirmed}}</li>
        <li>Total confirmados: {{country.totalConfirmed}}</li>
        <hr/>
        <li>Fallecimientos confirmados: {{country.newDeaths}}</li>
        <li>Total fallecimientos: {{country.totalDeaths}}</li>
        <hr/>
        <li>Casos recuperados: {{country.newRecovered}}</li>
        <li>Total recuperados: {{country.totalRecovered}}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { convertEmoji } from '@/utils/unicode';
import { Country } from '../../api/country';

export default Vue.extend({
  name: 'Card',
  props: {
    input: Object as () => Country,
  },
  computed: {
    country(): Country {
      return this.input;
    },
    flag(): string {
      return convertEmoji(this.country.code);
    },
  },
});
</script>
