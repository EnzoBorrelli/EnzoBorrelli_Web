'use client'
import useLang from "@/languages/useLang";

export default function Paragraph() {
  const text = useLang();
  if (!text) return <></>;
  return (
    <p className="m-2 text-xl text-center">
      {text.contactText}
    </p>
  );
}
