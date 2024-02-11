import { mainStyle } from "@/components/stylesConst";
import Form from "@/components/sendEmail/Form";
import React from "react";
import Paragraph from "../../components/Paragraph";

export default function Contact() {
  return (
    <main className={`${mainStyle} relative`}>
      <Paragraph/>
      <Form />
    </main>
  );
}
