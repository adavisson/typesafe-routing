import { createReactRouter } from "@tanstack/react-router";
import { indexRoute } from "./views/Home/Home";
import { orderDetailRoute } from "./views/OrderDetail/OrderDetail";
import { ordersIndexRoute } from "./views/Orders/Orders";
import { ordersRoute } from "./views/routes";
import { rootRoute } from "./views/routes";

const routeConfig = rootRoute.addChildren([
  indexRoute,
  ordersRoute.addChildren([ordersIndexRoute, orderDetailRoute]),
]);

export const router = createReactRouter({ routeConfig });

declare module "@tanstack/react-router" {
  interface RegisterRouter {
    router: typeof router;
  }
}
