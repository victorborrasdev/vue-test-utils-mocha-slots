<template>
  <Card>
    <template #header>
      <h1>Hello</h1>
    </template>
    <template #body>
      <p>World</p>
    </template>
  </Card>
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Card
  }
}
</script>

<style>
</style>
