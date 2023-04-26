// @ts-nocheck

import React from "react";

import logo from "./logo.svg";
import "./App.css";

const RemoteComponent = React.lazy(() => import("remote/RemoteComponent"));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback="Loading remote component...">
        <RemoteComponent />
      </React.Suspense>
    </div>
  );
}

export default App;
