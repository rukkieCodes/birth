<template>
  <v-container class="cases mt-12">
    <v-row>
      <v-col cols="12" class="my-4">
        <v-card color="grey lighten-4" flat height="auto">
          <v-toolbar dense flat color="grey darken-4" dark>
            <v-toolbar-title>Birth cases</v-toolbar-title>
            <v-spacer></v-spacer>

            <v-text-field
              label="Search..."
              background-color="grey darken-4"
              class="mt-7"
              v-model="search"
              solo
              flat
              dense
            ></v-text-field>
          </v-toolbar>

          <v-card-text>
            <v-layout justify-center row wrap>
              <v-expansion-panels>
                <v-expansion-panel v-for="file in filterBirths" :key="file.id">
                  <v-expansion-panel-header class="ma-0 mt-n2 px-5 py-2 pa-0">
                    <v-layout row wrap>
                      <v-flex
                        v-for="image in file.images"
                        :key="image.id"
                        xs1
                        sm1
                        md1
                        lg1
                        xl1
                      >
                        <v-avatar class="mt-2" tile>
                          <img :src="image" />
                        </v-avatar>
                      </v-flex>

                      <v-flex class="px-2" xs10 sm10 md10 lg10 xl10>
                        <p class="ml-7 mt-5 body-1">{{ file.parentsName }}</p>
                      </v-flex>
                    </v-layout>
                    <!-- <v-layout row wrap>
                      <v-flex class="px-2" xs10 sm12 md12 lg12 xl12>
                        <p class="ml-5 mt-5 body-1">{{ file.parentsName }}</p>
                      </v-flex>
                    </v-layout> -->
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-card class="mx-auto" max-width="100vw" flat tile>
                      <v-list-item-content>
                        <v-list-item-subtitle>
                          <v-layout row wrap justify-center>
                            <v-flex
                              v-for="image in file.images" :key="image.id"
                            >
                              <img class="ml-12" width="50%" height="auto" :src="image"/>
                            </v-flex>
                          </v-layout>
                        </v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item two-line>
                        <v-list-item-content>
                          <v-list-item-title>Name of Parent</v-list-item-title>
                          <v-list-item-subtitle>{{
                            file.parentsName
                          }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item two-line>
                        <v-list-item-content>
                          <v-list-item-title>Parent's Contact</v-list-item-title>
                          <v-list-item-subtitle>{{
                            file.phone
                          }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item two-line>
                        <v-list-item-content>
                          <v-list-item-title>Parent's Email</v-list-item-title>
                          <v-list-item-subtitle>{{
                            file.email
                          }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item two-line>
                        <v-list-item-content>
                          <v-list-item-title>Parent's Address</v-list-item-title>
                          <v-list-item-subtitle>{{
                            file.address
                          }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item two-line>
                        <v-list-item-content>
                          <v-list-item-title>Parent's Ocupation</v-list-item-title>
                          <v-list-item-subtitle>{{
                            file.ocupation
                          }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item two-line>
                        <v-list-item-content>
                          <v-list-item-title>Parent's Origin</v-list-item-title>
                          <v-list-item-subtitle>{{
                            file.states
                          }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item two-line>
                        <v-list-item-content>
                          <v-list-item-title>Parent's Lovcal Government</v-list-item-title>
                          <v-list-item-subtitle>{{
                            file.lga
                          }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item two-line>
                        <v-list-item-content>
                          <v-list-item-title>Parent's Town</v-list-item-title>
                          <v-list-item-subtitle>{{
                            file.town
                          }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item two-line>
                        <v-list-item-content>
                          <v-list-item-title
                            >Child's Name</v-list-item-title
                          >
                          <v-list-item-subtitle>{{
                            file.childName
                          }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item two-line>
                        <v-list-item-content>
                          <v-list-item-title>Child's Gender</v-list-item-title>
                          <v-list-item-subtitle>{{
                            file.sex
                          }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item two-line>
                        <v-list-item-content>
                          <v-list-item-title>State of Origin</v-list-item-title>
                          <v-list-item-subtitle>{{
                            file.states
                          }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item two-line>
                        <v-list-item-content>
                          <v-list-item-title
                            >Name of Delivery Doctor</v-list-item-title
                          >
                          <v-list-item-subtitle>{{
                            file.doctor
                          }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>

                      <v-list-item two-line>
                        <v-list-item-content>
                          <v-list-item-title>Place of Birth</v-list-item-title>
                          <v-list-item-subtitle>{{
                            file.hospital
                          }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from "../../firebaseConfig";
export default {
  name: "cases",
  data: () => ({
    births: [],
    search: ""
  }),

  firestore() {
    return {
      births: db.collection("births").orderBy("childName")
    };
  },

  computed:{
    filterBirths(){
      return this.births.filter((childName) => {
        return childName.childName.match(this.search.toUpperCase());
      })
    }
  }
};
</script>
