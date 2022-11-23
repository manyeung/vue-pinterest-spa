<template>
  <div class="root">
    <button type="button" @click="handleBackClick">back</button>
    <div>Image: {{ $route.params.id }}</div>
    <div v-if="photo">
      <h4>{{ photo.alt_description }}</h4>
      <img :src="photo.urls.regular" :alt="photo.alt_description">
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      photo: null
    }
  },
  mounted() {
    this.getPhoto();
  },
  methods: {
    getPhoto() {
      axios.get(
        `https://api.unsplash.com/photos/${this.$route.params.id}`,
        {
          headers: {
            Authorization:
              `Client-ID ${process.env.VUE_APP_ENV_UNSPLASH_ACCESS_KEY}`,
              "Accept-Version": "v1"
          }
        }
      )
      .then(response => {
        this.photo = response.data
      })
    },
    handleBackClick() {
      this.$router.back()
    }
  },
}
</script>

<style scoped>
.root img {
  width: auto;
  height: auto;
  max-width: 100%;
}
</style>