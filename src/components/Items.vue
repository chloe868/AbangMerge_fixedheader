<template>
  <div>
    <Header />
    <br>   
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">Add Item</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Add Item</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-autocomplete
                    v-model="add.kind"
                    :items="['Van', 'Boat', 'Motorcycle', 'Car', 'Bus']"
                    label="Kind of Vehicles*"
                    required
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Brand*" v-model="add.brand" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Sitting Capacity*" v-model="add.sit" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Location*" v-model="add.location" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field label="Rate*" v-model="add.rate" required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>
<style scoped>
.theme--dark.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined){
  margin-left: 85%;
}</style>
<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header
  },
  name: "AddItem",
  data() {
    return {
      dialog: false,
      add: {
        kind: null,
        brand: null,
        sit: null,
        location: null,
        rate: null
      }
    };
  }
};
</script>