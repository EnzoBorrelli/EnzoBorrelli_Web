import { mainStyle } from "@/components/frontend/home/stylesConst";
import Form from "@/components/sendEmail/Form";
import React from "react";
import Paragraph from "./Paragraph";

export default function Contact() {
  return (
    <main className={`${mainStyle} relative`}>
      <Paragraph/>
      <Form />
    </main>
  );
}
