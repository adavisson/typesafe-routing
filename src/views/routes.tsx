import { createRouteConfig } from "@tanstack/react-router";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const rootRoute = createRouteConfig();

export const ordersRoute = rootRoute.createRoute({
  path: "orders",
  meta: { hasCrumb: true },
});
export const pokemonRoute = rootRoute.createRoute({
  path: "pokemon",
  meta: { hasCrumb: true },
});
export const crazySearchParamsRoute = rootRoute.createRoute({
  path: "crazySearchParams",
});

export const layoutRoute = rootRoute.createRoute({
  id: "layout",
  component: Breadcrumbs,
});
