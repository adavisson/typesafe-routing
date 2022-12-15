import { Link, useParams } from "@tanstack/react-router";
import React, { FC } from "react";
import { z } from "zod";
import { ordersRoute } from "../routes";

export const OrderDetail: FC = () => {
  const { orderId } = useParams();

  return (
    <>
      <div style={{ display: "flex" }}>
        <Link to="/orders">
          <h5>Back to Orders</h5>
        </Link>
      </div>
      Order: {orderId}
    </>
  );
};

export const orderDetailRoute = ordersRoute.createRoute({
  path: "$orderId",
  component: OrderDetail,
  parseParams: ({ orderId }) => ({
    orderId: z.number().int().parse(Number(orderId)),
  }),
  stringifyParams: ({ orderId }) => ({ orderId: `${orderId}` }),
  meta: {
    hasCrumb: true,
  },
});
