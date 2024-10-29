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
import Skeleton from "@/components/base/Skeleton";
import Card from "@/components/base/Card";
import Dialog from "@/components/base/Dialog";
import Link from "next/link";

export default function Components() {
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
    if (getComputedStyle) {
      return getComputedStyle(document.documentElement).getPropertyValue(`--font-${code}-${type}`);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  return (
    <main>
      <div className="container pt-4">
        <Link href="/" className="text-paragraph-link">
          Back to Home
        </Link>
      </div>
      <Container title="Color">
        <div className="flex flex-wrap gap-4">
          <div className="flex flex-col">
            <p className="mb-3">Neutral</p>
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
            <p className="mb-3">Primary</p>
            <div className="aspect-video w-24 bg-primary-100"></div>
            <div className="aspect-video w-24 bg-primary-200"></div>
            <div className="aspect-video w-24 bg-primary-300"></div>
            <div className="aspect-video w-24 bg-primary-400"></div>
            <div className="aspect-video w-24 bg-primary-500"></div>
            <div className="aspect-video w-24 bg-primary-600"></div>
            <div className="aspect-video w-24 bg-primary-700"></div>
          </div>
          <div className="flex flex-col">
            <p className="mb-3">Secondary</p>
            <div className="aspect-video w-24 bg-secondary-100"></div>
            <div className="aspect-video w-24 bg-secondary-200"></div>
            <div className="aspect-video w-24 bg-secondary-300"></div>
            <div className="aspect-video w-24 bg-secondary-400"></div>
            <div className="aspect-video w-24 bg-secondary-500"></div>
            <div className="aspect-video w-24 bg-secondary-600"></div>
            <div className="aspect-video w-24 bg-secondary-700"></div>
          </div>
          <div className="flex flex-col">
            <p className="mb-3">Danger</p>
            <div className="aspect-video w-24 bg-danger-100"></div>
            <div className="aspect-video w-24 bg-danger-500"></div>
            <div className="aspect-video w-24 bg-danger-600"></div>
          </div>
          <div className="flex flex-col">
            <p className="mb-3">Warning</p>
            <div className="aspect-video w-24 bg-warning-100"></div>
            <div className="aspect-video w-24 bg-warning-500"></div>
            <div className="aspect-video w-24 bg-warning-600"></div>
          </div>
          <div className="flex flex-col">
            <p className="mb-3">Success</p>
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
          <Button variant="primary-dark">primary-dark</Button>
          <Button variant="primary">primary</Button>
          <Button variant="primary-light">primary-light</Button>
          <Button variant="primary-outline">primary-outline</Button>
        </div>
        <div className="flex w-full flex-wrap items-center gap-4">
          <Button variant="secondary-dark">secondary-dark</Button>
          <Button variant="secondary">secondary</Button>
          <Button variant="secondary-light">secondary-light</Button>
          <Button variant="secondary-outline">secondary-outline</Button>
        </div>
        <div className="flex w-full flex-wrap items-center gap-4">
          <Button variant="light">light</Button>
          <Button variant="light-outline">light-outline</Button>
        </div>
        <div className="flex w-full flex-wrap items-center gap-4">
          <Button variant="danger">danger</Button>
          <Button variant="danger-outline">danger-outline</Button>
        </div>
        <div className="flex w-full flex-wrap items-center gap-4">
          <Button variant="warning">warning</Button>
          <Button variant="warning-outline">warning-outline</Button>
        </div>
        <div className="flex w-full flex-wrap items-center gap-4">
          <Button variant="success">success</Button>
          <Button variant="success-outline">success-outline</Button>
        </div>
      </Container>
      <Container title="Input">
        <InputText label="Text" placeholder="e.g. Input Text Here..." value={text} required onChange={(e) => setText(() => e.target.value)} />
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
          <Button variant="primary-dark">Full Width for Options</Button>
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
          <Button variant="primary-outline">With Function</Button>
        </Dropdown>

        <Dropdown options={dropdownOptions}>
          <div className="cursor-pointer rounded-lg border border-neutral-200 bg-neutral-100 p-3">Inside another element</div>
        </Dropdown>
      </Container>
      <Container title="Dialog">
        <Button variant="secondary" onClick={() => setIsOpen((prev) => !prev)}>
          Open Dialog
        </Button>
        <Dialog isOpen={isOpen} onClose={(value) => setIsOpen(() => value)}>
          Child here...
        </Dialog>

        <Button variant="secondary-dark" onClick={() => setIsOpen2((prev) => !prev)}>
          Custom Width
        </Button>
        <Dialog width="1080px" isOpen={isOpen2} onClose={(value) => setIsOpen2(() => value)}>
          Child here...
        </Dialog>

        <Button variant="secondary-light" onClick={() => setIsOpen3((prev) => !prev)}>
          Change Padding
        </Button>
        <Dialog className="p-3" isOpen={isOpen3} onClose={(value) => setIsOpen3(() => value)}>
          Child here...
        </Dialog>

        <Button variant="secondary-outline" onClick={() => setIsOpen5((prev) => !prev)}>
          Without Transition
        </Button>
        <Dialog transition={false} isOpen={isOpen5} onClose={(value) => setIsOpen5(() => value)}>
          Child here...
        </Dialog>

        <Button variant="light" onClick={() => setIsOpen4((prev) => !prev)}>
          Custom Dialog
        </Button>
        <Dialog width="400px" className="w-full rounded-2xl bg-success-100 p-8" isOpen={isOpen4} onClose={(value) => setIsOpen4(() => value)}>
          Child here...
        </Dialog>
      </Container>
      <Container title="Skeleton">
        <label htmlFor="" className="mb-1 block">
          Can be shape anything
        </label>
        <div className="flex w-64 flex-col gap-4">
          <div className="flex w-full gap-3">
            <div>
              <Skeleton className="h-12 w-12 rounded-full" />
            </div>
            <Skeleton className="h-12 w-full rounded-lg" />
          </div>
          <Skeleton className="h-2 w-full rounded-lg" />
          <Skeleton className="h-2 w-full rounded-lg" />
          <Skeleton className="h-2 w-full rounded-lg" />
        </div>
      </Container>
      <Container title="Card">
        <Card>Shadow Card</Card>
        <Card type="border">Bordered Card</Card>
        <Card type="none">Without Shadow and Border</Card>
        <Card className="p-6">Custom padding</Card>
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
