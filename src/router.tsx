import { createReactRouter } from "@tanstack/react-router";
import { crazySearchParamIndexRoute } from "./views/CrazySearchParams/CrazySearchParams";
import { indexRoute } from "./views/Home/Home";
import {
  lineItemsRoute,
  orderDetailIndexRoute,
  orderDetailRoute,
} from "./views/OrderDetail/OrderDetail";
import { lineItemsIndexRoute } from "./views/LineItems/LineItems";
import { ordersIndexRoute } from "./views/Orders/Orders";
import { pokemonIndexRoute } from "./views/Pokemon/Pokemon";
import { pokemonDetailRoute } from "./views/PokemonDetail/PokemonDetail";
import {
  crazySearchParamsRoute,
  layoutRoute,
  ordersRoute,
  pokemonRoute,
} from "./views/routes";
import { rootRoute } from "./views/routes";
import {
  lineItemDetailIndexRoute,
  lineItemDetailRoute,
} from "./views/LineItemDetail/LineItemDetail";

const routeConfig = rootRoute.addChildren([
  layoutRoute.addChildren([
    indexRoute,
    ordersRoute.addChildren([
      ordersIndexRoute,
      orderDetailRoute.addChildren([
        orderDetailIndexRoute,
        lineItemsRoute.addChildren([
          lineItemsIndexRoute,
          lineItemDetailRoute.addChildren([lineItemDetailIndexRoute]),
        ]),
      ]),
    ]),
    pokemonRoute.addChildren([pokemonIndexRoute, pokemonDetailRoute]),
    crazySearchParamsRoute.addChildren([crazySearchParamIndexRoute]),
  ]),
]);

export const router = createReactRouter({
  routeConfig,
  defaultPreload: "intent",
  defaultPreloadMaxAge: 2000,
});

declare module "@tanstack/react-router" {
  interface RegisterRouter {
    router: typeof router;
  }
  interface RouteMeta {
    hasCrumb?: boolean;
  }
}
