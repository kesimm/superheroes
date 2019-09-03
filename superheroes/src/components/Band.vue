<template>
<v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="green">
      </v-progress-circular>
    </div>
  </v-container>
<v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4
        v-for="(item, index) in wholeResponse"
        :key="index"
        mb-2>
        <v-card>
          <v-img
            :src="item.strAlbumThumb"
            aspect-ratio="1"
          ></v-img>
<v-card-title primary-title>
            <div>
              <h2>{{item.strAlbum}}</h2>
              <div>Year: {{item.intYearReleased}}</div>
              <!-- <div>Album ID: {{item.idAlbum}}</div> -->
            </div>
          </v-card-title>
<v-card-actions class="justify-center">
           <!--  <v-btn flat
              color="green"
              @click="singleAlbum(item.idAlbum)"
              >View</v-btn> -->
          </v-card-actions>
</v-card>
      </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      wholeResponse: [],
      loading: true
    }
  },
  mounted () {
  axios
    .get('theaudiodb.com/api/v1/json/1/searchalbum.php?s=arctic+monkeys')
    .then(response => {
      this.wholeResponse = response.data.album
      this.loading = false
    })
    .catch(error => {
      console.log(error)
    })
  },
  methods: {
    singleAlbum (idAlbum) {
      this.$router.push('/album/' + idAlbum)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>