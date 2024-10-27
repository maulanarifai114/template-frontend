"use client";

import React, { createContext, forwardRef, useCallback } from "react";
import { CustomContentProps, SnackbarContent, useSnackbar } from "notistack";
import { SnackbarProvider as SnackbarProviderNotistack, enqueueSnackbar } from "notistack";

import { MdClose } from "react-icons/md";

import clsx from "clsx";

export interface SnackbarContextProps {
  start: (message: React.ReactNode, type: "success" | "error", duration?: number) => void;
}

export const SnackbarContext = createContext<SnackbarContextProps | undefined>(undefined);

export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const start = useCallback((message: React.ReactNode, type: "success" | "error", duration?: number) => {
    try {
      enqueueSnackbar(message, {
        variant: type,
        autoHideDuration: duration ?? 3000,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <SnackbarContext.Provider value={{ start }}>
      <SnackbarProviderNotistack Components={{ success: Custom, error: Custom }} anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
        {children}
      </SnackbarProviderNotistack>
    </SnackbarContext.Provider>
  );
};

const Custom = forwardRef<HTMLDivElement, CustomContentProps>((props, ref) => {
  const { closeSnackbar } = useSnackbar();

  return (
    <SnackbarContent ref={ref}>
      <div className={clsx({ "bg-danger-600": props.variant === "error", "bg-success-600": props.variant === "success" }, "rounded-4 ml-auto flex items-center gap-2 rounded px-4 py-3 text-h6 text-white")}>
        <span className="block">{props.message}</span>
        <MdClose className="cursor-pointer" onClick={() => closeSnackbar(props.id)} />
      </div>
    </SnackbarContent>
  );
});

// import React, { createContext, useCallback, useState } from "react";
// import { SnackbarProvider as SnackbarProviderNotistack, enqueueSnackbar, closeSnackbar, SnackbarContent, CustomContentProps, SnackbarKey, useSnackbar } from "notistack";
// import { MdClose } from "react-icons/md";

// export interface SnackbarContextProps {
//   start: (message: React.ReactNode, type: "success" | "error", duration?: number) => void;
//   complete: () => void;
// }

// export const SnackbarContext = createContext<SnackbarContextProps | undefined>(undefined);

// interface SnackbarComponentProps extends CustomContentProps {
//   onClose: (id: SnackbarKey) => void;
// }

// export const SnackbarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   // const { enqueueSnackbar } = useSnackbar();
//   const SnackbarComponent = React.forwardRef<HTMLDivElement, SnackbarComponentProps>((props, ref) => {
//     const { id, message, onClose, variant, action } = props;

//     return (
//       <SnackbarContent ref={ref}>
//         <div className="flex w-full items-center justify-between gap-2 rounded bg-primary-500 px-4 py-3 text-h6 text-white">
//           {message}
//           <MdClose
//             className="cursor-pointer"
//             style={{ fontSize: 20 }}
//             onClick={() => {
//               complete(id);
//             }}
//           />
//         </div>
//       </SnackbarContent>
//     );
//   });

//   const start = useCallback((message: React.ReactNode, type: "success" | "error" = "success", duration?: number) => {
//     console.log("start");
//     enqueueSnackbar(message, {
//       variant: type,
//       autoHideDuration: duration,
//     });
//   }, []);

//   const complete = useCallback((key?: any) => {
//     if (key) closeSnackbar(key);
//     else closeSnackbar();
//   }, []);

//   return (
//     <SnackbarContext.Provider value={{ start, complete }}>
//       <SnackbarProviderNotistack
//         Components={{
//           success: SnackbarComponent,
//           error: SnackbarComponent,
//         }}
//         hideIconVariant
//         autoHideDuration={3000}
//         maxSnack={3}
//         anchorOrigin={{
//           vertical: "bottom",
//           horizontal: "right",
//         }}
//       >
//         {children}
//       </SnackbarProviderNotistack>
//     </SnackbarContext.Provider>
//   );
// };
