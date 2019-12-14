<template>
  <v-container class="mt-12">
    <v-snackbar
      :color="color"
      v-model="snackbar"
      :top="top"
      :right="right"
      :bottom="bottom"
      :left="left"
      :timeout="5000"
      :multi-line="true"
    >
      <span :class="snackText">{{ text }}</span>
      <v-btn right :color="snackBtn" icon @click="snackbar = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <v-row>
      <v-col cols="12" class="my-4">
        <v-card color="grey lighten-4" flat height="auto">
          <v-toolbar color="grey darken-4" dark>
            <v-toolbar-title>New Record</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

          <v-card-text>
            <v-layout row wrap>
              <v-flex class="px-5 mt-8" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <input type="file" @change="uploadPhoto" />
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-n3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-progress-circular
                    :rotate="-90"
                    :size="80"
                    :width="8"
                    :value="value"
                    color="indigo"
                  >
                    <span>{{ value }} %</span>
                  </v-progress-circular>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-text-field
                    v-model="report.parentsName"
                    label="Parents Name"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-text-field
                    v-model="report.phone"
                    label="Parents Phone"
                  ></v-text-field>
                </v-layout>
              </v-flex>
              
              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-text-field
                    v-model="report.email"
                    label="Parents Email"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-text-field
                    v-model="report.address"
                    label="Parents Address"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-text-field
                    v-model="report.ocupation"
                    label="Parents Ocupation"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-select
                    v-model="report.states"
                    :items="states"
                    label="State of Origin"
                  ></v-select>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-text-field v-model="report.lga" label="LGA"></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-text-field
                    v-model="report.town"
                    label="Town"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-text-field
                    v-model="report.childName"
                    label="Childs Name"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-select
                    v-model="report.sex"
                    :items="sex"
                    label="Sex"
                  ></v-select>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-menu
                    ref="menu1"
                    v-model="menu1"
                    :close-on-content-click="false"
                    :return-value.sync="report.date1"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="report.date1"
                        label="Date of Birth"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="report.date1" no-title scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="menu1 = false"
                        >Cancel</v-btn
                      >
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu1.save(report.date1)"
                        >OK</v-btn
                      >
                    </v-date-picker>
                  </v-menu>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-text-field v-model="report.doctor" label="NAme of Doctor"></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-3" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-text-field
                    v-model="report.hospital"
                    label="Name of Hospital"
                  ></v-text-field>
                </v-layout>
              </v-flex>

              <v-flex class="px-5 mt-8" xs12 sm6 md6 lg6 xl6>
                <v-layout justify-center>
                  <v-card-actions>
                    <v-btn @click="cancel" small depressed>
                      <v-icon left color="red">mdi-cancel</v-icon>
                      <span right>Cancel</span>
                    </v-btn>
                    <v-btn :disabled="disable" :loading="loading" @click="save" small depressed>
                      <v-icon left color="indigo darken-4"
                        >mdi-content-save</v-icon
                      >
                      <span right>Save</span>
                    </v-btn>
                  </v-card-actions>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { fb, db } from "../../firebaseConfig";
export default {
  data: () => ({
    cases: [],
    menu1: false,
    states: [
      "Abia",
      "Adamawa",
      "Akwa Ibom",
      "Anambra",
      "Bauchi",
      "Bayelsa",
      "Benue",
      "Borno",
      "Cross River",
      "Delta",
      "Ebonyi",
      "Enugu",
      "Edo",
      "Ekiti",
      "Gombe",
      "Imo",
      "Jigawa",
      "Kaduna",
      "Kano",
      "Katsina",
      "Kebbi",
      "Kogi",
      "Kwara",
      "Lagos",
      "Nasarawa",
      "Niger",
      "Ogun",
      "Ondo",
      "Osun",
      "Oyo",
      "Plateau",
      "Rivers",
      "Sokoto",
      "Taraba",
      "Yobe",
      "Zamfara"
    ],
    sex: ["Male", "Female"],
    report: {
      date1: new Date().toISOString().substr(0, 7),
      images: [],
      parentsName: null,
      phone: null,
      email: null,
      address: null,
      ocupation: null,
      states: null,
      lga: null,
      town: null,
      childName: null,
      sex: null,
      doctor:  null,
      hospital: null
    },
    rules: [
      value =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!"
    ],
    loading: false,
    value: 0,
    snackbar: false,
    text: "",
    color: null,
    snackText: null,
    snackBtn: null,
    top: null,
    right: null,
    bottom: null,
    left: null,
    disable: true
  }),
  firestore() {
    return {
      births: db.collection("births")
    };
  },
  methods: {
    cancel() {
      this.images = [];
      this.parentsName = null;
      this.phone = null;
      this.email = null;
      this.address = null;
      this.ocupation = null;
      this.lga = null;
      this.town = null;
      this.childName = null;
      this.doctor = null;
      this.hospital = null;
      this.sex = null;
      this.states = null;
    },
    uploadPhoto(event) {
      let file = event.target.files[0];
      var storageRef = fb.storage().ref("photos/" + file.name);
      let uploadTask = storageRef.put(file);
      uploadTask.on(
        "state_changed",
        snapshot => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          const math = (progress * 100) / 100;
          const calc = Math.round(math);
          console.log("Upload is " + calc + "% done");
          this.value = calc;
          if (calc == 100) {
            this.top = true;
            this.right = true;
            this.bottom = false;
            this.left = false;
            this.snackbar = true;
            this.text = "Image Upload Successfull";
            this.color = "white";
            this.snackText = "green--text";
            this.snackBtn = "green";
            this.disable = false;
          }
        },
        error => {
          const errorMessage = error.message;
          this.top = true;
          this.right = true;
          this.bottom = false;
          this.left = false;
          this.snackbar = true;
          this.text = errorMessage;
          this.color = "red darken-4";
          this.snackText = "white--text";
          this.snackBtn = "white";
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then(getDownloadURL => {
            this.report.images.push(getDownloadURL);
            console.log("file available at", getDownloadURL);
          });
        }
      );
    },
    save() {
      this.loading = true;
      this.$firestore.births
        .add(this.report)
        .then(docRef => {
          console.log(docRef);
          this.top = true;
          this.right = true;
          this.bottom = false;
          this.left = false;
          this.snackbar = true;
          this.text = "Case Successfilly Filed";
          this.color = "white";
          this.snackText = "indigo--text";
          this.snackBtn = "indigo";
          this.loading = false;
          this.images = [];
          this.parentsName = null;
          this.phone = null;
          this.email = null;
          this.address = null;
          this.ocupation = null;
          this.lga = null;
          this.town = null;
          this.childName = null;
          this.doctor = null;
          this.hospital = null;
          this.sex = null;
          this.states = null;
        })
        .catch(error => {
          const errorMessage = error.message;
          console.log(error);
          this.top = true;
          this.right = true;
          this.bottom = false;
          this.left = false;
          this.snackbar = true;
          this.text = errorMessage;
          this.color = "red darken-4";
          this.snackText = "white--text";
          this.snackBtn = "white";
          this.loading = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
