import { Link, useMatch } from "@tanstack/react-router";
import React, { FC } from "react";
import { z } from "zod";
import { crazySearchParamsRoute } from "../routes";

export const CrazySearchParams: FC = () => {
  const { search } = useMatch(crazySearchParamIndexRoute.id);

  console.log({ search });
  return (
    <div style={{ padding: "1rem" }}>
      <Link to="/">
        <h5>Back Home</h5>
      </Link>
      <h1>Objects in Search Params</h1>
      <p>
        <strong>Assignee: </strong>
        {search.assignee}
      </p>
      <p>
        <strong>Client: </strong>
        {search.client}
      </p>
      <p>
        <strong>Types: </strong>
        {search.types?.map((type, index) => (index !== 0 ? ", " + type : type))}
      </p>
      <p>
        <strong>wierdNestedFilter (stringified): </strong>
        {JSON.stringify(search.weirdNestedFilter)}
      </p>
    </div>
  );
};

export const crazySearchParamIndexRoute = crazySearchParamsRoute.createRoute({
  path: "/",
  component: CrazySearchParams,
  validateSearch: z.object({
    assignee: z.string().optional(),
    client: z.string().optional(),
    types: z.array(z.string()).optional(),
    weirdNestedFilter: z
      .object({
        name: z.string().optional(),
        levelOne: z
          .object({
            name: z.string().optional(),
            levelTwo: z.string().optional(),
          })
          .optional(),
      })
      .optional(),
  }),
});
