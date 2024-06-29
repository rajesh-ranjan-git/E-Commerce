import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  return <div>This is Error Page.</div>;
};

export default Error;
