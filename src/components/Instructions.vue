<template>
  <div class="home">
    <h1>How to use the app?</h1>
    <hr />
    <ol>
      <li>Set the size of your physical address space.</li>
      <li>Create at least one process (Will be set in the segmentation table).</li>
      <ul>
        <li>Can delete processes if you click it.</li>
        <li>When you select a process in the physical address you could see its information.</li>
      </ul>
      <li>Add the logical address.</li>
      <ul>
        <li>Will be point the current logical address in the pyshical address space.</li>
      </ul>
    </ol>
    <br />
    <img id="image" src="../assets/images/os-segmentation.png" />
    <br />
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
