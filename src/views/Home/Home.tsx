import { Link } from "@tanstack/react-router";
import { Route as OrdersRoute } from "../../routes/orders.route";
import { Route as PokemonRoute } from "../../routes/pokemon.index.route";
import { Route as ValidatedSearchParamsRoute } from "../../routes/validated-search-params.index.route";

export function Home() {
  return (
    <>
      <h1>TanStack Router Demo</h1>
      <p>
        <Link to={OrdersRoute.to}>Orders</Link>
      </p>
      <p>
        <Link to={PokemonRoute.to}>Pokemon</Link>
      </p>
      <p>
        <Link to={ValidatedSearchParamsRoute.to}>Validated Search Params</Link>
      </p>
    </>
  );
}
