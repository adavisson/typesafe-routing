import { Link } from "@tanstack/react-router";

export function Home() {
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
        <Link to="/crazy-search-params">Crazy SearchParams</Link>
      </p>
    </>
  );
}
