"use client";

import { LoadingBarProvider } from "@/hooks/loading-bar/LoadingBarContext";
import { LoadingPageProvider } from "@/hooks/loading-page/LoadingPageContext";
import { SnackbarProvider } from "@/hooks/snackbar/SnackbarContext";
import { RecoilRoot } from "recoil";

export default function LayoutRoot({ font, children }: { font: string; children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${font} custom-scrollbar font-inter text-body antialiased`}>
        <RecoilRoot>
          <SnackbarProvider>
            <LoadingPageProvider>
              <LoadingBarProvider>{children}</LoadingBarProvider>
            </LoadingPageProvider>
          </SnackbarProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
