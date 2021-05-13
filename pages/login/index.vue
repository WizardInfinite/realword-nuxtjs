<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign {{ isLogin ? "In" : "Up" }}</h1>
          <p class="text-xs-center">
            <nuxt-link v-if="isLogin" to="/register"
              >Need an account?</nuxt-link
            >
            <!-- <nuxt-link v-if="isLogin">Have an account?</nuxt-link> -->
            <nuxt-link v-else to="/login">Have an account?</nuxt-link>
            <!-- <nuxt-link v-else>Need an account?</nuxt-link> -->
          </p>
          <ul class="error-messages">
            <template v-for="(messages, field) in errors">
              <li v-for="(message, index) in messages" :key="index">
                {{ field }} {{ message }}
              </li>
            </template>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset class="form-group" v-if="!isLogin">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                required
                v-model="user.username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="email"
                placeholder="Email"
                v-model="user.email"
                required
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                v-model="user.password"
                required
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Sign {{ isLogin ? "In" : "Up" }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from "@/api/user";
// 仅在客户端加载
const Cookie = process.client?require('js-cookie'):undefined
export default {
  name: "LoginIndex",
    middleware: 'notAuthenticated',
  data() {
    return {
      user: {
        username: "",
        email: "",
        password: "",
      },
      errors: {
        // email:['aa','bb'],
        // password:['cc','dd']
      },
    };
  },
  computed: {
    isLogin() {
      return this.$route.name === "login";
    },
  },
  methods: {
    async onSubmit() {
      try {
        const { data } = this.isLogin
          ? await login({
              user: this.user,
            })
          : await register({
              user: this.user,
            });
        console.log(data);
        this.$store.commit('setUser',data.user)
        Cookie.set('user',data.user)
        this.$router.push("/");
      } catch (error) {
        console.log(error);
        this.errors = error.response.data.errors;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>