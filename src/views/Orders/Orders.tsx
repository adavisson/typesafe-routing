import { Link } from "@tanstack/react-router";
import React from "react";
import { ordersRoute } from "../routes";

export const Orders = () => {
  return (
    <>
      <Link to="/">
        <h5>Back Home</h5>
      </Link>
      <h3>Orders</h3>
      <ul>
        <li>
          <Link to="/orders/$orderId" params={{ orderId: 1 }}>
            Order 1
          </Link>
        </li>
        <li>
          <Link to="/orders/$orderId" params={{ orderId: 2 }}>
            Order 2
          </Link>
        </li>
      </ul>
    </>
  );
};

export const ordersIndexRoute = ordersRoute.createRoute({
  path: "/",
  component: Orders,
});
