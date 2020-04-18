<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="red" dark v-on="on">Add Logical Address</v-btn>
      </template>
      <v-card v-if="size != 0">
        <v-card-title>
          <span class="headline">Settings</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" md="6" sm="12">
                <v-text-field
                  label="Segment Number (Valor decimal)"
                  hint="example: 1"
                  required
                  v-model="logicalData.segment"
                ></v-text-field>
                <big style="color:red" v-if="isWrong1">*Wrong value</big>
              </v-col>
              <v-col cols="12" md="6" sm="12">
                <v-text-field
                  label="Offset (Valor decimal)"
                  hint="example: 250"
                  required
                  v-model="logicalData.offset"
                ></v-text-field>
                <big style="color:red" v-if="isWrong2">*Wrong value</big>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn
            :disabled="
              !logicalData.segment || isWrong1 || !logicalData.offset || isWrong2
            "
            color="blue darken-1"
            text
            @click.prevent="submitted"
          >Save</v-btn>
        </v-card-actions>
      </v-card>
      <v-card v-else>
        <v-card-title>
          <span class="headline">Ooops</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <p>First You Need To Add At Least One Process!!</p>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "AddLogic",
  props: ["size"],
  data: () => ({
    dialog: false,
    isWrong1: false,
    isWrong2: false,
    logicalData: {
      segment: null,
      offset: null
    }
  }),
  methods: {
    submitted() {
      var self = this;
      var segment = parseInt(this.logicalData.segment);
      var offset = parseInt(this.logicalData.offset);
      if (!segment) {
        this.isWrong1 = true;
        setTimeout(function() {
          self.isWrong1 = false;
        }, 3000);
      }
      if (!offset) {
        this.isWrong2 = true;
        setTimeout(function() {
          self.isWrong2 = false;
        }, 3000);
      }
      if (segment && offset) {
        this.$emit("logicAdded", this.logicalData);
        this.dialog = false;
        this.logicalData = {
          segment: null,
          offset: null
        };
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
