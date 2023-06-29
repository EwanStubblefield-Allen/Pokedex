import { AppState } from "../AppState.js"
import { Poke } from "../models/Poke.js"
import { api } from "./AxiosService.js"

class MyPokeService {
  async catchPoke() {
    const res = await api.post(`api/pokemon`, AppState.activePoke)
    let newPoke = new Poke(res.data)
    AppState.myPoke.push(newPoke)
    console.log(AppState.myPoke)
  }
}

export const myPokeService = new MyPokeService()