<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Registration Form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field 
                    prepend-icon="email" 
                    name="email" 
                    label="Email" 
                    type="email" 
                    v-model="user.email"
                    :rules="[
                        rules.required,
                        rules.email
                    ]">
                </v-text-field>
                <v-text-field 
                    id="password" 
                    prepend-icon="lock" 
                    name="password" 
                    label="Password" 
                    type="password"
                    v-model="user.password"
                    :rules="[
                        rules.required
                    ]">
                </v-text-field>
                <v-text-field 
                    id="confirm-password" 
                    prepend-icon="lock" 
                    name="confirmPassword" 
                    label="Confirm Password" 
                    type="password"
                    :rules="[
                        rules.required,
                        rules.mustMatch
                    ]">
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn 
                color="primary" 
                @click="register">
                Register
            </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
    data() {
        return {
            user: {},
            rules: {
                required: value => !!value || 'required',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || 'invalid email';
                },
                mustMatch: value => value === this.user.password || 'passwords must match',
            }
        };
    },
    computed: {
        isAdmin() {
            return this.$store.getters.firstUser;
        },
        userId() {
            return this.$store.getters.users;
        },
    },
    methods: {
        register() {
            this.$store.dispatch('addUser');
            this.user.id = this.userId;
            this.user.isAdmin = this.isAdmin;
            this.$store.dispatch('registerUser', this.user);
            this.$router.push('/user/' + this.user.id);
        }
    }
}
</script>
