import { myPokeService } from "../services/MyPokeService.js"

export class MyPokeController {
  constructor() {
    console.log('My Poke Controller Loaded')
  }

  async catchPoke() {
    try {
      await myPokeService.catchPoke()
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
}