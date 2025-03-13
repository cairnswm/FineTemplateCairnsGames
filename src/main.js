import React, { Suspense } from "react";
const Providers = React.lazy(() => import("./providers"));

const Main = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Providers />
    </Suspense>
  );
};

export default Main;
