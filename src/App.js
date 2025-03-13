import React, { lazy, Suspense } from "react";
const Routing = lazy(() => import("./routing"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routing />
    </Suspense>
  );
};

export default App;
