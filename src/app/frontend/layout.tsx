import { ReactNode } from "react";
import Nav from "./nav/nav";


export default function FrontEndLayout({children,}:{children:ReactNode}) {
  return (
      <>
      <Nav/>
      {children}
      </>
  )
}
