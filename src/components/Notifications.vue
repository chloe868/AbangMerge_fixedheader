<template>
  <div>
    <Header />
    <v-container fluid>
      <v-data-table :headers="headers" :items="vehicle"></v-data-table>
    </v-container>
  </div>
</template>
<script>
import Header from "..//components/Header.vue";
export default {
  components: {
    Header
  },
  data: () => ({
    drawer: true,
    vehicle: [],
    headers: [
      {
        text: "Vehicle",
        align: "left",
        sortable: false,
        value: "name"
      },
      { text: "Transportation", sortable: false },
      { text: "Name of the Vehicle ", sortable: false },
      { text: "Sitting Capacity ", sortable: false },
      { text: "Model ", sortable: false },
      { text: "Location", sortable: false }
    ]
  }),
  methods: {
    dashboard() {
      this.$router.push("/");
    },
    notify() {
      this.$router.push("/notifications");
    },
    profile() {
      this.$router.push("/profile");
    },
    addVehicle() {
      var vehicle = [];
      var addVehicle = "Vehicle";
      this.axios
        .post("http://localhost:8000/retrieveVehicle/" + event)
        .then(response => {
          console.log(response);
          var dataT = response.data;
          // this.org = dataT
          var counter = 0;
          for (counter; counter < dataT.length; counter++) {
            vehicle.push({
              //change the arrangement according sa imong schema...
              name: dataT[counter].name,
              address: dataT[counter].address,
              contact: dataT[counter].contact,
              event: dataT[counter].event
            });
          }
          // console.log(org);
          this.vehicle = vehicle;
        })
        .catch(error => {
          console.log(error);
        });
      return vehicle;
    }
  },
  mounted() {
    this.addVehicle();
  }
};
</script>
