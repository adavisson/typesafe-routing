import { Link, useMatch, useParams } from "@tanstack/react-router";
import React from "react";
import { z } from "zod";
import { ordersRoute } from "../routes";

export const OrderDetail = () => {
  const {
    params: { orderId },
  } = useMatch(orderDetailRoute.id);

  console.log({ orderId });

  return (
    <>
      <div style={{ display: "flex" }}>
        <Link to="../">
          <h5 style={{ marginRight: "1rem" }}>Previous Page</h5>
        </Link>
        <Link to="/orders">
          <h5>Back to Orders</h5>
        </Link>
      </div>
      Order Detail: {}
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
  loader: ({ params }) => params,
});
