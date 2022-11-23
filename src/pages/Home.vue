<template>
  <div class="container">
    <stack-grid></stack-grid>
    <div class="button-wrapper">
      <button class="btn" @click="searchUnsplash('Autumn')">Autumn</button>
      <button class="btn" @click="searchUnsplash('cliff')">Cliff</button>
      <button class="btn" @click="searchUnsplash('ocean')">Ocean</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import StackGrid from '../components/StackGrid.vue'
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    StackGrid,
  },
  computed: {
    ...mapState({
      items: state => state.stackGrid.items,
      page: state => state.stackGrid.page,
    })
  },
  methods: {
    ...mapMutations({
      setItems: 'stackGrid/setItems',
      setPage: 'stackGrid/setPage',
    }),
    searchUnsplash(topic) {
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=${topic}&per_page=20&page=${this.page}`,
          {
            headers: {
              Authorization:
                `Client-ID ${process.env.VUE_APP_ENV_UNSPLASH_ACCESS_KEY}`,
                "Accept-Version": "v1"
            }
          }
        )
        .then(response => {
          const items = this.items.slice(0)
          const newImages = response.data.results
          this.setItems([].concat(items, newImages))
          this.setPage(this.page + 2)
        })
    },
  }
}
</script>

<style>
.container {
  width: 800px;
  margin: 0 auto;
}
@media only screen and (min-width: 1280px) {
  .container {
    width: 1200px;
    margin: 0 auto;
  }
}
.button-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}
.btn {
  font-size: 18px;
  background-color: #42b983;
  color: white;
  padding: 10px 20px;
}
.btn:not(:last-child) {
  margin-right: 10px;
}
img {
  width: 100%;
  border-radius: 12px;
}
</style>