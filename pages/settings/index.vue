<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>
          <ul class="error-messages">
            <template v-for="(messages, field) in errors">
              <li v-for="(message, index) in messages" :key="index">
                {{ field }} {{ message }}
              </li>
            </template>
          </ul>
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                  v-model="userInfo.image"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  v-model="userInfo.username"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                  v-model="userInfo.bio"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  v-model="userInfo.email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model="userInfo.password"
                />
              </fieldset>
              <button
                @click.prevent="updataSettings"
                class="btn btn-lg btn-primary pull-xs-right"
              >
                Update Settings
              </button>
            </fieldset>
          </form>
          <hr />
          <button class="btn btn-outline-danger" v-if="user" @click="loginOut">
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { updateUser } from "@/api/user";
// 仅在客户端加载
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  name: "SettingsIndex",
  middleware: "authenticated",
  data() {
    return {
      userInfo: {
        bio: "",
        email: "",
        image: "",
        password: "",
        username: "",
      },
      errors: [],
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    // 更新用户信息
    async updataSettings() {

      try {
        const { data } = await updateUser({ user: this.userInfo });
        console.log(1111111,data)
        this.$router.push({
          name:'profile',
          params:{
            username:data.user.username
          }
        })
      } catch (error) {
        console.log(error)
            this.errors = error.response.data.errors;
      }
    },
    // 登出
    loginOut() {
      this.$store.commit("setUser", null);
      Cookie.remove("user");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>