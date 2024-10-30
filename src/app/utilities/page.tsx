"use client";

import Button from "@/components/base/Button";
import Code from "@/components/base/Code";
import Container from "@/components/base/Container";
import InputText from "@/components/base/Input/InputText";
import { debounce } from "@/utils/debounce";
import { throttle } from "@/utils/throttle";
import Link from "next/link";
import { useCallback, useState } from "react";

export default function page() {
  return (
    <>
      <div className="container pt-4">
        <Link href="/" className="text-paragraph-link">
          Back to Home
        </Link>
      </div>
      <Debounce />
      <Throttle />
    </>
  );
}

function Debounce() {
  const [text, setText] = useState("");
  const handleChange = debounce((e) => {
    setText(e.target.value);
  }, 500);

  return (
    <Container title="debounce" monospace>
      <div className="flex flex-col gap-4">
        <div>
          In React, <Code inline>debounce</Code> is often used with input fields to delay actions like API calls until the user stops typing. Here's how you could use it to handle a search input field, where the search query only updates after the user pauses typing for a moment.
        </div>
        <p>Example Code:</p>
        <Code allowCopy>
          {`
            import React, { useState } from "react";
            import { debounce } from "@/utils/debounce";

            function SearchComponent() {
              const [query, setQuery] = useState("");

              // Debounce the search function to delay handling input
              const handleSearch = debounce((value) => {
                console.log("Searching for:", value);
                setQuery(value);

                // Imagine this is where you"d make an API call
              }, 500);

              // Update query state and call debounced search
              const onChange = (e) => {
                handleSearch(e.target.value);
              };

              return (
                <div>
                  <input
                    type="text"
                    value={query}
                    onChange={onChange}
                    placeholder="Search here..."
                  />
                </div>
              );
            }

            export default SearchComponent;
          `}
        </Code>
        <Code allowCopy>
          {`
            const handleDebounce = debounce((value) => {
              console.log(value);
            }, 500);
          `}
        </Code>
        <p>Example Case:</p>
        <div className="flex items-center gap-4">
          <InputText className="w-fit" placeholder="Type something..." onChange={handleChange} />
          <p>Result in 500ms : {text}</p>
        </div>
      </div>
    </Container>
  );
}

function Throttle() {
  const [number, setNumber] = useState(0);

  const handleChange = useCallback(
    throttle(() => {
      setNumber((prev) => prev + 1);
      console.log("Number incremented!");
    }, 1000),
    [],
  );

  return (
    <Container title="throttle" monospace>
      <div className="flex flex-col gap-4">
        <div>
          In React, <Code inline>throttle</Code> is often used to limit how frequently a function can be executed, ensuring that it is not called more than once in a specified time period. This can be particularly useful for handling events like scrolling, resizing, and button pressing, where you may not want to perform an action on every event trigger.
        </div>
        <p>Example Code:</p>
        <Code allowCopy>
          {`
            import React, { useState, useCallback } from "react";
            import { throttle } from "@/utils/throttle";

            function ThrottleComponent() {
              const [number, setNumber] = useState(0);

              const handleChange = useCallback(
                throttle(() => {
                  setNumber((prev) => prev + 1);
                }, 1000),
                [],
              );

              return (
                <div>
                  <button type="button" onClick={handleChange} />
                  <p>Result (updated every 1s): {number}</p>
                </div>
              );
            }

            export default ThrottleComponent;
          `}
        </Code>
        <Code allowCopy>
          {`
            const handleChange = throttle(() => {
                console.log("Doing Something!");
            }, 1000),
          `}
        </Code>
        <p>Example Case:</p>
        <div className="flex items-center gap-4">
          <Button onClick={handleChange}>Add Number</Button>
          <p>Result (updated every 1s): {number}</p>
        </div>
      </div>
    </Container>
  );
}
