<template>
  <label :for="value">
    <input type="radio" class="radio" :name="name" :id="value" :value="value">
    {{ value }}
  </label>
</template>

<script>
export default {
  name: 'RadioButton',
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
