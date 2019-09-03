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

  <v-container v-else>
    <v-layout wrap>
      <v-flex xs12 mr-1 ml-1>
        <v-card>
          <v-img
            :src="singleAlbum.strAlbumThumb"
            aspect-ratio="2"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h2 class="headline mb-0">{{singleAlbum.strAlbum}}-{{singleAlbum.intYearReleased}}</h2>
              <p>{{ singleAlbum.strDescriptionEN}} </p>
              <h3>Label:</h3>{{singleAlbum.strLabel}}
               <h4>Average Rating:</h4> {{singleAlbum.intScore}}
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="green" @click="back">back</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>    
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  props: ['idAlbum'],
  data () {
    return {
      singleAlbum: '',
      dialog: false,
      loading: true
    }
  },
  methods:{
    back () {
      this.$router.push('/')
  },
  fetchSingleAlbum (value) {
    const ur = 'theaudiodb.com/api/v1/json/1/album.php?m=' + value
    axios
      .get(ur)
      .then(response => {
        this.loading = false
        this.singleAlbum = response.data.album
      })
  }
},
  mounted () {
    this.fetchSingleAlbum(this.idAlbum)
  },
   watch: {
    idAlbum (value) {
    this.fetchSingleAlbum(value)
    }
  }
}
</script>
<style>
</style>