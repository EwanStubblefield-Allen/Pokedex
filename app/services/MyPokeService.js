import { AppState } from "../AppState.js"
import { Poke } from "../models/Poke.js"
import { Pop } from "../utils/Pop.js"
import { api } from "./AxiosService.js"

class MyPokeService {
  setActivePoke(id) {
    let foundPoke = AppState.myPoke.find(p => p.id == id)
    AppState.activePoke = new Poke(foundPoke)
  }

  async catchPoke() {
    const res = await api.post(`api/pokemon`, AppState.activePoke)
    let newPoke = new Poke(res.data)
    AppState.myPoke.push(newPoke)
    Pop.success(`You have caught a ${AppState.activePoke.name}!`)
  }

  async getMyPoke() {
    const res = await api.get('api/pokemon')
    AppState.myPoke = res.data
    console.log(res.data)
  }

  async deletePoke(id) {
    const res = await api.delete(`api/pokemon/${id}`)
    const foundIndex = AppState.myPoke.findIndex(p => p.id == id)
    if (foundIndex == -1) {
      throw new Error('Unable to find ID')
    }
    AppState.myPoke.splice(foundIndex, 1)
    AppState.activePoke = null
    AppState.emit('myPoke')
  }
}

export const myPokeService = new MyPokeService()