import { Toaster } from "@/components/ui/toaster";
import { StreamVideProvider } from "@/providers/StreamClientProvider";
import React, { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <StreamVideProvider>
        {children}
        <Toaster />
      </StreamVideProvider>
    </main>
  );
}
