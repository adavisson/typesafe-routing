import { Link, useParams } from "@tanstack/react-router";
import React, { FC } from "react";
import { z } from "zod";
import { ordersRoute } from "../routes";

export const OrderDetail: FC = () => {
  const { orderId } = useParams();

  return !orderId ? (
    <>Cannot find Order</>
  ) : (
    <>
      <div style={{ display: "flex" }}>
        <Link to="/orders">
          <h5>Back to Orders</h5>
        </Link>
      </div>
      Order: {orderId}
      <p>
        <Link to="/orders/$orderId/line-items" params={{ orderId }}>
          View Line Items
        </Link>
      </p>
    </>
  );
};

export const orderDetailRoute = ordersRoute.createRoute({
  path: "$orderId",
  parseParams: ({ orderId }) => ({
    orderId: z.number().int().parse(Number(orderId)),
  }),
  stringifyParams: ({ orderId }) => ({ orderId: `${orderId}` }),
  meta: { hasCrumb: true },
});

export const orderDetailIndexRoute = orderDetailRoute.createRoute({
  path: "/",
  component: OrderDetail,
});

export const lineItemsRoute = orderDetailRoute.createRoute({
  path: "line-items",
  meta: { hasCrumb: true },
});
