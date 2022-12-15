import { Link } from "@tanstack/react-router";
import { Route as OrderDetailRoute } from "../../routes/orders/$orderId/index.route";

export function OrderDetail() {
  const { orderId } = OrderDetailRoute.useParams();

  return !orderId ? (
    <>Cannot find Order</>
  ) : (
    <>
      <div style={{ display: "flex" }}>
        <Link to="/orders">
          <h5>Back to Orders</h5>
        </Link>
      </div>
      Order: {orderId}
      <p>
        <Link to="/orders/$orderId/line-items" params={{ orderId }}>
          View Line Items
        </Link>
      </p>
    </>
  );
}
