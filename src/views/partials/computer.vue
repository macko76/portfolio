
<template>
  <img :src="image | getImagePath" />
</template>

<script>
export default {
  name: 'Computer',
  data() {
    return {
      image: 'comp1.png',
    };
  },
  beforeCreate() {
    this.$root.$on('setImage', pos => {
      this.image = `comp${pos}.png`;
    });
  },
};
</script>

<style scoped>
header {
  font-size: 15px;
}

img {
  display: flex;
  margin: 0 auto 10px;
  max-width: 300px;
}
</style>
