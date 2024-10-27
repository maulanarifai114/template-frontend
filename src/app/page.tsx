import ExampleHttp from "@/components/ExampleHttp";
import ExampleSnackbar from "@/components/ExampleSnackbar";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col">
      <ExampleHttp />
      <ExampleSnackbar />
    </main>
  );
}
