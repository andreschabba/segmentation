<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="red" dark v-on="on">New Process</v-btn>
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
                  label="Process Name"
                  hint="example: Process 0"
                  required
                  v-model="processData.name"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Limit"
                  hint="example: 100"
                  required
                  v-model="processData.limit"
                ></v-text-field>
                <big style="color:red" v-if="isWrong1">*Wrong value</big>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Base"
                  hint="example: 500"
                  required
                  v-model="processData.base"
                ></v-text-field>
                <big style="color:red" v-if="isWrong2">*Wrong value</big>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Close</v-btn
          >
          <v-btn
            :disabled="
              !processData.limit || isWrong1 || !processData.base || isWrong2
            "
            color="blue darken-1"
            text
            @click.prevent="submitted"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
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
    }
  }),
  methods: {
    submitted() {
      var self = this;
      var limit = parseInt(this.processData.limit);
      var base = parseInt(this.processData.base);
      if (!limit) {
        this.isWrong1 = true;
        setTimeout(function() {
          self.isWrong1 = false;
        }, 3000);
      }
      if (!base) {
        this.isWrong2 = true;
        setTimeout(function() {
          self.isWrong2 = false;
        }, 3000);
      }
      if (limit && base) {
        this.$emit("processAdded", this.processData);
        this.dialog = false;
        this.processData = {
          name: "",
          limit: null,
          base: null
        };
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
