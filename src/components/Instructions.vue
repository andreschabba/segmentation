<template>
  <div class="home">
    <h1>How to use the app?</h1>
    <hr />
    <p>
      In Operating Systems, Segmentation is a memory management technique in
      which, the memory is divided into the variable size parts. Each part is
      known as segment which can be allocated to a process.
    </p>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 3rem;
}

#tab {
  padding-left: 3em;
}

#image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
</style>
