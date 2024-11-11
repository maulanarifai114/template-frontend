"use client";

import { useProfileStore } from "@/state/profile.state";
import { useShallow } from "zustand/react/shallow";
import One from "./_component/One";
import Two from "./_component/Two";
import Button from "@/components/base/Button";

export default function page() {
  const [profile, fullName, fnProfile] = useProfileStore(useShallow((state) => [state.data, state.fn.getFullName(), state.fn]));

  return (
    <section className="py-12">
      <div className="container flex flex-col gap-4">
        <One />
        <Two />
        <p>
          Full Name : {profile?.firstName} {profile?.lastName} <br />
          fullName : {fullName}
        </p>
        <Button onClick={() => fnProfile.set(null)}>Reset</Button>
      </div>
    </section>
  );
}
