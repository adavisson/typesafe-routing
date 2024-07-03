import { Link } from "@tanstack/react-router";
import { ChangeEvent, useEffect, useState } from "react";
import {
  ValidatedSearchParam,
  Route as ValidatedSearchParamsRoute,
} from "../../routes/validated-search-params.index.route";

export function ValidatedSearchParams() {
  const search = ValidatedSearchParamsRoute.useSearch();
  const navigate = ValidatedSearchParamsRoute.useNavigate();
  const [assignee, setAssignee] = useState(search.assignee ?? "");
  const [client, setClient] = useState(search.client ?? "");
  const [types, setTypes] = useState(search.types ?? []);
  const [nestedFilter, setNestedFilter] = useState(
    search.nestedFilter ?? undefined
  );

  const handleTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTypes([...types, e.target.value]);
    } else {
      setTypes(types.filter((type) => type !== e.target.value));
    }
  };

  const handleClick = () => {
    setNestedFilter({
      id: 5,
      name: "levelOne",
      levelOne: { name: "levelTwo", levelTwo: "???" },
    });
  };

  useEffect(() => {
    navigate({
      to: ValidatedSearchParamsRoute.fullPath,
      search: (prev: ValidatedSearchParam): ValidatedSearchParam => ({
        ...prev,
        assignee,
      }),
      replace: true,
    });
  }, [assignee]);

  useEffect(() => {
    navigate({
      to: ValidatedSearchParamsRoute.fullPath,
      search: (prev: ValidatedSearchParam): ValidatedSearchParam => ({
        ...prev,
        client,
      }),
      replace: true,
    });
  }, [client]);

  useEffect(() => {
    navigate({
      to: ValidatedSearchParamsRoute.fullPath,
      search: (prev: ValidatedSearchParam): ValidatedSearchParam => ({
        ...prev,
        types,
      }),
      replace: true,
    });
  }, [types]);

  useEffect(() => {
    navigate({
      to: ValidatedSearchParamsRoute.fullPath,
      search: (prev: ValidatedSearchParam): ValidatedSearchParam => ({
        ...prev,
        nestedFilter,
      }),
      replace: true,
    });
  }, [nestedFilter]);

  return (
    <>
      <Link to="/">
        <h5>Back Home</h5>
      </Link>
      <h1>Validated Search Params</h1>
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
        {!nestedFilter ? (
          <button onClick={handleClick}>Fill Weird Filter With Stuff</button>
        ) : (
          <button onClick={() => setNestedFilter(undefined)}>
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
        <strong>nestedFilter (stringified): </strong>
        {JSON.stringify(nestedFilter)}
      </p>
    </>
  );
}
