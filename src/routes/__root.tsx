import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const Route = createRootRoute({
  component: () => (
    <div style={{ padding: "1rem" }}>
      <Breadcrumbs />
      <Outlet />
    </div>
  ),
});
