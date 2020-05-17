<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">#</th>
          <th class="text-left">Name</th>
          <th class="text-left">Limit</th>
          <th class="text-left">Base</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(process, index) in processes2" :key="index">
          <td>{{ index+1 }}</td>
          <td>{{ process.name }}</td>
          <td>{{ process.limit }}</td>
          <td>{{ process.base }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  props: ["processes2"]
};
</script>
