import { AppState } from "../AppState.js"
import { myPokeService } from "../services/MyPokeService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawMyList() {
  let template = ''
  AppState.myPoke.forEach(p => {
    template += `<li onclick="app.MyPokeController.setActivePoke('${p.id}')" class="py-1 selectable">${p.name}</li>`
  })
  setHTML('myPokemonList', template || 'No Caught Pokemon')
}

function _drawActivePoke() {
  let pokemon = AppState.activePoke
  setHTML('activePoke', pokemon ? pokemon.PokeTemplate : '')
}

export class MyPokeController {
  constructor() {
    console.log('My Poke Controller Loaded')
    if (document.getElementById('myPokemonList')) {
      _drawMyList()
      AppState.on('myPoke', _drawMyList)
      AppState.on('activePoke', _drawActivePoke)
    }

    AppState.on('account', this.getMyPoke)
  }

  setActivePoke(id) {
    myPokeService.setActivePoke(id)
  }

  async catchPoke() {
    try {
      await myPokeService.catchPoke()
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }

  async getMyPoke() {
    try {
      await myPokeService.getMyPoke()
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }

  async deletePoke(id) {
    try {
      let isSure = await Pop.confirm(`Are you sure you want to release ${AppState.activePoke.name}`)
      if (!isSure) {
        return
      }
      await myPokeService.deletePoke(id)
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
}