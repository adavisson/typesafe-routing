import { Outlet, useMatches } from "@tanstack/react-router";
import React, { FC, useMemo } from "react";

/**
 * Better wasy of implementing breacrumbs can be found here:
 * https://react-location.tanstack.com/guides/breadcrumbs
 */
export const Breadcrumbs: FC = () => {
  const matches = useMatches();

  const crumbs = useMemo(() => {
    const routesWithCrumbs = matches.filter(
      (match) => !!match.options.meta?.hasCrumb
    );

    return routesWithCrumbs.map((route, index) => {
      if (index === routesWithCrumbs.length - 1) {
        if (index !== 0) {
          return ` < ${route.pathname.slice(1)}`;
        } else {
          return route.pathname.slice(1);
        }
      } else if (index !== 0) {
        return (
          <>
            {" < "}
            <route.Link>{route.pathname.slice(1)}</route.Link>
          </>
        );
      } else {
        return <route.Link>{route.pathname.slice(1)}</route.Link>;
      }
    });
  }, [matches]);

  return (
    <div style={{ padding: "1rem" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        {crumbs.map((crumb) => crumb)}
      </div>
      <Outlet />
    </div>
  );
};
