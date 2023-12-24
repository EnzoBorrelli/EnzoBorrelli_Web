'use client'
import { motion } from "framer-motion";

const divStyle = "w-1/2 h-full shadow-inner shadow-black flex flex-wrap text-center items-center"

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="bg-white  flex flex-row flex-wrap w-full h-96">
        <section className={`bg-blue-600 ${divStyle}`} > <h1 className="text-3xl font-bold">Edicion de contenido</h1></section>

        <section className={`bg-red-600 ${divStyle}`}><h1 className="text-3xl font-bold">Desarrollo FrontEnd</h1></section>
      </div>
    </main>
  );
}
