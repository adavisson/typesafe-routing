import { Link, useParams } from "@tanstack/react-router";
import React, { FC } from "react";
import { lineItemsRoute } from "../OrderDetail/OrderDetail";

export const LineItemsIndex: FC = () => {
  const { orderId } = useParams();

  return !orderId ? (
    <>Unable to find order id</>
  ) : (
    <>
      <Link to="/orders/$orderId" params={{ orderId }}>
        <h5>
          Back to
          {` Order ${orderId}`}
        </h5>
      </Link>
      <h3>LineItems for Order: {orderId}</h3>
      <ul>
        <li>
          <Link
            to="/orders/$orderId/line-items/$lineItemId"
            params={{
              orderId,
              lineItemId: "A",
            }}
          >
            Line Item A
          </Link>
        </li>
        <li>
          <Link
            to="/orders/$orderId/line-items/$lineItemId"
            params={{
              orderId,
              lineItemId: "B",
            }}
          >
            Line Item B
          </Link>
        </li>
        <li>
          <Link
            to="/orders/$orderId/line-items/$lineItemId"
            params={{
              orderId,
              lineItemId: "C",
            }}
          >
            Line Item C
          </Link>
        </li>
      </ul>
    </>
  );
};

export const lineItemsIndexRoute = lineItemsRoute.createRoute({
  path: "/",
  component: LineItemsIndex,
});
