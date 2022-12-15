import { Link } from "@tanstack/react-router";
import React from "react";
import { rootRoute } from "../routes";

export const Home = () => {
  return (
    <>
      <h1>Typesafe Routing Demo</h1>
      <p>
        <Link to="/orders">Orders</Link>
      </p>
      <p>
        <Link to="/pokemon">Pokemon</Link>
      </p>
      <p>
        <Link
          to="/crazySearchParams"
          search={{
            assignee: "Bill",
            client: "Google",
            types: ["green", "blue"],
            weirdNestedFilter: {
              name: "levelOne",
              levelOne: { name: "levelTwo", levelTwo: "???" },
            },
          }}
        >
          Crazy SearchParams
        </Link>
      </p>
    </>
  );
};

export const indexRoute = rootRoute.createRoute({
  path: "/",
  component: Home,
});
