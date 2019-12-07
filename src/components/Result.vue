<template>
  <div class="results">
    <p
      v-if="result"
      class="winner"
    >
      You won!
    </p>
    <p
      v-else
      class="looser"
    >
      You Lost!
    </p>
  </div>
</template>

<script>
export default {
  name: 'Result',
  props: {
    result: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
