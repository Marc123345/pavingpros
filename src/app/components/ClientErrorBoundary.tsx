"use client";

import ErrorBoundary from "./ErrorBoundary";
import { ReactNode } from "react";

interface ClientErrorBoundaryProps {
  children: ReactNode;
}

export default function ClientErrorBoundary({ children }: ClientErrorBoundaryProps): JSX.Element {
  return <ErrorBoundary>{children}</ErrorBoundary>;
}

