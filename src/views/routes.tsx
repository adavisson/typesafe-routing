import { createRouteConfig } from "@tanstack/react-router";

export const rootRoute = createRouteConfig();

export const ordersRoute = rootRoute.createRoute({ path: "orders" });
