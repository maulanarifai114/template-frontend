import { Metadata } from "next";
import Hooks from "./_component/Hooks";

export const metadata: Metadata = {
  title: "Hooks",
};

export default function page() {
  return <Hooks />;
}
