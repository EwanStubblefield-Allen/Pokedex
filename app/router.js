import { MyPokeController } from "./controllers/MyPokeController.js";
import { PokeController } from "./controllers/PokeController.js";
import { MyPokeView } from "./views/MyPokeView.js";
import { PokeView } from "./views/PokeView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [PokeController, MyPokeController],
    view: PokeView
  },
  {
    path: '#/myPoke',
    controller: MyPokeController,
    view: MyPokeView
  },
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */