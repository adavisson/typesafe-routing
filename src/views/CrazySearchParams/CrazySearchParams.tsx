import { Link, useMatch } from "@tanstack/react-router";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { z } from "zod";
import { crazySearchParamsRoute } from "../routes";

export const CrazySearchParams: FC = () => {
  const { search, navigate } = useMatch(crazySearchParamIndexRoute.id);
  const [assignee, setAssignee] = useState<string>(search.assignee ?? "");
  const [client, setClient] = useState<string>(search.client ?? "");
  const [types, setTypes] = useState<Array<string>>(search.types ?? []);
  const [weirdNestedFilter, setWeirdNestedFilter] = useState<
    typeof search.weirdNestedFilter
  >(search.weirdNestedFilter ?? undefined);

  const handleTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTypes([...types, e.target.value]);
    } else {
      setTypes(types.filter((type) => type !== e.target.value));
    }
  };

  const handleClick = () => {
    setWeirdNestedFilter({
      name: "levelOne",
      levelOne: { name: "levelTwo", levelTwo: "???" },
    });
  };

  useEffect(() => {
    navigate({
      search: (old) => ({ ...old, assignee }),
      replace: true,
    });
  }, [assignee, navigate]);

  useEffect(() => {
    navigate({
      search: (old) => ({ ...old, client }),
      replace: true,
    });
  }, [client, navigate]);

  useEffect(() => {
    navigate({
      search: (old) => ({ ...old, types }),
      replace: true,
    });
  }, [types, navigate]);

  useEffect(() => {
    navigate({
      search: (old) => ({ ...old, weirdNestedFilter }),
      replace: true,
    });
  }, [weirdNestedFilter, navigate]);

  return (
    <>
      <Link to="/">
        <h5>Back Home</h5>
      </Link>
      <h1>Objects in Search Params</h1>
      <div>
        <label>Assignee: </label>
        <select
          name="assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        >
          <option>Bill</option>
          <option>Jim</option>
          <option>Janet</option>
          <option>Sue</option>
        </select>
      </div>
      <div>
        <label>Client: </label>
        <select
          name="client"
          value={client}
          onChange={(e) => setClient(e.target.value)}
        >
          <option>Renee</option>
          <option>George</option>
          <option>Britt</option>
          <option>Phil</option>
        </select>
      </div>
      <div>
        <label>Types: </label>
        <input
          checked={types.includes("green")}
          type="checkbox"
          value="green"
          name="green"
          onChange={handleTypeChange}
        />
        <label htmlFor="green">Green</label>
        <input
          checked={types.includes("blue")}
          type="checkbox"
          value="blue"
          name="blue"
          onChange={handleTypeChange}
        />
        <label htmlFor="blue">Blue</label>
        <input
          checked={types.includes("tall")}
          type="checkbox"
          value="tall"
          name="tall"
          onChange={handleTypeChange}
        />
        <label htmlFor="tall">Tall</label>
        <input
          checked={types.includes("shiny")}
          type="checkbox"
          value="shiny"
          name="shiny"
          onChange={handleTypeChange}
        />
        <label htmlFor="shiny">Shiny</label>
      </div>
      <div>
        {!weirdNestedFilter ? (
          <button onClick={handleClick}>Fill Weird Filter With Stuff</button>
        ) : (
          <button onClick={() => setWeirdNestedFilter(undefined)}>
            Clear Filter
          </button>
        )}
      </div>
      <p>
        <strong>Assignee: </strong>
        {assignee}
      </p>
      <p>
        <strong>Client: </strong>
        {client}
      </p>
      <p>
        <strong>Types: </strong>
        {types.map((type, index) => (index !== 0 ? ", " + type : type))}
      </p>
      <p>
        <strong>wierdNestedFilter (stringified): </strong>
        {JSON.stringify(weirdNestedFilter)}
      </p>
    </>
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
