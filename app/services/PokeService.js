import { AppState } from "../AppState.js"
import { Poke } from "../models/Poke.js"
import { pokeApi } from "./AxiosService.js"

class PokeService {
  async setActivePoke(index, offset) {
    let poke = AppState.pokemon[index + offset]
    const res = await pokeApi.get(poke.url)
    AppState.activePoke = new Poke(res.data)
  }

  async getPoke() {
    const res = await pokeApi.get('pokemon?limit=100000&offset=0')
    AppState.pokemon = res.data.results
  }
}

export const pokeService = new PokeService()