<template>
  <stack
    :column-min-width="200"
    :gutter-width="15"
    :gutter-height="15"
    monitor-images-loaded
  >
    <stack-item
      v-for="image in items"
      :key="image.id"
      style="transition: opacity 300ms"
    >
      <div>
        <router-link :to="`/image/${image.id}`">
          <img :src="image.urls.thumb" 
            :alt="image.alt_description" 
            :style="{'aspect-ratio': image.width / image.height}"
          />
        </router-link>
        <p>{{image.alt_description}}</p>
      </div>
    </stack-item>
  </stack>
</template>

<script>
import { Stack, StackItem } from 'vue-stack-grid';
import { mapState, mapMutations } from 'vuex';

export default {
  components: {
    Stack,
    StackItem,
  },
  computed: {
    ...mapState({
      items: state => state.stackGrid.items,
      scrollTop: state => state.stackGrid.scrollTop,
    })
  },
  methods: {
    ...mapMutations({
      setScrollTop: 'stackGrid/setScrollTop',
    }),
    handleDocumentScroll() {
      this.setScrollTop(document.documentElement.scrollTop || document.body.scrollTop)
    },
  },
  mounted() {
    this.$nextTick(() => {
      document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop
    })
    document.addEventListener('scroll', this.handleDocumentScroll)
  },
  destroyed() {
    document.removeEventListener('scroll', this.handleDocumentScroll)
  }
}
</script>
