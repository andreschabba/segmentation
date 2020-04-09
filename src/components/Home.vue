<template>
  <div class="home">
    <h1>Segmentation</h1>
    <hr />
    <p>In Operating Systems, Segmentation is a memory management technique in which, the memory is divided into the variable size parts. Each part is known as segment which can be allocated to a process.</p>
    <p>The details about each segment are stored in a table called as segment table. Segment table is stored in one (or many) of the segments.</p>
    <p>Segment table contains mainly two information about segment:</p>
    <p id="tab">1) Base: It is the base address of the segment.</p>
    <p id="tab">2) Limit: It is the length of the segment.</p>
    <p>CPU generates a logical address which contains two parts:</p>
    <p id="tab">1) Segment Number</p>
    <p id="tab">2) Offset</p>
    <p>The Segment number is mapped to the segment table. The limit of the respective segment is compared with the offset. If the offset is less than the limit then the address is valid otherwise it throws an error as the address is invalid.</p>
    <p>In the case of valid address, the base address of the segment is added to the offset to get the physical address of actual word in the main memory.</p>
    <br />
    <img id="image" src="../assets/images/os-segmentation.png" />
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
