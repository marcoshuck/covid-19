<template>
  <div class="card">
    <div class="card-content">
      <p class="title">
        <slot></slot>
      </p>
      <p class="subtitle">
        {{title}}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Card',
  props: {
    title: String,
  },
});
</script>
