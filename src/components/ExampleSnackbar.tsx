"use client";

import { useSnackbar } from "@/hooks/useSnackbar";

export default function ExampleSnackbar() {
  const snackbar = useSnackbar();
  return (
    <div>
      <p>test</p>
    </div>
  );
}
