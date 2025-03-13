import React, { lazy, Suspense } from "react";
const Routing = lazy(() => import("./routing"));

import "./app.css";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routing />
    </Suspense>
  );
};

export default App;
