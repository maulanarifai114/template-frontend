"use client";

import Button from "@/components/base/Button";
import Code from "@/components/base/Code";
import Container from "@/components/base/Container";
import InputText from "@/components/base/Input/InputText";
import Documentation from "@/components/layout/Documentation";
import { debounce } from "@/utils/debounce";
import { formatCurrency } from "@/utils/format-currency";
import { formatNumber } from "@/utils/format-number";
import { throttle } from "@/utils/throttle";
import { useCallback, useState } from "react";

export default function Utilities() {
  const titles = [
    //
    "debounce",
    "throttle",
    "formatCurrency",
    "formatNumber",
  ];
  return (
    <>
      <Documentation titles={titles}>
        <Debounce />
        <Throttle />
        <FormatCurrency />
        <FormatNumber />
      </Documentation>
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
      <div>
        In React, <Code>debounce</Code> is often used with input fields to delay actions like API calls until the user stops typing. Here's how you could use it to handle a search input field, where the search query only updates after the user pauses typing for a moment.
      </div>
      <p>Example Code:</p>
      <Code allowCopy block>
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
      <Code block allowCopy>
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
      <div>
        In React, <Code>throttle</Code> is often used to limit how frequently a function can be executed, ensuring that it is not called more than once in a specified time period. This can be particularly useful for handling events like scrolling, resizing, and button pressing, where you may not want to perform an action on every event trigger.
      </div>
      <p>Example Code:</p>
      <Code block allowCopy>
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
      <Code block allowCopy>
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
    </Container>
  );
}

function FormatCurrency() {
  const [number, setNumber] = useState(125000.55);
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(() => +e.target.value);
  }, []);

  return (
    <Container title="formatCurrency" monospace>
      <p>
        The <Code>formatCurrency</Code> function formats a number as a currency string. It takes three parameters:
      </p>
      <ul className="flex list-disc flex-col gap-2 pl-4">
        <li>
          <Code>amount</Code> (<Code>number</Code>): the amount to format.
        </li>
        <li>
          <Code>locales</Code> (<Code>string</Code>, default <Code>"id-ID"</Code>): the locale for formatting, determining language and region (e.g., "id-ID" for Indonesian).
        </li>
        <li>
          <Code>currency</Code> (<Code>string</Code>, default <Code>"IDR"</Code>): the currency code, such as "IDR" for Indonesian Rupiah or "USD" for US Dollar.
        </li>
      </ul>
      <p>Example Code :</p>
      <Code allowCopy block>
        {`
          import { formatCurrency } from "@/utils/formatCurrency";

          const formattedAmount = formatCurrency(1234567.89, "id-ID", "IDR");
          const formattedAmountUS = formatCurrency(50000, "en-US", "USD");

          console.log(formattedAmount);   // Output: "Rp 1.234.567,89"
          console.log(formattedAmountUS); // Output: "$50,000"
        `}
      </Code>
      <Code allowCopy block>
        {`
          formatCurrency(100000);
        `}
      </Code>
      <p>Example Case :</p>
      <div className="flex items-center gap-4">
        <InputText type="number" value={number} placeholder="Input Number" onChange={handleChange} />
        <p>Result IDR : {formatCurrency(number)}</p>
      </div>
      <div className="flex items-center gap-4">
        <InputText type="number" value={number} placeholder="Input Number" onChange={handleChange} />
        <p>Result USD : {formatCurrency(number, "en-US", "USD")}</p>
      </div>
      <div className="flex items-center gap-4">
        <InputText type="number" value={number} placeholder="Input Number" onChange={handleChange} />
        <p>Result EUR : {formatCurrency(number, "de-DE", "EUR")}</p>
      </div>
      <div className="flex items-center gap-4">
        <InputText type="number" value={number} placeholder="Input Number" onChange={handleChange} />
        <p>Result JPY : {formatCurrency(number, "ja-JP", "JPY")}</p>
      </div>
    </Container>
  );
}

function FormatNumber() {
  const [number, setNumber] = useState(125000.55);
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(() => +e.target.value);
  }, []);

  return (
    <Container title="formatNumber" monospace>
      <p>
        The <Code>formatNumber</Code> function formats a number with locale-specific grouping and decimal places, making it easier to read in various regional formats. It takes two parameters:
      </p>
      <ul className="flex list-disc flex-col gap-2 pl-4">
        <li>
          <Code>amount</Code> (<Code>number</Code>): the number to format.
        </li>
        <li>
          <Code>locales</Code> (<Code>string</Code>, default <Code>"id-ID"</Code>): the locale for formatting, which affects the grouping, decimal separators, and formatting style (e.g., "id-ID" for Indonesian).
        </li>
      </ul>
      <p>Example Code :</p>
      <Code allowCopy block>
        {`
          import { formatNumber } from "@/utils/formatNumber";

          const formattedNumber = formatNumber(12345);
          const formattedNumberFloat = formatNumber(12345.6789);
          const formattedNumberUS = formatNumber(12345, "en-US");

          console.log(formattedNumber);      // Outputs: "12.345" in Indonesian format
          console.log(formattedNumberFloat); // Outputs: "12.345,68"
          console.log(formattedNumberUS);    // Outputs: "12,345" in US format
        `}
      </Code>
      <Code allowCopy block>
        {`
          formatNumber(100000);
        `}
      </Code>
      <p>Example Case :</p>
      <div className="flex items-center gap-4">
        <InputText type="number" value={number} placeholder="Input Number" onChange={handleChange} />
        <p>Result id-ID : {formatNumber(number)}</p>
      </div>
      <div className="flex items-center gap-4">
        <InputText type="number" value={number} placeholder="Input Number" onChange={handleChange} />
        <p>Result en-US : {formatNumber(number, "en-US")}</p>
      </div>
      <div className="flex items-center gap-4">
        <InputText type="number" value={number} placeholder="Input Number" onChange={handleChange} />
        <p>Result de-DE : {formatNumber(number, "de-DE")}</p>
      </div>
    </Container>
  );
}
