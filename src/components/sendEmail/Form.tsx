"use client";

import useLang from "@/languages/useLang";
import send from "./sendAction";
import { useEffect, useState } from "react";
import Alert from "@/components/sendEmail/Alert";
import { motion } from "framer-motion";
import { TiTick } from "react-icons/ti";
import { MdError } from "react-icons/md";
import { useRef } from "react";

const btnVariants = {
  initial: {
    opacity: 0,
    width: "0%",
  },
  animate: {
    opacity: 1,
    width: "100%",
    transition: {
      duration: 1,
    },
  },
};
const iconVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1.2,
    },
  },
};

export default function Form() {
  const ref = useRef<HTMLFormElement>(null);
  const [isBtnPressed, setIsBtnPressed] = useState(false);
  const [nameVal, setNameVal] = useState("");
  const [mailVal, setMailVal] = useState("");
  const [textVal, setTextVal] = useState("");
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (nameVal.length < 1 || mailVal.length < 6 || textVal.length < 1) {
      setIsFormFilled(false);
    } else {
      setIsFormFilled(true);
    }
  });

  function BtnPressed() {
    setIsBtnPressed(true);
    setTimeout(() => {
      setIsBtnPressed(false);
    }, 2000);
  }

  const text = useLang();
  if (!text) return <></>;
  return (
    <div>
      <form
        ref={ref}
        action={async (formData) => {
          await send(formData);
          ref.current?.reset();
          setAlert(true);
        }}
        className="flex flex-col bg-slate-300 p-3 rounded-md border-2 border-slate-700 gap-2"
      >
        <label htmlFor="name">{text.contactName}</label>
        <input
          className="p-1 bg-slate-200"
          type="text"
          placeholder={text.namePlaceHolder}
          id="name"
          name="name"
          onChange={(e) => setNameVal(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          className="p-1 bg-slate-200"
          type="email"
          placeholder={text.mailPlaceholder}
          id="email"
          name="email"
          onChange={(e) => setMailVal(e.target.value)}
          required
        />
        <label htmlFor="message">{text.message}</label>
        <textarea
          className="p-1 bg-slate-200"
          name="message"
          placeholder={text.msgPlaceHolder}
          id="message"
          onChange={(e) => setTextVal(e.target.value)}
          cols={30}
          rows={10}
          required
        ></textarea>
        <button
          onClick={BtnPressed}
          type="submit"
          className="relative bg-slate-600 text-slate-100 p-2 text-lg font-bold rounded-sm"
        >
          <motion.span
            variants={btnVariants}
            initial="initial"
            animate={isBtnPressed ? "animate" : "initial"}
            className={`absolute left-0 top-0 ${
              isFormFilled
                ? "bg-teal-500 text-teal-500"
                : "bg-red-500 text-red-500"
            } h-full p-2`}
          >
            .
          </motion.span>
          <motion.span
            variants={iconVariants}
            initial="initial"
            animate={isBtnPressed ? "animate" : "initial"}
            className="absolute top-0 left-0 text-4xl h-full w-full flex items-center justify-center"
          >
            {isFormFilled ? <TiTick /> : <MdError />}
          </motion.span>
          {text.sendBtn}
        </button>
      </form>
      <Alert isActive={alert} alertClose={() => setAlert(false)} />
    </div>
  );
}
