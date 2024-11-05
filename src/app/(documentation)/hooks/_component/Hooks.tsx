"use client";

import Button from "@/components/base/Button";
import Code from "@/components/base/Code";
import Container from "@/components/base/Container";
import InputFile from "@/components/base/Input/InputFile";
import InputText from "@/components/base/Input/InputText";
import Skeleton from "@/components/base/Skeleton";
import Type from "@/components/base/Type";
import Documentation from "@/components/layout/Documentation";
import { useHttp } from "@/hooks/http/useHttp";
import { debounce } from "@/utils/debounce";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatNumber } from "@/utils/formatNumber";
import { generateId } from "@/utils/generateId";
import { getBase64FromFile } from "@/utils/getBase64FromFile";
import { getBase64FromFileResized } from "@/utils/getBase64FromFileResized";
import { getBlobFromBase64 } from "@/utils/getBlobFromBase64";
import { http } from "@/utils/http";
import { slugify } from "@/utils/slugify";
import { throttle } from "@/utils/throttle";
import { useCallback, useEffect, useState } from "react";

export default function Hooks() {
  const titles = [
    //
    "useHttp",
    "useLoadingBar",
    "useLoadingPage",
    "useSnackbar",
  ];
  return (
    <>
      <Documentation titles={titles}>
        <UseHttp />
      </Documentation>
    </>
  );
}

function UseHttp() {
  const http = useHttp();

  const [data, setData] = useState<any[]>([]);

  const getData = () => {
    http.get<any[]>("/users").then((response) => {
      setData(response as any);
    });
  };

  return (
    <Container title="useHttp" monospace>
      <div>
        The <Code>useHttp</Code> custom hook is a utility for making HTTP requests with optional features like loading indicators, error notifications, and automatic redirection when unauthorized access occurs.
      </div>
      <div className="flex flex-col gap-4">
        <p> Here’s a breakdown of each part:</p>
        <p className="text-bold">1. {`HttpResponse<T>`} Interface</p>
        <p>Defines the shape of an expected HTTP response: </p>
        <p>
          <Type>data</Type> : Holds the response data of type T.
        </p>
        <p>
          <Type>message</Type> : Status message (e.g., "Success").
        </p>
        <p>
          <Type>statusCode</Type> : HTTP status code.
        </p>
        <p className="text-bold">2. Parameters</p>
        <p>
          <Type>isUseLoadingBar</Type> : Controls whether a loading bar is displayed during the HTTP request. If true, the loading bar starts when the request begins and ends once the response is received.
        </p>
        <p>
          <Type>isUseSnackbar</Type> : Determines whether an error message is shown via a snackbar when a request fails. If true, the snackbar will display an error message if the request encounters an error.
        </p>
        <p>
          <Type>isRedirectUnauthorized</Type> : Specifies whether the app should redirect to the login page if a request returns a 401 Unauthorized error. If true, the user is redirected to "/auth/sign-in" and the profile state is reset to null on a 401 error.
        </p>
        <p className="text-bold">3. HTTP Methods (get, post, put, delete)</p>
        Each HTTP method is a memoized function that uses withLoading to execute the HTTP request and apply consistent error handling and loading behavior. Example Usage:
        <p>
          <Type>get</Type> : Executes a GET request by calling http.get with url and optional config.
        </p>
        <p>
          <Type>post</Type> : Executes a POST request with url, body, and optional config.
        </p>
        <p>
          <Type>put</Type> : Executes a PUT request with url, body, and optional config.
        </p>
        <p>
          <Type>delete</Type> : Executes a DELETE request with url and optional config.
        </p>
      </div>
      <p>Example Code:</p>
      <p>Http GET</p>
      <Code allowCopy block>
        {`
          import { useHttp } from "@/hooks/http/useHttp";

          export default function HttpGet() {
            const http = useHttp();

            const handleGet = async () => {
              const response = await http.get("/v1/product/list");
              console.log(response.data);
            };

            return (
              <button onClick={handleGet}>Get</button>
            );
          }
        `}
      </Code>
      <Code block allowCopy>
        {`
          const http = useHttp();
        `}
      </Code>
      <Code block allowCopy>
        {`
          const http = useHttp({ isUseLoadingBar: true, isUseSnackbar: true, isRedirectUnauthorized: true });
        `}
      </Code>
      <Code block allowCopy>
        {`
          const response = await http.get("/v1/product/list", { query: { page: 1, limit: 10 } });
        `}
      </Code>
      <Code block allowCopy>
        {`
          const response = await http.post("/v1/product/create", { id: 1, name: "Product 1" });
        `}
      </Code>
      <Code block allowCopy>
        {`
          const response = await http.put("/v1/product/update", { id: 1, name: "Product Update 1" });
        `}
      </Code>
      <Code block allowCopy>
        {`
          const response = await http.delete("/v1/product/delete", { id: 1 });
        `}
      </Code>
      <p>Example Case:</p>
      <div className="flex gap-4">
        <Button onClick={getData}>GET </Button>
        <Button variant="primary-outline" onClick={() => setData(() => [])}>
          Reset
        </Button>
      </div>
      {data.length > 0 && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.id} - {item.name}
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
