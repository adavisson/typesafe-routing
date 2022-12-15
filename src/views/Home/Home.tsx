import { Link } from "@tanstack/react-router";
import React from "react";
import { rootRoute } from "../routes";

export const Home = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Typesafe Routing Demo</h1>
      <p>
        <Link to="/orders">Orders</Link>
      </p>
      <p>
        <Link to="/pokemon">Pokemon</Link>
      </p>
    </div>
  );
};

export const indexRoute = rootRoute.createRoute({
  path: "/",
  component: Home,
});
