"use client";
import { SessionProvider } from "next-auth/react";

function ProviderSession({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default ProviderSession;
