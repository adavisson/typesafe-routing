import { Link } from "@tanstack/react-router";
import { FC } from "react";
import { Route as LineItemDetailRoute } from "../../routes/orders/$orderId/line-items/$lineItemId/index.route";

export const LineItemDetail: FC = () => {
  const { lineItemId, orderId } = LineItemDetailRoute.useParams();

  return !orderId || !lineItemId ? (
    <>Failed to load</>
  ) : (
    <>
      <Link to="/orders/$orderId/line-items" params={{ orderId }}>
        <h5>Back to line items</h5>
      </Link>
      Line Item {lineItemId}
    </>
  );
};
