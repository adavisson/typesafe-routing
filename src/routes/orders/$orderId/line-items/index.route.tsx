import { createFileRoute } from "@tanstack/react-router";
import { LineItems } from "../../../../views/LineItems/LineItems";

export const Route = createFileRoute("/orders/$orderId/line-items/")({
  component: LineItems,
});
