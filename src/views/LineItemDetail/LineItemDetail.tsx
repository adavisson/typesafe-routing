import { Link, useParams } from "@tanstack/react-router";
import React, { FC } from "react";
import { z } from "zod";
import { lineItemsRoute } from "../OrderDetail/OrderDetail";

export const LineItemDetail: FC = () => {
  const { lineItemId, orderId } = useParams();

  return !orderId || !lineItemId ? (
    <>Failed to load</>
  ) : (
    <>
      <Link to="/orders/$orderId/line-items" params={{ orderId }}>
        <h5>Back to line items</h5>
      </Link>
      Line Item {lineItemId}
    </>
  );
};

export const lineItemDetailRoute = lineItemsRoute.createRoute({
  path: "$lineItemId",
  parseParams: ({ lineItemId }) => ({
    lineItemId: z.string().parse(lineItemId),
  }),
  stringifyParams: (params) => params,
  meta: { hasCrumb: true },
});

export const lineItemDetailIndexRoute = lineItemDetailRoute.createRoute({
  path: "/",
  component: LineItemDetail,
});
