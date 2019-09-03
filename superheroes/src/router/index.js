import Vue from 'vue'
import VueRouter from 'vue-router'
import Band from '@/components/Band'
import Album from '@/components/Album'
import Search from '@/components/Search'

Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    { path: '/vue-demo',
    name: 'Band',
    component: Band
    },
    { path: '/album/:idAlbum',
    name: 'Album',
    props: true,
    component: Album
      },
    { path: '/search/:name',
    name: 'Search',
    props: true,
    component: Search
      }
  ],
  mode: "history"
})
