<template>
  <div class="hello">
    <div>
      <slot name="header" />
    </div>
    <div>
      <slot name="body" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    msg: String
  }
}
</script>
