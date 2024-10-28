"use client";

import { MdImage } from "react-icons/md";

import Button from "@/components/base/Button";
import InputFile from "@/components/base/Input/InputFile";
import InputPassword from "@/components/base/Input/InputPassword";
import InputSearch from "@/components/base/Input/InputSearch";
import InputText from "@/components/base/Input/InputText";
import InputTextArea from "@/components/base/Input/InputTextArea";
import InputAutocomplete, { AutocompleteOption } from "@/components/base/Input/InputAutocomplete";
import { useEffect, useState } from "react";
import Dropdown, { DropdownOption } from "@/components/base/Dropdown";

export default function page() {
  const [autocomplete, setAutocomplete] = useState<AutocompleteOption | null>(null);
  const [text, setText] = useState<string>("");
  const options: AutocompleteOption[] = [
    { id: "1", name: "Option 1" },
    { id: "2", name: "Option 2" },
    { id: "3", name: "Option 3" },
  ];
  const options2: AutocompleteOption[] = [
    { id: "4", name: "Option 4" },
    { id: "5", name: "Option 5" },
    { id: "6", name: "Option 6" },
  ];
  const [insideObject, setInsideObject] = useState<{ text?: string; autocomplete?: AutocompleteOption } | null>({
    autocomplete: { id: "", name: "" },
    text: "",
  });

  useEffect(() => {
    //  Example if fetching API
    setTimeout(() => {
      setAutocomplete(() => ({ id: "1", name: "Option 1" }));
      setText("Initial Value");
    }, 1000);
    setTimeout(() => {
      setInsideObject({
        text: "Initial Value Object",
        autocomplete: { id: "4", name: "Option 4" },
      });
    }, 2000);
  }, []);

  const dropdownOptions: DropdownOption[] = [
    {
      text: "Option 7",
    },
    {
      text: "Option 8",
    },
    {
      text: "Option 9",
    },
  ];

  const variableClass = (code: string, type: string) => {
    return getComputedStyle(document.documentElement).getPropertyValue(`--font-${code}-${type}`);
  };

  return (
    <main>
      <Container title="Color">
        <div className="flex gap-4">
          <div className="flex flex-col">
            <div className="aspect-video w-24 bg-neutral-100"></div>
            <div className="aspect-video w-24 bg-neutral-200"></div>
            <div className="aspect-video w-24 bg-neutral-300"></div>
            <div className="aspect-video w-24 bg-neutral-400"></div>
            <div className="aspect-video w-24 bg-neutral-500"></div>
            <div className="aspect-video w-24 bg-neutral-600"></div>
            <div className="aspect-video w-24 bg-neutral-700"></div>
            <div className="aspect-video w-24 bg-neutral-800"></div>
            <div className="aspect-video w-24 bg-neutral-900"></div>
          </div>
          <div className="flex flex-col">
            <div className="aspect-video w-24 bg-primary-100"></div>
            <div className="aspect-video w-24 bg-primary-200"></div>
            <div className="aspect-video w-24 bg-primary-300"></div>
            <div className="aspect-video w-24 bg-primary-400"></div>
            <div className="aspect-video w-24 bg-primary-500"></div>
            <div className="aspect-video w-24 bg-primary-600"></div>
            <div className="aspect-video w-24 bg-primary-700"></div>
          </div>
          <div className="flex flex-col">
            <div className="aspect-video w-24 bg-secondary-100"></div>
            <div className="aspect-video w-24 bg-secondary-200"></div>
            <div className="aspect-video w-24 bg-secondary-300"></div>
            <div className="aspect-video w-24 bg-secondary-400"></div>
            <div className="aspect-video w-24 bg-secondary-500"></div>
            <div className="aspect-video w-24 bg-secondary-600"></div>
            <div className="aspect-video w-24 bg-secondary-700"></div>
          </div>
          <div className="flex flex-col">
            <div className="aspect-video w-24 bg-danger-100"></div>
            <div className="aspect-video w-24 bg-danger-500"></div>
            <div className="aspect-video w-24 bg-danger-600"></div>
          </div>
          <div className="flex flex-col">
            <div className="aspect-video w-24 bg-warning-100"></div>
            <div className="aspect-video w-24 bg-warning-500"></div>
            <div className="aspect-video w-24 bg-warning-600"></div>
          </div>
          <div className="flex flex-col">
            <div className="aspect-video w-24 bg-success-100"></div>
            <div className="aspect-video w-24 bg-success-500"></div>
            <div className="aspect-video w-24 bg-success-600"></div>
          </div>
        </div>
      </Container>
      <Container title="Typography">
        <h1 className="mt-4">
          Heading 1 - {variableClass("h1", "size")}/{variableClass("h1", "line")} - {variableClass("h1", "weight")}
        </h1>
        <h2>
          Heading 2 - {variableClass("h2", "size")}/{variableClass("h2", "line")} - {variableClass("h2", "weight")}
        </h2>
        <h3>
          Heading 3 - {variableClass("h3", "size")}/{variableClass("h3", "line")} - {variableClass("h3", "weight")}
        </h3>
        <h4>
          Heading 4 - {variableClass("h4", "size")}/{variableClass("h4", "line")} - {variableClass("h4", "weight")}
        </h4>
        <h5>
          Heading 5 - {variableClass("h5", "size")}/{variableClass("h5", "line")} - {variableClass("h5", "weight")}
        </h5>
        <h6>
          Heading 6 - {variableClass("h6", "size")}/{variableClass("h6", "line")} - {variableClass("h6", "weight")}
        </h6>
        <p className="text-h7">
          Heading 7 - {variableClass("h7", "size")}/{variableClass("h7", "line")} - {variableClass("h7", "weight")}
        </p>
        <p className="text-h8">
          Heading 8 - {variableClass("h8", "size")}/{variableClass("h8", "line")} - {variableClass("h8", "weight")}
        </p>
        <p className="text-body">
          Paragraph Body - {variableClass("body", "size")}/{variableClass("body", "line")} - {variableClass("body", "weight")}
        </p>
        <p className="text-small">
          Paragraph Small - {variableClass("small", "size")}/{variableClass("small", "line")} - {variableClass("small", "weight")}
        </p>
        <p className="text-bold">
          Paragraph Bold - {variableClass("bold", "size")}/{variableClass("bold", "line")} - {variableClass("bold", "weight")}
        </p>
        <p className="text-paragraph-italic">
          Paragraph Italic - {variableClass("italic", "size")}/{variableClass("italic", "line")} - {variableClass("italic", "weight")}
        </p>
        <p className="text-paragraph-link">
          Paragraph Link - {variableClass("link", "size")}/{variableClass("link", "line")} - {variableClass("link", "weight")}
        </p>
        <p className="text-paragraph">
          Paragraph - {variableClass("paragraph", "size")}/{variableClass("paragraph", "line")} - {variableClass("paragraph", "weight")}
        </p>
        <p className="text-paragraph-indent">
          Paragraph Indent - {variableClass("indent", "size")}/{variableClass("indent", "line")} - {variableClass("indent", "weight")}
        </p>
        <p className="text-xsmall">
          Paragraph Extra Small - {variableClass("xsmall", "size")}/{variableClass("xsmall", "line")} - {variableClass("xsmall", "weight")}
        </p>
      </Container>
      <Container title="Button">
        <div className="flex w-full flex-wrap items-center gap-4">
          <Button variant="primary-dark">Hello World !</Button>
          <Button variant="primary">Hello World !</Button>
          <Button variant="primary-light">Hello World !</Button>
          <Button variant="primary-outline">Hello World !</Button>
        </div>
        <div className="flex w-full flex-wrap items-center gap-4">
          <Button variant="secondary-dark">Hello World !</Button>
          <Button variant="secondary">Hello World !</Button>
          <Button variant="secondary-light">Hello World !</Button>
          <Button variant="secondary-outline">Hello World !</Button>
        </div>
        <div className="flex w-full flex-wrap items-center gap-4">
          <Button variant="light">Hello World !</Button>
          <Button variant="light-outline">Hello World !</Button>
        </div>
        <div className="flex w-full flex-wrap items-center gap-4">
          <Button variant="danger">Hello World !</Button>
          <Button variant="danger-outline">Hello World !</Button>
        </div>
        <div className="flex w-full flex-wrap items-center gap-4">
          <Button variant="warning">Hello World !</Button>
          <Button variant="warning-outline">Hello World !</Button>
        </div>
        <div className="flex w-full flex-wrap items-center gap-4">
          <Button variant="success">Hello World !</Button>
          <Button variant="success-outline">Hello World !</Button>
        </div>
      </Container>
      <Container title="Input">
        <InputText label="Text" placeholder="e.g. Input Text Here..." value={text} required onChange={(e) => console.log(e.target.value)} />
        <InputPassword label="Password" placeholder="e.g. Input Password Here..." required onChange={(e) => console.log(e.target.value)} />
        <InputSearch label="Search" placeholder="e.g. Input Search Here..." onChange={(e) => console.log(e.target.value)} />
        <InputTextArea label="Text Area" placeholder="e.g. Input Text Area Here..." required onChange={(e) => console.log(e.target.value)} />
        <InputFile label="One File" title="One File" description="Here is description" required onChange={(e) => console.log(e.target.files)} />
        <InputFile label="Multiple File" title="Multiple File" description="Here is description" multiple required onChange={(e) => console.log(e.target.files)} />
        <InputFile label="Image Only" title="Image Only" description="File support .jpg .jpeg .png .gif" accept=".jpg,.jpeg,.png,.gif" required onChange={(e) => console.log(e.target.files)} />
        <InputFile label="Change Icon" title="Change Icon" description="Here is description" icon={MdImage} required onChange={(e) => console.log(e.target.files)} />
        <div className="flex items-end gap-4">
          <InputAutocomplete label="Auto Complete" value={autocomplete} options={options} placeholder="e.g. Input Auto Complete Here..." required onChange={(event) => setAutocomplete(event)} />
          <div className="h-full rounded-lg border border-neutral-200 bg-neutral-100 p-3 font-monospace">
            Autocomplete: {autocomplete?.id} - {autocomplete?.name}
          </div>
        </div>
        <div className="flex items-end gap-4">
          <InputAutocomplete label="Change Icon" value={autocomplete} options={options} placeholder="e.g. Input Auto Complete Here..." icon={MdImage} required onChange={(event) => setAutocomplete(event)} />
          <div className="h-full rounded-lg border border-neutral-200 bg-neutral-100 p-3 font-monospace">
            Autocomplete: {autocomplete?.id} - {autocomplete?.name}
          </div>
        </div>

        {/* Example */}
        <h2 className="my-4 font-normal">Example inside object</h2>
        <div className="flex items-end gap-4">
          <InputText label="Inside Object" placeholder="e.g. Input Text Here..." value={insideObject?.text} required onChange={(e) => setInsideObject((prev) => ({ ...prev, text: e.target.value }))} />
          <InputAutocomplete label="Inside Object" value={insideObject?.autocomplete} options={options2} placeholder="e.g. Input Auto Complete Here..." required onChange={(event) => setInsideObject((prev) => ({ ...prev, autocomplete: event }))} />
          <div className="h-full rounded-lg border border-neutral-200 bg-neutral-100 p-3 font-monospace">
            <p>Text: {insideObject?.text}</p>
            <p>
              Autocomplete: {insideObject?.autocomplete?.id} - {insideObject?.autocomplete?.name}
            </p>
          </div>
        </div>
      </Container>
      <Container title="Dropdown">
        <Dropdown options={dropdownOptions}>
          <Button>Label Here</Button>
        </Dropdown>
        <Dropdown options={dropdownOptions} isFullWidth>
          <Button>Full Width for Options</Button>
        </Dropdown>
        <Dropdown options={dropdownOptions}>
          <div className="cursor-pointer rounded-lg border border-neutral-200 bg-neutral-100 p-3">Inside another element</div>
        </Dropdown>
        <Dropdown
          options={[
            {
              text: "Doing Nothing",
            },
            {
              text: "onClick Options",
              onClick: () => alert("OnClick Options"),
            },
            {
              text: "href Options",
              href: "/components",
            },
            {
              text: "Both onClick and Href",
              href: "/components",
              onClick: () => alert("Both onClick and Href"),
            },
          ]}
        >
          <Button>With Function</Button>
        </Dropdown>
      </Container>
    </main>
  );
}

function Container({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="container flex flex-col items-start gap-4 border-b border-neutral-300 py-8">
      <h1>{title}</h1>
      {children}
    </div>
  );
}
