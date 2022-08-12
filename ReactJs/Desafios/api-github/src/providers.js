import React from "react";
import App from "./App";
import GithubProvider from "./providers/github-provider";
import { ResetCSS } from "./global/resetCSS";

const Providers = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <App />
      </GithubProvider>
    </main>
  );
};

export default Providers;