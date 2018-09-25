<template>
  <v-content>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 sm8 md4>
          <h1>{{ user.email }} {{$route.params.id}}</h1>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
    computed: {
        user() {
            return this.$store.getters.findUser(this.$route.params.id);
        }
    }
}
</script>
