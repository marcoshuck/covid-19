<template>
  <div>
    <b-navbar spaced>
      <template slot="brand">
        <b-navbar-item>
          <img
            src="img/logo.png"
            alt="COVID-19 RESPONSE"
          >
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary" href="https://marcos.huck.com.ar">
              <strong>Marcos Huck</strong>
            </a>
            <a class="button is-light" href="https://github.com/marcoshuck/covid-19">
              Repositorio
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <div class="container">
      <h1 class="title">COVID-19 · REPORTE DIARIO - {{date}}</h1>
      <div class="container" v-if="!loading">
        <div>
          <h2 class="subtitle">Situación global</h2>
          <grid :input="summary"></grid>

          <hr>

          <b-field>
            <b-input placeholder="Buscar por país..."
                     v-model="search"
                     type="search"
                     icon="magnify">
            </b-input>
          </b-field>

          <hr>

          <h2 class="subtitle">Situación por país</h2>
          <list :input="filteredCountries"></list>
        </div>
        <div class="container" v-if="loading">

        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          Creado por <a href="https://marcos.huck.com.ar">Marcos Huck</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import api from '@/api';
import { Result } from '@/api/result';
import { AxiosResponse } from 'axios';
import List from '@/components/country/List.vue';
import Grid from '@/components/summary/Grid.vue';
import { Country, mapper } from '@/api/country';

export default Vue.extend({
  name: 'App',
  components: {
    grid: Grid,
    list: List,
  },
  computed: {
    date(): string {
      const date: Date = new Date();
      return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    },
    filteredCountries(): Country[] {
      return this.countries.filter(
        (country) => country.name.toLowerCase().match(this.search.toLowerCase()),
      );
    },
  },
  data() {
    return {
      summary: undefined,
      countries: [],
      error: '',
      loading: true,
      search: '',
    };
  },
  created() {
    api.get('/summary')
      .then((result: AxiosResponse<Result>) => {
        result.data.Countries.forEach((country) => {
          const c: Country = mapper(country);
          this.countries.push(c);
        });
        this.summary = result.data.Global;
        this.loading = false;
      })
      .catch((err) => {
        this.error = err;
      });
  },
});
</script>

<style>
</style>
