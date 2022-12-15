import { Link } from "@tanstack/react-router";
import React from "react";
import logo from "../../logo.svg";
import { rootRoute } from "../routes";

export const Home = () => {
  return (
    <div>
      <h1>Typesafe Routing Demo</h1>
      <Link to="/orders">Orders</Link>
      <ul>
        <li>
          <Link to="/orders/$orderId" params={{ orderId: 1 }}>
            Order 1
          </Link>
        </li>
      </ul>
    </div>
  );
};

export const indexRoute = rootRoute.createRoute({
  path: "/",
  component: Home,
});
