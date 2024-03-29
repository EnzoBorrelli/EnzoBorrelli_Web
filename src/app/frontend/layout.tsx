import { ReactNode } from "react";
import Nav from "./nav/nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EnzoBorrelli Web | FrontEnd",
};

export default function FrontEndLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
