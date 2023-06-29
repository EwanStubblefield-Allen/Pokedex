import { AppState } from "../AppState.js";
import { pokeService } from "../services/PokeService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawPokeList() {
  const pokemon = AppState.pokemon
  let template = ''

  pokemon.forEach(p => template += `<li onclick="app.PokeController.setActivePoke(0, '${p.name}')" class="py-1 selectable">${p.name}</li>`)
  setHTML('pokemonList', template)
}

function _drawActivePoke() {
  let pokemon = AppState.activePoke
  setHTML('activePoke', pokemon ? pokemon.PokeTemplate : '')
}

export class PokeController {
  constructor() {
    console.log('Poke Controller Loaded')

    this.getPoke()
    AppState.on('pokemon', _drawPokeList)
    AppState.on('activePoke', _drawActivePoke)
  }

  async setActivePoke(offset, name = AppState.activePoke.name) {
    try {
      let foundPoke = AppState.pokemon.findIndex(p => p.name == name)
      await pokeService.setActivePoke(foundPoke, offset)
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }

  async getPoke() {
    try {
      await pokeService.getPoke()
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }
}