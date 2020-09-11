
<template>
  <div class="mb-4">
    <header>Summary</header>
    <p class="mt-4 mb-4">{{summary}}</p>

    <header>Skill Stack</header>
    <h4 class="mt-3">Languages & Frameworks</h4>
    <p>{{stack.languages}}</p>

    <h4 class="mt-3">Product Management</h4>
    <p>{{stack.management}}</p>

    <h4 class="mt-3">Additional Experience</h4>
    <p>{{stack.other}}</p>

    <h4 class="mt-3">Spoken Languages</h4>
    <p>{{stack.spoken}}</p>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  computed: {
    summary() {
      return this.$store.getters.summary;
    },
    stack() {
      return this.$store.getters.stack;
    },
  },
};
</script>
