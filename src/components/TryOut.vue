<template>
  <div class="container">
    <v-row justify="center" v-if="!isSubmitted">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="red" dark v-on="on">Let's start!</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Settings</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Physical Address Space (Size)"
                    hint="example: 8000"
                    required
                    v-model="size"
                  ></v-text-field>
                  <big style="color:red" v-if="isWrong">*Wrong value</big>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn
              :disabled="!size || isWrong"
              color="blue darken-1"
              text
              @click.prevent="submitted"
            >Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row v-else>
      <v-col cols="12" md="6" sm="12">
        <h2>Segment Table</h2>
        <hr />
        <SegmentTable
          :size="size"
          @sendProcesses="getProcesses"
          @resetActive="getActive"
          @resetLogic="getLogic"
        />
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <h2>Physical Address Space</h2>
        <hr />
        <PhysicalAddress
          :size="size"
          :processes="newProcesses"
          :active="newActive"
          :logicData="logicData"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SegmentTable from "./SegmentTable.vue";
import PhysicalAddress from "./PhysicalAddress.vue";

export default {
  name: "TryOut",
  data: () => ({
    dialog: false,
    isSubmitted: false,
    isWrong: false,
    size: null,
    newProcesses: [],
    logicData: {
      segment: null,
      offset: null
    },
    newActive: false
  }),
  components: { SegmentTable, PhysicalAddress },
  methods: {
    submitted() {
      var self = this;
      var n = parseInt(this.size);
      if (n) {
        this.dialog = false;
        this.isSubmitted = true;
      } else {
        this.isWrong = true;
        setTimeout(function() {
          self.isWrong = false;
        }, 3000);
      }
    },
    getProcesses(processes) {
      if (processes) {
        this.newProcesses = processes;
      }
    },
    getActive(active) {
      if (active) {
        this.newActive = active;
      }
    },
    getLogic(logic) {
      if (logic) {
        this.logicData = logic;
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

#tab {
  padding-left: 3em;
}
</style>
