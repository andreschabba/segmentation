<template>
  <div class="container">
    <AddLogic @logicAdded="addLogic" :size="processes.length" />
    <v-row justify="center" v-if="logicData.segment && logicData.offset">
      <small>Current Logic Address: {{logicData}}</small>
    </v-row>
    <br />
    <v-row justify="center">
      <div :style="style" class="memory">
        <MemorySegment
          v-for="(process, index) in processes"
          :key="index"
          :process="process"
          :processes="processes"
          :index="index"
        />
      </div>
    </v-row>
  </div>
</template>

<script>
import AddLogic from "./AddLogic";
import MemorySegment from "./MemorySegment";

export default {
  name: "PhysicalAddress",
  props: ["size", "processes"],
  data: () => ({
    logicData: {
      segment: null,
      offset: null
    },
    executedProcesses: []
  }),
  components: {
    AddLogic,
    MemorySegment
  },
  methods: {
    addLogic(logic) {
      this.logicData = logic;
    }
  },
  computed: {
    style() {
      return "height: " + this.size + "px";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 3rem;
}

.memory {
  width: 40%;
  border-color: black;
  border-style: solid;
  background-color: white;
}

#tab {
  padding-left: 3em;
}
</style>