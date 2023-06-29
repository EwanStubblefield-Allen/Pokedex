import { AppState } from "../AppState.js";

export const PokeView = `
<div class="container-fluid">
  <section class="row">
    <div id="activePoke" class="col-8">

    </div>
    <div class="col-3 p-4">
      <ul id="pokemonList" class="py-2">

      </ul>
      <div class="d-flex justify-content-between">
        <button onclick="app.PokeController.setActivePoke(-1)" class="change-button">Previous</button>
        <button onclick="app.PokeController.setActivePoke(1)" class="change-button">Next</button>
      </div>
    </div>
  </section>
</div>`