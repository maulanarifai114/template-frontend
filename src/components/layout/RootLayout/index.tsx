"use client";
import { LoadingBarProvider } from "@/hooks/loading-bar/LoadingBarContext";
import { LoadingPageProvider } from "@/hooks/loading-page/LoadingPageContext";
import { RecoilContextProvider } from "@/hooks/recoil/RecoilContext";
import { SnackbarProvider } from "@/hooks/snackbar/SnackbarContext";

export default function LayoutRoot({ font, children }: { font: string; children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${font} custom-scrollbar font-inter text-body antialiased`}>
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
