<template>
  <div>
    <div :style="style" class="memorySegment" @mouseover="mouseOver" @mouseleave="mouseLeave">
      <p id="center">{{process.name}}</p>
      <p v-show="active" id="center">
        Limit = {{process.limit}}
        <br />
        Base = {{process.base}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MemorySegment",
  data() {
    return {
      active: false
    };
  },
  props: ["process", "processes", "index"],
  methods: {
    mouseOver: function() {
      this.active = true;
    },
    mouseLeave: function() {
      this.active = false;
    }
  },
  computed: {
    style() {
      var heightSaved = 0;
      if (this.index > 0) {
        heightSaved +=
          parseInt(this.processes[this.index - 1].limit) +
          parseInt(this.processes[this.index - 1].base);
      }

      return (
        "height: " +
        this.process.limit +
        "px; margin-top: " +
        (parseInt(this.process.base) - heightSaved) +
        "px;"
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.memorySegment {
  width: 100%;
  border-color: black;
  border-style: solid;
  background-color: gray;
}

#center {
  text-align: center;
}
</style>
