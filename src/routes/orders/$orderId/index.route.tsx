import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { OrderDetail } from "../../../views/OrderDetail/OrderDetail";

export const Route = createFileRoute("/orders/$orderId/")({
  component: OrderDetail,
  params: {
    parse: ({ orderId }) => ({
      orderId: z.string().parse(orderId),
    }),
    stringify: ({ orderId }) => ({
      orderId,
    }),
  },
});
