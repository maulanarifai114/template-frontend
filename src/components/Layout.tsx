"use client";
import { LoadingBarProvider } from "@/contexts/LoadingBarContext";
import { LoadingPageProvider } from "@/contexts/LoadingPageContext";
import { RecoilContextProvider } from "@/contexts/RecoilContext";
import { SnackbarProvider } from "@/contexts/SnackbarContext";

export default function Layout({ font, children }: { font: string; children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${font} font-inter antialiased`}>
        <RecoilContextProvider>
          <SnackbarProvider>
            <LoadingPageProvider>
              <LoadingBarProvider>{children}</LoadingBarProvider>
            </LoadingPageProvider>
          </SnackbarProvider>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
