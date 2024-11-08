import React from "react";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import { reportAccessibility } from "@/utils/axeAccessibilityReporter";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

reportAccessibility(React)