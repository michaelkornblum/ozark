<template>
  <keep-alive>
    <component :is="activeComponent"></component>
  </keep-alive>
</template>


<script>
import UserLogin from "@/components/UserLogin.vue";
import UserRegister from "@/components/UserRegister.vue";
export default {
  components: {
    UserLogin,
    UserRegister,
  },
  computed: {
    activeComponent() {
      return this.$store.getters.firstUser ? "UserRegister" : "UserLogin"
    },
  }
};
</script>
