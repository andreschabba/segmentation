<template>
  <div class="container">
    <NewProcess @processAdded="newProcess" />
    <v-row v-if="processes.length != 0">
      <v-col cols="12">
        <Table :processes="processes" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NewProcess from "./NewProcess";
import Table from "./Table.vue";

export default {
  name: "SegmentTable",
  data: () => ({
    dialog: false,
    isWrong1: false,
    isWrong2: false,
    processData: {
      name: "",
      limit: null,
      base: null
    },
    processes: []
  }),
  components: {
    NewProcess,
    Table
  },
  methods: {
    newProcess(process) {
      this.processes.push(process);
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
