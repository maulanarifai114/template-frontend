import { Metadata } from "next";
import Utilities from "./_component/Utilities";

export const metadata: Metadata = {
  title: "Utilities",
};

export default function page() {
  return <Utilities />;
}
