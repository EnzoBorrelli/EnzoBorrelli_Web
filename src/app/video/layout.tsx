import { ReactNode } from "react";
import Nav from "./nav/nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EnzoBorrelli Web | Video Editor",
};

export default function VideoLayout({children,}:{children:ReactNode}) {
  return (
      <>
      <Nav/>
      {children}
      </>
  )
}
