import { createReactRouter } from "@tanstack/react-router";
import { indexRoute } from "./views/Home/Home";
import { orderDetailRoute } from "./views/OrderDetail/OrderDetail";
import { ordersIndexRoute } from "./views/Orders/Orders";
import { pokemonIndexRoute } from "./views/Pokemon/Pokemon";
import { pokemonDetailRoute } from "./views/PokemonDetail/PokemonDetail";
import { ordersRoute, pokemonRoute } from "./views/routes";
import { rootRoute } from "./views/routes";

const routeConfig = rootRoute.addChildren([
  indexRoute,
  ordersRoute.addChildren([ordersIndexRoute, orderDetailRoute]),
  pokemonRoute.addChildren([pokemonIndexRoute, pokemonDetailRoute]),
]);

export const router = createReactRouter({ routeConfig });

declare module "@tanstack/react-router" {
  interface RegisterRouter {
    router: typeof router;
  }
}
