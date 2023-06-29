import { AppState } from "../AppState.js"
import { Poke } from "../models/Poke.js"
import { pokeApi } from "./AxiosService.js"

class PokeService {
  async setActivePoke(poke) {
    const res = await pokeApi.get(poke.url)
    AppState.activePoke = new Poke(res.data)
    console.log(AppState.activePoke)
  }

  async getPoke() {
    const res = await pokeApi.get('pokemon?limit=100000&offset=0')
    AppState.pokemon = res.data.results
    console.log(AppState.pokemon)
  }
}

export const pokeService = new PokeService()