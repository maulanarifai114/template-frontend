import { Metadata } from "next";
import Components from "./_component/Components";

export const metadata: Metadata = {
  title: "Components",
};

export default function page() {
  return <Components />;
}
