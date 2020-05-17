<template>
  <div class="container">
    <NewProcess :size="size" @processAdded="newProcess" />
    <v-row v-if="processes.length != 0">
      <v-col cols="12">
        <Table :processes="processes" @processDeleted="deleteProcess" />
      </v-col>
    </v-row>
    <br />
    <v-row v-if="processes2.length != 0">
      <v-col cols="12">
        <h3>Queue of Waiting Processes</h3>
        <Table2 :processes2="processes2" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NewProcess from "./NewProcess";
import Table from "./Table.vue";
import Table2 from "./Table2.vue";

export default {
  name: "SegmentTable",
  props: ["size"],
  data: () => ({
    dialog: false,
    isWrong1: false,
    isWrong2: false,
    processes: [],
    processes2: []
  }),
  components: {
    NewProcess,
    Table,
    Table2
  },
  methods: {
    newProcess(process) {
      if (this.processes.length == 0) {
        this.processes.push(process);
        this.$emit("sendProcesses", this.processes);
      } else {
        let base = parseInt(process.base);
        let limit = parseInt(process.limit);
        let flag = true;
        for (let i = 0; i < this.processes.length; i++) {
          let base2 = parseInt(this.processes[i].base);
          let limit2 = parseInt(this.processes[i].limit);
          if (
            (base >= base2 && base < limit2) ||
            (limit + base > base2 && limit + base < limit2 + base2) ||
            (base >= base2 && base < base2 + limit2) ||
            (base < base2 && limit >= base2 + limit2)
          ) {
            flag = false;
            break;
          }
        }
        if (flag) {
          this.processes.push(process);
          this.$emit("sendProcesses", this.processes);
        } else {
          this.processes2.push(process);
        }
      }
    },
    deleteProcess(index) {
      this.processes.splice(index, 1);
      this.$emit("resetActive", false);
      this.$emit("resetLogic", {
        segment: null,
        offset: null
      });
      let tmp = [];
      for (let j = 0; j < this.processes2.length; j++) {
        let base = parseInt(this.processes2[j].base);
        let limit = parseInt(this.processes2[j].limit);
        let flag = true;
        for (let i = 0; i < this.processes.length; i++) {
          let base2 = parseInt(this.processes[i].base);
          let limit2 = parseInt(this.processes[i].limit);
          if (
            (base >= base2 && base < limit2) ||
            (limit + base > base2 && limit + base < limit2 + base2) ||
            (base >= base2 && base < base2 + limit2) ||
            (base < base2 && limit >= base2 + limit2)
          ) {
            flag = false;
            break;
          }
        }
        if (flag) {
          this.processes.push(this.processes2[j]);
          tmp.push(j);
        }
      }
      for (let i = 0; i < tmp.length; i++) {
        this.processes2.splice(tmp[i] - i, 1);
      }
      this.$emit("sendProcesses", this.processes);
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

#tab {
  padding-left: 3em;
}
</style>
