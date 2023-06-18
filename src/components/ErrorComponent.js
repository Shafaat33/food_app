import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const { status, data } = useRouteError();
  return <p>{data} {status}</p>
};

export default ErrorComponent;
