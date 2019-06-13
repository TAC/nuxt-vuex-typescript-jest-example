<template lang="pug">
  div [counter]
    div {{ counter }}
    div
      button(name="increment" @click="increment") +
      button(name="decrement" @click="decrement") -
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Counter extends Vue {
  get counter() {
    return this.$store.getters['modules/counter/value']
  }

  public increment() {
    this.$store.dispatch('modules/counter/increment', 1)
  }
  public decrement() {
    this.$store.dispatch('modules/counter/decrement', 1)
  }
}
</script>
