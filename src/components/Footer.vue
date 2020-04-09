<template>
  <footer id="footer">
    <p>© {{ this.year }}, Andrés Chávez Abbadie</p>
  </footer>
</template>

<script>
var year = new Date().getFullYear();
export default {
  name: "Footer",
  data: function() {
    return {
      year
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
  position: fixed;
  text-align: center;
  bottom: 0;
  color: rgba(68, 68, 68, 0.925);
  background-color: white;
  width: 100%;
  height: 2.5rem; /* Footer height */
}
</style>
