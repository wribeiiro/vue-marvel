<template>
  <div id="app" class="md-layout">
    <div class="md-layout-item md-size-33" v-for="comic in comics" :key="comic.id">
      <comic
        :title="comic.title"
        :description="comic.description"
        :image="getImage(comic)"
      >
      </comic>
    </div>
  </div>
</template>

<script>

import MarvelApi from '@/services/MarvelApi'
import Comic from '@/components/Comic'

export default {
  name: 'App',
  components: {
    Comic
  },
  data() {
    return { comics: [] }
  },
  created() {
    MarvelApi.getAllComics(70, comics => {
      this.comics = comics.data.data.results
    })
  },
  methods: {
    getImage: (comic) => {
      if (comic.images.length) 
        return `${comic.images[0].path}/portrait_medium.jpg`

      return `https://image.freepik.com/vetores-gratis/erro-404-nao-encontrado-efeito-de-falha_8024-4.jpg`
    }
  }
}
</script>

<style></style>