import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { LineItemDetail } from "../../../../../views/LineItemDetail/LineItemDetail";

export const Route = createFileRoute("/orders/$orderId/line-items/$lineItemId/")(
  {
    component: LineItemDetail,
    params: {
      parse: ({ lineItemId, orderId }) => ({
        lineItemId: z.string().parse(lineItemId),
        orderId: z.string().parse(orderId),
      }),
      stringify: ({ lineItemId, orderId }) => ({
        lineItemId,
        orderId,
      }),
    },
  }
);
