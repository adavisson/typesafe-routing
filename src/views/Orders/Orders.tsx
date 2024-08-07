import { Link } from "@tanstack/react-router";

export const Orders = () => {
  return (
    <>
      <Link to="/">
        <h5>Back Home</h5>
      </Link>
      <h3>Orders</h3>
      <ul>
        <li>
          <Link to="/orders/$orderId" params={{ orderId: 1 }}>
            Order 1
          </Link>
        </li>
        <li>
          <Link to="/orders/$orderId" params={{ orderId: 2 }}>
            Order 2
          </Link>
        </li>
        <li>
          <Link to="/orders/$orderId" params={{ orderId: 3 }}>
            Order 3
          </Link>
        </li>
      </ul>
    </>
  );
};
