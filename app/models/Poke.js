export class Poke {
  constructor(data) {
    this.name = data.name
    this.img = data.img || data.sprites.back_default
    this.weight = data.weight
    this.height = data.height
    this.types = data.types
  }

  get PokeTemplate() {
    return `
    <section class="row justify-content-center">
      <div class="col-8 text-center">
        <div class="mt-3 banner">
          <p class="fs-5 mx-5 p-3 text">${this.name}</p>
        </div>
        <img src="${this.img}"
          alt="name" class="poke-img">
        <div class="banner">
          <div class="mx-3 p-3 text">
            <div class="d-flex justify-content-between">
              <p>Height: ${this.height}"</p>
              <p>Weight: ${this.weight} lbs</p>
            </div>
            <p>Types: ${this.TypeTemplate}</p>
            <div class="text-end">
              <button onclick="app.MyPokeController.catchPoke()">Catch</button>
            </div>
          </div>
        </div>
      </div>
    </section>`
  }

  get TypeTemplate() {
    let template = ''
    this.types.forEach(t => template += (t.type.name + ' '))
    return template
  }
}