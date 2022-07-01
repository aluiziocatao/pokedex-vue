const app = new Vue({
  el: '#app',
  data: {
    pokemonList: [],
    nameFilter: ''
  },
  mounted: function () {
    PokeService.API.Pokemon.listAll().then(responseList => {
      this.pokemonList.filter(pokemon => pokemon.name.includes(nameFilter))
    })
  },
  computed: {
    pokeList: function () {
      let nameFilter = this.nameFilter.toLowerCase()
      return this.pokemonList.filter(pokemon =>
        pokemon.name.includes(nameFilter)
      )
    }
  }
})
