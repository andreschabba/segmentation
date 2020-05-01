<template>
  <div class="container">
    <AddLogic @logicAdded="addLogic" :processes="processes" />
    <v-row justify="center" v-show="logicData.segment && logicData.offset && active">
      <pre>
  Current Logic Address:
      * Segment: {{logicData.segment}}
      * Offset: {{logicData.offset}}
      </pre>
    </v-row>
    <br />
    <v-row justify="center">
      <v-col cols="12" sm="8">
        <div :style="style" class="memory">
          <MemorySegment
            v-for="(process, index) in processes"
            :key="index"
            :process="process"
            :processes="processes"
            :index="index"
            :logicData="logicData"
          />
        </div>
      </v-col>
      <v-col v-show="active" cols="12" sm="4">
        <div :style="style" class="memory2">
          <div v-show="active && logicData.segment && logicData.offset" :style="style2">
            <img id="image" src="../assets/images/arrow.png" width="80" height="80" />
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import AddLogic from "./AddLogic";
import MemorySegment from "./MemorySegment";

export default {
  name: "PhysicalAddress",
  props: ["size", "processes", "logicData", "active"],
  components: {
    AddLogic,
    MemorySegment
  },
  methods: {
    addLogic(logic) {
      console.log(logic);
      this.logicData = logic;
      this.active = true;
    }
  },
  computed: {
    style() {
      return "height: " + this.size + "px";
    },
    style2() {
      if (this.processes.length > 0) {
        var height = 0;
        if (this.logicData.segment && this.logicData.offset) {
          height =
            parseInt(
              this.processes[parseInt(this.logicData.segment - 1)].base
            ) +
            parseInt(this.logicData.offset) -
            40;
        }
        return "margin-top: " + height + "px;";
      } else {
        return "margin-top: 0 px;";
      }
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
  width: 100%;
  border-color: black;
  border-style: solid;
  background-color: white;
}
.memory2 {
  width: 100%;
}

#tab {
  padding-left: 3em;
}
</style>