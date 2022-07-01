var PokeService = {
  API: {
    url: '//pokeapi.co/api/v1/',
    get: (url) => {
      return fetch(`PokeService.API.url${url}`)
        .then(response => response.json()
      )
    },
    Pokemon: {
      listAll: () => {
        return PokeService.API.get('pokedex/1')
          .then(response => {
            return response.pokemon
            .map(pokemon => {
              pokemon.number = PokeService.getNumberFromURL(
                pokemon.resource.uri
              )
              return pokemon
            })
            .filter(pokemon => pokemon.number < 1000)
            .sort((a, b) => {
              return a.number > b.number ? 1 : -1
            })
          })
      }
    }
  },
  getNumberFromURL: url => {
    return parse(url.replace(/.*\/(\d+)\/$/, '$1'))
  }
}
