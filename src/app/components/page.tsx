"use client";

import { MdImage } from "react-icons/md";

import Button from "@/components/base/Button";
import InputFile from "@/components/base/Input/InputFile";
import InputPassword from "@/components/base/Input/InputPassword";
import InputSearch from "@/components/base/Input/InputSearch";
import InputText from "@/components/base/Input/InputText";
import InputTextArea from "@/components/base/Input/InputTextArea";
import InputAutocomplete, { AutocompleteOption } from "@/components/base/Input/InputAutocomplete";

export default function page() {
  const options: AutocompleteOption[] = [
    { id: "1", name: "Option 1" },
    { id: "2", name: "Option 2" },
    { id: "3", name: "Option 3" },
  ];

  return (
    <main>
      <Container title="Button">
        <Item>
          <Button variant="primary-dark">Hello World !</Button>
          <Button variant="primary">Hello World !</Button>
          <Button variant="primary-light">Hello World !</Button>
          <Button variant="primary-outline">Hello World !</Button>
        </Item>
        <Item>
          <Button variant="secondary-dark">Hello World !</Button>
          <Button variant="secondary">Hello World !</Button>
          <Button variant="secondary-light">Hello World !</Button>
          <Button variant="secondary-outline">Hello World !</Button>
        </Item>
        <Item>
          <Button variant="light">Hello World !</Button>
          <Button variant="light-outline">Hello World !</Button>
        </Item>
        <Item>
          <Button variant="danger">Hello World !</Button>
          <Button variant="danger-outline">Hello World !</Button>
        </Item>
        <Item>
          <Button variant="warning">Hello World !</Button>
          <Button variant="warning-outline">Hello World !</Button>
        </Item>
        <Item>
          <Button variant="success">Hello World !</Button>
          <Button variant="success-outline">Hello World !</Button>
        </Item>
      </Container>
      <Container title="Input">
        <InputText label="Text" placeholder="e.g. Input Text Here..." defaultValue="Value Init" required onChange={(e) => console.log(e.target.value)} />
        <InputPassword label="Password" placeholder="e.g. Input Password Here..." required onChange={(e) => console.log(e.target.value)} />
        <InputSearch label="Search" placeholder="e.g. Input Search Here..." required onChange={(e) => console.log(e.target.value)} />
        <InputTextArea label="Text Area" placeholder="e.g. Input Text Area Here..." required onChange={(e) => console.log(e.target.value)} />
        <InputFile label="One File" title="One File" description="Here is description" required onChange={(e) => console.log(e.target.files)} />
        <InputFile label="Multiple File" title="Multiple File" description="Here is description" multiple required onChange={(e) => console.log(e.target.files)} />
        <InputFile label="Image Only" title="Image Only" description="File support .jpg .jpeg .png .gif" accept=".jpg,.jpeg,.png,.gif" required onChange={(e) => console.log(e.target.files)} />
        <InputFile label="Change Icon" title="Change Icon" description="Here is description" icon={MdImage} required onChange={(e) => console.log(e.target.files)} />
        <InputAutocomplete label="Auto Complete" defaultValue={{ id: "", name: "" }} options={options} placeholder="e.g. Input Auto Complete Here..." required onChange={(event) => console.log(event)} />
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

function Item({ children }: { children: React.ReactNode }) {
  return <div className="flex w-full flex-wrap items-center gap-4">{children}</div>;
}
