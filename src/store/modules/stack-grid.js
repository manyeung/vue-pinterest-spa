const state = () => ({
    items: [],
    page: 1,
    scrollTop: 0,
})

const mutations = {
    setItems (state, items) {
        state.items = items
    },
    setPage (state, page) {
        state.page = page
    },
    setScrollTop (state, scrollTop) {
        state.scrollTop = scrollTop
    }
}

export default {
    namespaced: true,
    state,
    mutations,
}