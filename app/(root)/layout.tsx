import { Toaster } from "@/components/ui/toaster";
import { StreamVideProvider } from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "YOOM",
  description: "Video Calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

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
