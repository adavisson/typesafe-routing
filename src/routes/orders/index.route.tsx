import { createFileRoute } from "@tanstack/react-router";
import { Orders } from "../../views/Orders/Orders";

export const Route = createFileRoute("/orders/")({
  component: Orders,
});
