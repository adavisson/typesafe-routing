import { Link, useMatches } from "@tanstack/react-router";
import { FC, useMemo } from "react";

/**
 * Better way of implementing breadcrumbs can be found here:
 * https://react-location.tanstack.com/guides/breadcrumbs
 */
export const Breadcrumbs: FC = () => {
  const matches = useMatches();

  const crumbs = useMemo(() => {
    const filteredMatches = matches.filter(
      (route) => route.pathname.at(-1) !== "/"
    );
    return filteredMatches.map((route, index) => {
      if (index >= filteredMatches.length - 1) {
        return (
          <>
            {index !== 0 ? " > " : ""}
            {route.pathname.split("/").at(-1)}
          </>
        );
      } else if (index !== 0) {
        return (
          <>
            {" > "}
            <Link to={route.pathname}>{route.pathname.split("/").at(-1)}</Link>
          </>
        );
      } else {
        return (
          <Link to={route.pathname}>{route.pathname.split("/").at(-1)}</Link>
        );
      }
    });
  }, [matches]);

  return (
    <div style={{ marginBottom: "1.5rem" }}>{crumbs.map((crumb) => crumb)}</div>
  );
};
