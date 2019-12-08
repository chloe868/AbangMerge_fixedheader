<template>
  <v-app>
    <Header /> 
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>
