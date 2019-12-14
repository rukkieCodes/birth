<template>
  <nav>
    <v-toolbar flat color="grey darken-4" class="mt-n3 toolbar">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="white--text"
      ></v-app-bar-nav-icon>
      <v-toolbar-title style="display:flex;">
        <p class="my-2 mx-2 white--text">ASBC</p>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app class="grey darken-4">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="white--text caption">{{
            email
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router
          :to="item.route"
          link
        >
          <v-list-item-icon>
            <v-icon class="white--text font-weight-light">{{
              item.icon
            }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text font-weight-light">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn class="white--text" color="red darken-4" @click="logout" block>
            <v-icon left>mdi-power</v-icon>
            <span right>Logout</span>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { fb } from "../../firebaseConfig";
export default {
  data: () => ({
    drawer: null,
    items: [
      {
        title: "File Report",
        icon: "mdi-file-chart",
        route: "/dashboard/file"
      },
      {
        title: "Birth Cases",
        icon: "mdi-briefcase-account",
        route: "/dashboard/cases"
      },
      {
        title: "Home",
        icon: "mdi-home",
        route: "/"
      }
    ],
    email: null
  }),
  methods: {
    logout() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    var user = fb.auth().currentUser;
    this.email = user.email;
  }
};
</script>

<style lang="scss" scoped>
.toolbar {
  position: fixed;
  z-index: 1;
  width: 100vw;
}
</style>
