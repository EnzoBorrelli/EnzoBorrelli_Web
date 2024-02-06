"use client";
import useLang from "@/languages/useLang";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function Alert({
  isActive,
  alertClose,
}: {
  isActive: boolean;
  alertClose: any;
}) {
  const text = useLang();
  if (!text) return <></>;
  return (
    <div className="absolute top-40 left-24">
      <AnimatePresence>
        {isActive && (
          <motion.button
            className="bg-teal-500 w-40 h-12 rounded-lg border-2 border-slate-700 flex flex-col items-center justify-center"
            initial={{ scale: 0, rotateZ: 180 }}
            animate={{ scale: 1.2, rotateZ: 0 }}
            exit={{ scale: 0, rotateZ: 180 }}
            transition={{ delay: 0.5, duration: 1 }}
            key="alert"
            onClick={alertClose}
          >
            <h2 className="text-md pt-2 text-slate-700">{text.mailAlert}</h2>
            <h3 className="text-sm pb-2 text-slate-600">{text.alertClose}</h3>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
